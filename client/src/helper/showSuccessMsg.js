import React from 'react'
import {Alert} from '@material-ui/lab';
export const showSuccessMsg = (msg) => {    
    return (
        <>
        <Alert severity="success" >Success : {msg}</Alert>
        </>
    )
}




