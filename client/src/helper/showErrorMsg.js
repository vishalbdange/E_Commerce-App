import React from 'react'
import {Alert} from '@material-ui/lab';
export const showErrorMsg = (msg) => {    
    return (
        <>
        <Alert severity="error">Error : {msg}</Alert>
        </>
    )
}


