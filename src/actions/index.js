import  * as Types from '../constants/Actiontype';
import callApi from '../utils/apiCaller';

/* 
    Actions get product 
*/
export const actFechProductReques = ()=>{
    return (dispatch)=>{
        return callApi('product','GET',null).then(res=>{
                dispatch(actFechProduct(res.data));
            })
    }
}

export const actFechProduct = (products)=>{
    return{
        type:Types.FETCH_PRODUCTS,
        products
    }
}

/********************Action xóa***********************/
export const actDeleteProduct = (id)=>{
    return {
        type:Types.DELETE_PRODUCT,
        id
    }
}

export const actDeleteProductReques=(id)=>{
    return (dispatch)=>{
        return callApi(`product/${id}`,'DELETE',null).then(res=>{
            dispatch(actDeleteProduct(id));
        })
    }
}
/**********************ADDPRODUCT********************************/

export const actAddproduct = (product)=>{
    return {
        type:Types.ADD_PRODUCT,
        product
    }
}

export const actAddproductReques=(product)=>{
    return dispatch=>{
        return callApi('product','POST',product).then(res=>{
            dispatch(actAddproduct(res.data));
        })
    }
}

/**********************EDITPRODUCT***************************/

export const editProductReques = (id)=>{
    return dispatch=>{
        return callApi(`product/${id}`,'GET',null).then(res=>{
            dispatch(editProduct(res.data));
        })
    }
}
export const editProduct = (product)=>{
    return {
        type:Types.EDIT_PRODUCT,
        product
    }
}
/************************UPDATLE************************/

export const upDateProductReques=(product)=>{
    return dispatch=>{
        return callApi(`product/${product.id}`,'PUT',product).then(res=>{
            dispatch(upDateProduct(product));
        })
    }
}

export const upDateProduct = (product)=>{
    return{
        type:Types.UPDATE_PRODUCT,
        product
    }
}