import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

class HeaderScreen1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{ flex: 1, flexDirection: "row", justifyContent:'space-between', paddingRight: 30 }}>
                {this.props.headerState.showOtherButtons && <TouchableOpacity style={{ height: 30, width: 30, alignSelf: 'center'}}>
                    <Icon style = {{flex: 1}}
                        name = 'done'
                        color = 'white'
                        size = {30}
                        onPress = {() => this.props.onChooseAllClicked()}
                    />
                </TouchableOpacity>}
            
                {this.props.headerState.showOtherButtons && <TouchableOpacity style={{ height: 30, width: 30, left: 20, alignSelf: 'center'}}>
                    <Icon style = {{flex: 1}}
                        name = 'list'
                        color = 'white'
                        size = {30}
                    />
                </TouchableOpacity>}
            
                {this.props.headerState.showDeleteButton && <TouchableOpacity style={{height: 30, width: 30, left: 10, alignSelf: 'center'}}>
                    <Icon style = {{flex: 1}}
                        name = 'delete'
                        color = 'white'
                        size = {30}
                        onPress = {() => this.props.onDeleteClicked()}
                    />
                </TouchableOpacity>}

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    headerState: state.changeHeaderState.headerState,
});

export default connect(mapStateToProps)(HeaderScreen1)