import React,{useEffect} from 'react';
import {connect} from "react-redux";
import {Search} from "../../index";


let SearchContainer= ()=>{


    useEffect(()=>{

    },[])


    return(
            <Search/>
    )
}

let mapStateToProps =(state)=>{

    return{

    }
}


export default connect(mapStateToProps)(SearchContainer)
