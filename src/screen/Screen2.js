import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addData, editData } from './../actionType/action'
import HeaderScreen2 from '../component/header/headerScreen2'

class Screen2 extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = { name: params ? this.props.data[params.index].text : "" }
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerRight: <HeaderScreen2 onDeleteClicked={navigation.getParam('onDeleteClicked')} onSaveClicked={navigation.getParam('onSaveClicked')} />
    }
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;

    this.props.navigation.setParams({
      onDeleteClicked: () => this.onDeleteClicked(),
      onSaveClicked: () => this.onSaveClicked(),
      title: params ? this.props.data[params.index].text : "New note"
    })
  }

  handleNameChange(text) {
    this.setState({ name: text })
  }

  onDeleteClicked = () => {
    this.setState({ name: "" });
  }

  onSaveClicked = () => {
    if (!this.state.name) {
      alert("Please enter something")
    }
    else {
      this.props.dispatch(addData(this.state.name))
      this.props.navigation.navigate('Screen1')
    }
  }

  render() {

    return (
      <View style={{ flex: 1 }}>

        <TextInput
          style={{ flex: 1, textAlignVertical: 'top' }}
          maxLength={60}
          value={this.state.name}
          onChangeText={(text) => this.handleNameChange(text)}
        />

        {/* <Button
          title='Save'
          type='outline'
          buttonStyle={{ top: 150, width: 100, height: 50, alignSelf: 'center' }}
          onPress={() => {
            if (this.state.name.length) {
              this.props.navigation.navigate('Screen1');

              if (this.props.navigation.state.params) {
                this.props.dispatch(editData(this.state.name, this.props.navigation.state.params.index))
                return;
              }
              this.props.dispatch(addData(this.state.name))

            }
            else {
              alert("Please enter something")
            }
          }}
        
        /> */}
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  data: state.addData.data
});

export default connect(mapStateToProps)(Screen2)
