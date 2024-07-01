import axios from 'axios'; 

let baseURL; 

baseURL = "https://resto-cafe-backend.onrender.com"; 

const api = axios.create({
    baseURL: baseURL, 
    headers: {
        'Content-Type' : 'application/json',
    }
})


export default class API {

    getItems = async (category) => {
        let url = '/items';
        if (category) {
            url += "?category=" + category; 
        }
        const items = await api 
            .get(url) 
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            })
        return items;
    } 

    getReviews = async (item_id) => {
        let url = '/reviews?item_id' + item_id
        const reviews = await api 
            .get(url) 
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            })
        return reviews;
    }

    writeReviews = async (item_id, name, body, like_count) => {
        const formData = new FormData();
        
        formData.append('item', item_id);
        formData.append('name', name);
        formData.append('body', body);
        formData.append('like_count', like_count);

        const sendReview = await api 
            .post('/reviews/add', formData) 
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            })
        return sendReview;
        
    } 
}
