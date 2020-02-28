import axios from 'axios';
import {api} from '../../hidden';

export const getCategories = () => {
    return axios({
        method: 'get',
        url: `${api}getcategories.php`,
    })
};