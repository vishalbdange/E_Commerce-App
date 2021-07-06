import React from 'react'
import {Alert} from '@material-ui/lab';
export const showErrorMsg = (msg) => {    
    return (
        <>
        <Alert severity="error" style={{margin : "5px"}}>Error : {msg}</Alert>
        </>
    )
}


