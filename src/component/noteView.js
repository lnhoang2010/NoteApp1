import {View, Text, TouchableOpacity} from 'react-native'
import React, { Component } from 'react';
import { connect } from 'react-redux'

class NoteView extends Component{
    constructor(props) {
        super(props);
    }

    render(){

        return(
            <View style = {{flex:1, height: 50, flexDirection:'row', justifyContent:'flex-start', borderColor: '#f1f1f1', borderWidth: 0.5, backgroundColor: this.props.data1[this.props.index].tabColor}}>

                <TouchableOpacity
                    style = {{flex:1, flexDirection: 'row'}}
                    onPress = {() => this.props.onPressEdit(this.props.index)}
                    onLongPress = {() => this.props.onTabLongPressed(this.props.index)}>

                    <Text style = {{alignSelf: "center", left: 10, color: 'black'}}>
                        {this.props.data.text}
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data1: state.addData.data,
});

export default connect(mapStateToProps)(NoteView)