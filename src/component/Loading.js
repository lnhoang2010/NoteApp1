import React, { Component } from 'react';
import { View, Animated, Easing, Text } from 'react-native'
import { connect } from 'react-redux'
import {changeLoadingState} from '../actionType/action'

class Loading extends Component {
    componentWillReceiveProps(nextProps){
        if(nextProps.showLoading){
            setTimeout(() => {
                this.props.dispatch(changeLoadingState());
                this.playAnimation();
            }, 1500)
        }
    }

    constructor(props) {
        super(props);
        this.state = { spinValue: new Animated.Value(0) };

        this.spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
    }

    componentDidMount(){
        this.playAnimation();
    }

    playAnimation = () => {
        Animated.loop(Animated.timing(
            this.state.spinValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )).start();
    }

    render() {
        return (
            <View style={{ position: 'absolute', width: '100%', height: '100%'}}>
                {this.props.showLoading && <View style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.8, backgroundColor: 'white'}}>
                    <Animated.Image
                        style={{ width: 100, height: 100, alignSelf: 'center', top: 150, transform: [{ rotate: this.spin }] }}
                        source={{ uri: 'https://cdn3.iconfinder.com/data/icons/interaction-design/512/Loading_C-512.png' }}
                    />

                    <Text style = {{color: 'black', fontSize: 15, alignSelf: 'center', top: 160}}>
                        Loading
                    </Text>
                </View>}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    showLoading: state.changeLoadingState.showLoading
});

export default connect(mapStateToProps)(Loading)