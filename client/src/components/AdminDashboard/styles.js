import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles((theme) => ({  
    header :{
        width :"100%",
        background : "cyan",
        zIndex : "1",
        textAlign : "center",
        fontWeight : "800",
        fontSize : "25px",
        padding : "20px",
        " @media screen and (max-width: 992px) " : {
            "body" :  {
              backgroundColor: "blue",
            }
          }
    },
    catbutton : {
        padding : "10px 20px",
        margin : "10px",
        width : "80%",
        background : "violet",

    }
}));

export default useStyles;