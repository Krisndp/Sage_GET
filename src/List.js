import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class List extends React.Component{
    render(){
        const {item} = this.props;
        return(
            <View style = {{margin:5}}>
                <Text style = {{color:'white', fontSize:15, marginBottom:5}}>{item.nameMovie}</Text>
                <Text style = {{color:'black', fontSize:15}}>{item.year}</Text>
            </View>
        )
    }
}

export default connect()(List)