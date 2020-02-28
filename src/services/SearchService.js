import axios from 'axios';
import {api} from '../../hidden';

export const searchProductsOrCategories = (searched) => {
    return axios({
        method: 'post',
        url: `${api}search.php`,
        data: JSON.stringify({searched})
    })
};