import React, { Component } from 'react';
// import { Button } from 'react-native-elements';
import { View, FlatList, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux'
import NameView from '../component/view'
import { deleteData} from '../actionType/action'
import HeaderScreen1 from '../component/header/headerScreen1'
// import { Icon } from 'react-native-elements'

class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {showDeleteButton: false, showChooseAllButton: true, showMenuButton: true}
    }

    static navigationOptions = ({ navigation }) => {
        return {
          title: "Notepad",
          headerRight: <HeaderScreen1/>
        };
    };

    onPressEditElement(i){
        const { navigate } = this.props.navigation;
        navigate('Screen2', {index:i})
    }

    onPressDeleteElement(i){
        this.props.dispatch(deleteData(i))
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style = {{flex: 1}}>
                <FlatList
                    style = {{flex: 1}}
                    data = {this.props.data}
                    renderItem = {({item, index}) => <NameView
                        data = {item}
                        index = {index} 
                        onPressEdit = {(i)=>this.onPressEditElement(i)} 
                        onPressDelete = {(i)=> this.onPressDeleteElement(i)}
                    />}
                />

                <TouchableOpacity
                    style={{position: "absolute", width: 60, height: 60, bottom: 30, right: 30}}
                    onPress={() => {
                        navigate('Screen2')
                    }}>
                    <Image
                        style = {{width: "100%", height: "100%"}}
                        source = {{uri:"https://cdn3.iconfinder.com/data/icons/rest/30/add_order-512.png"}}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.addData.data,
});

export default connect(mapStateToProps)(Screen1)