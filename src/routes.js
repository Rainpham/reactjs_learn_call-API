import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductAction from   './pages/ProductActionPage/ProductAction';



const routers = [
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/product-list',
        exact:false,
        main:()=><ProductListPage />
    },
    {
        path:'/product-add',
        exact:false,
        main:({history})=><ProductAction history={history}/>
    },
    {
        path:'/product-edit/:id',
        exact:false,
        main:({match,history})=><ProductAction match={match} history={history}/> //muon lay tham so phai co doi tuong match
    },
    {
        path:'',
        exact:false,
        main:()=><NotFoundPage/>
    }
];
export default routers;