import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import HeaderScreen2 from '../component/header/headerScreen2'
import Screen2Helper from '../model/Screen2'

class Screen2 extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = { text: params ? this.props.data[params.index].text : "" }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'New note'),
      headerRight: <HeaderScreen2
        onDeleteClicked={navigation.getParam('onDeleteClicked')}
        onSaveClicked={navigation.getParam('onSaveClicked')} />
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({
      onDeleteClicked: () => this.onDeleteClicked(),
      onSaveClicked: () => this.onSaveClicked(),
    })
  }

  handleTextChange = (text) => {
    this.setState({ text: text })
  }

  onDeleteClicked = () => {
    this.setState({ text: "" });
  }

  onSaveClicked = () => {
    if (this.state.text.length) {
      this.props.navigation.navigate('Screen1');

      Screen2Helper.onSaveClicked(this.props.navigation.state.params.index, this.state.text)
    }
    else {
      alert("Please enter something")
    }
  }

  render() {

    return (
      <View style={{ flex: 1 }}>

        <TextInput
          style={{ flex: 1, textAlignVertical: 'top' }}
          maxLength={60}
          value={this.state.text}
          onChangeText={(text) => this.handleTextChange(text)}
        />

      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  data: state.addData.data
});

export default connect(mapStateToProps)(Screen2)
