import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {fetchMoviesAction,addMovieAction} from '../redux/action/actionCreators';

class Botton extends React.Component{

    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                <TouchableOpacity onPress = {()=>this.props.addMovieAction('asdda')} style = {{flex: 1, margin:10, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
                    <Text style={{fontSize:20, color:'white', margin:10}}>Add movies</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>this.props.fetchMoviesAction()} style = {{flex: 1, margin:10, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
                    <Text style={{fontSize:20, color:'white', margin:10}}>Fetch movies</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(null,{addMovieAction,fetchMoviesAction})(Botton);