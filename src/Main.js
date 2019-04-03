import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {connect} from 'react-redux';
import Botton from './Botton';
import Form from './Form';
import List from './List';
import axios from 'axios';

class Main extends React.Component{
    constructor(props){
        super(props);

    }
    componentWillMount(){
        // axios({
        //     method: 'get',
        //     url: 'http://192.168.0.103:8888/',
        //     // data: null,
        //     // headers: {
        //     //     "X-Sapo-SessionId": "77f71b9c905ea73ddad74e511607321f"
        //     // },
        //     // params: {
        //     //     query: this.state.text
        //     // }
        // })
        //     .then(response => {
        //         // const categories = response.data.categories;
        //         // this.setState({ categories });
        //         console.log(response);
                
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:'pink'}}>
                <View style= {{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:25, color:'green'}}>Redux_Saga</Text>
                </View>
                <Form/>
                <Botton/>
                <View style = {{flex:7}}>
                <View style = {{marginBottom:10}}>
                    <FlatList
                    data = {this.props.myState}
                    renderItem = {({item}) => <List item = {item}/>}
                    keyExtractor = {item => item.id}
                    />
                </View>
                </View>
                
            </View>
        )
    }
}

function mapStateToProps(state){
    Alert.alert(JSON.stringify(state));
    return{ myState: state}
}

export default connect(mapStateToProps)(Main);