import React, { Component } from 'react';
import { TouchableOpacity, View, Alert } from 'react-native'
import { Icon } from 'react-native-elements'

export default class HeaderScreen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {showDeleteButton: false, showChooseAllButton: true, showMenuButton: true}
        this.onDeleteButtonClicked = this.onDeleteButtonClicked.bind(this)
        this.onMenuButtonClicked = this.onMenuButtonClicked.bind(this)
    }

    onDeleteButtonClicked(){
        Alert.alert(
            'Delete note',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => {}
                }
            ]
        )
    }

    onMenuButtonClicked(){
        this.setState({showDeleteButton: true, showChooseAllButton: false, showMenuButton: false}) 
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row", justifyContent:'space-between', paddingRight: 30 }}>
                {this.state.showChooseAllButton && <TouchableOpacity style={{ height: 30, width: 30, alignSelf: 'center'}}>
                    <Icon style = {{flex: 1}}
                        name = 'done'
                        color = 'white'
                        size = {30}
                    />
                </TouchableOpacity>}
            
                {this.state.showMenuButton && <TouchableOpacity style={{ height: 30, width: 30, left: 20, alignSelf: 'center'}}>
                    <Icon style = {{flex: 1}}
                        name = 'list'
                        color = 'white'
                        size = {30}
                        onPress = {this.onMenuButtonClicked}
                    />
                </TouchableOpacity>}
            
                {this.state.showDeleteButton && <TouchableOpacity style={{height: 30, width: 30, left: 10, alignSelf: 'center'}}>
                    <Icon style = {{flex: 1}}
                        name = 'delete'
                        color = 'white'
                        size = {30}
                        onPress = {this.onDeleteButtonClicked}
                    />
                </TouchableOpacity>}

            </View>
        )
    }
}
