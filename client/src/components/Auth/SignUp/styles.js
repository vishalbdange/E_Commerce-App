import makeStyles from "@material-ui/core/styles/makeStyles"



const useStyles = makeStyles((theme) => ({
    avatar :{
        width :"100px",
        height :"100px"
    },
    heading : {
        textAlign : "center",
        font : "bold",
        fontSize : "1.9rem",
        paddingTop : "5px",
        marginBottom : "10px"
    },
    parent :{
        display :"flex",
        alignItems :"center",
        justifyContent :"center",
        minHeight : "90vh",
        // background: "#00bf8f",
        // background: "-webkit-linear-gradient(to right, #001510, #00bf8f)",   
        // background: "linear-gradient(to right, #001510, #00bf8f) ",
    },
    form :{
        border : "2px solid black",
        borderRadius : "10px",
        padding : "10px",
        background: "#efefbb",
        padding : " 20px 40px 40px 40px",
        maxWidth : "700px"
    },
    loading : {
        textAlign : "center"
    },
    subButton :{ 
        backgroundColor : "rgb(0, 128, 96)",
        color : "white",
        fontSize : "1.4rem",
        "&:hover" : {
            backgroundColor : "rgb(0, 98, 96)",
        }
    },
    signdes : {
        textAlign : "center",
        fontSize : "1.1rem",
        marginBottom : 0,
    }




}));

export default useStyles;