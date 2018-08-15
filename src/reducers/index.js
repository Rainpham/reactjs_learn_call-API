import {combineReducers} from 'redux';
import products from '../reducers/product';
import EditProduct from '../reducers/itemediting';

const appReducers = combineReducers({
    products,
    EditProduct
});
export default appReducers;