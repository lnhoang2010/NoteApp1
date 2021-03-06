import React, { Component } from 'react';
import { TouchableOpacity, View} from 'react-native'
import { Icon } from 'react-native-elements'

export default HeaderScreen2 = (props) =>{
        // const { onDeleteClicked, onSaveClicked, meter} = props;
        return(
            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30}}>
                <TouchableOpacity
                    style = {{height: 30, width: 30, alignSelf: 'center'}}
                    onPress = {()=> {
                        props.onSaveClicked()
                    }}>
                    <Icon
                        style = {{flex: 1}}
                        name = 'save'
                        color = 'white'
                        size = {30}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style = {{height: 30, width: 30, alignSelf: 'center', left: 10}}
                    onPress = {() => props.onDeleteClicked()}>
                    <Icon
                        style = {{flex: 1}}
                        name = 'delete'
                        color = 'white'
                        size = {30}
                    />
                </TouchableOpacity>

                <TouchableOpacity style = {{height: 30, width: 30, alignSelf: 'center', left: 20}}>
                    <Icon
                        style = {{flex: 1}}
                        name = 'list'
                        color = 'white'
                        size = {30}
                    />
                </TouchableOpacity>

            </View>
        )
    }