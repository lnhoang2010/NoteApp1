import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { connect } from 'react-redux'
import NoteView from '../component/noteView'
import HeaderScreen1 from '../component/header/headerScreen1'
import Screen1Helper from '../model/Screen1'

class Screen1 extends Component {
    constructor(props) {
        super(props);
        Screen1Helper.listenChangeData();
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Notepad'),
            headerRight: <HeaderScreen1
                modifyTitleScreen1={navigation.getParam('modifyTitleScreen1')}
                onChooseAllClicked={navigation.getParam('onChooseAllClicked')}
                onDeleteClicked={navigation.getParam('onDeleteClicked')} />
        };
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.data!==this.props.data){
            this.modifyTitleScreen1(nextProps.data);
        }
      }

    componentDidMount() {
        this.props.navigation.setParams({ modifyTitleScreen1: () => this.modifyTitleScreen1() })
        this.props.navigation.setParams({ onChooseAllClicked: () => this.onChooseAllClicked() })
        this.props.navigation.setParams({ onDeleteClicked: () => this.onDeleteClicked() })

        Screen1Helper.loadData()
    }

    modifyTitleScreen1 = (data = this.props.data) => {
        
        var selectedNote = 0;
        for (i = 0; i < data.length; i++) {
            if (data[i].choosen) {
                selectedNote++;
            }
        }

        if (selectedNote == 1) {
            this.props.navigation.setParams({ title: selectedNote + " note selected" })
        }
        else if (selectedNote == 0) {
            this.props.navigation.setParams({ title: 'Notepad' })
        }
        else {
            this.props.navigation.setParams({ title: selectedNote + " notes selected" })
        }
    }

    onChooseAllClicked = () => {
        Screen1Helper.onChooseAllClicked(this.props.data, this.props.headerState) 
    }

    onTabLongPressed = (index) => {
        Screen1Helper.onLongPressed(index, this.props.data)
    }

    onDeleteClicked = () => {
        Alert.alert(
            'Delete note',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => {
                        Screen1Helper.onDeleteClicked(this.props.data);
                        this.props.navigation.setParams({ title: 'Notepad' })
                    }
                }
            ]
        )
    }

    onPressEditElement = (i) => {
        const { navigate } = this.props.navigation;
        var titleTrimmed = ""

        if (this.props.data[i].text.length > 10) {
            titleTrimmed = this.props.data[i].text.substr(0, 10) + "...";
        }
        else {
            titleTrimmed = this.props.data[i].text
        }

        this.resetView()
        navigate('Screen2', { index: i, title: titleTrimmed })
    }

    onCreateButtonClicked = () => {
        const { navigate } = this.props.navigation;
        navigate('Screen2')
        this.resetView()
    }

    resetView = () => {
        Screen1Helper.onCreateClicked(this.props.headerState, this.props.data)
        this.props.navigation.setParams({ title: 'Notepad' })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.props.data}
                    renderItem={({ item, index }) => <NoteView
                        data={item}
                        index={index}
                        onPressEdit={(i) => this.onPressEditElement(i)}
                        onTabLongPressed={(i) => this.onTabLongPressed(i)}
                    />}
                />

                <TouchableOpacity
                    style={{ position: "absolute", width: 60, height: 60, bottom: 30, right: 30 }}
                    onPress={() => { this.onCreateButtonClicked() }}>

                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={{ uri: "https://cdn3.iconfinder.com/data/icons/rest/30/add_order-512.png" }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.addData.data,
    headerState: state.changeHeaderState.headerState
});

export default connect(mapStateToProps)(Screen1)