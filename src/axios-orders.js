import axios from 'axios';

const instance = axios.create({
    baseUrl:'https://tryit-60c6a-default-rtdb.europe-west1.firebasedatabase.app/name.json'
});

export default instance;