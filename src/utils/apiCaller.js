import Axios from 'axios';
import * as config from '../constants/config';

export default function callApi(endpoid, method = 'GET', body) {
    return Axios({
                method: method,
                url: `${config.API_URL}/${endpoid}`,
                data: body
            }).catch(err => {
                console.log(err);
            })
}
