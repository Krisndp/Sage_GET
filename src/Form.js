import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get('window');

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nameMovie:'',
            year: '',
        }
    }

    render(){
        return(
            <View style = {{ flex: 3}}>
                <View style = {{flex:1, marginLeft:15}}>
                    <Text style = {{color:'black', fontSize:20}}>New movie</Text>
                </View>
                <View style = {{margin: 5, flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TextInput
                        placeholder = 'Name of movie'
                        onChangeText = {text=>this.setState({nameMovie:text})}
                        value = {this.state.nameMovie}
                        style = {{backgroundColor:'white' , width:width - 10, fontSize: 18, color:'black', paddingLeft:10}}
                    />
                </View>
                <View style = {{margin: 5, flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TextInput
                        placeholder = 'Name of movie'
                        onChangeText = {text=>this.setState({year:text})}
                        value = {this.state.year}
                        style = {{backgroundColor:'white' , width:width - 10, fontSize: 18, color:'black', paddingLeft:10}}
                    />
                </View>
            </View>
        )
    }
}

export default connect()(Form);