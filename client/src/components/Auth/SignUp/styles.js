import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles((theme) => ({
    avatar :{
        width :"100px",
        height :"100px"
    },
    parent :{
        display :"flex",
        alignItems :"center",
        justifyContent :"center",
        minHeight : "80vh",
    },
    form :{
        border : "2px solid black",
        borderRadius : "10px",
        padding : "10px",
    },
    loading : {
        textAlign : "center"
    }





}));

export default useStyles;