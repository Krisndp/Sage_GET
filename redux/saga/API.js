import axios from 'axios';
import data from '../data.json'

//const urlGetMovies = 'http://localhost:3000/movie';
function* getMoviesFromAPI() {
    console.log('haha')
    console.log(data)
    return data;
    // const response = yield axios({urlGetMovies,{
    //     method: 'GET',
    //     headers:{
    //         Accept:'application/json',
    //         'Content-Type':'application/json',
    //     },
    //     body:'',
    // }});
    // const movies = yield response.status === 200 ? JSON.stringify(response) : []
    // console.log('haha')
    // return movies;

    // axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/movie',
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

export const API = {
    getMoviesFromAPI
};