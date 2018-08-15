import * as Types from '../constants/Actiontype';

var initialstatus = [];

const EditProduct = (state=initialstatus,action)=>{
    switch(action.type){
        case Types.EDIT_PRODUCT:
            state = action.product;
            return state;
        default: return [...state]
    }
}
export default EditProduct;