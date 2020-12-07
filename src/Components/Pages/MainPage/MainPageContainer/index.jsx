import React,{useEffect} from 'react';
import {connect} from "react-redux";
import {MainPage} from "../../index";
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import loading from '../../../../Assets/loading.gif'


let MainPageContainer = ()=>{
    return(
        <MainPage/>
    )
}

let mapStateToProps =(state)=>{
    return{

    }
}


export default compose(
        connect(mapStateToProps),
        withRouter,
        )(MainPageContainer);