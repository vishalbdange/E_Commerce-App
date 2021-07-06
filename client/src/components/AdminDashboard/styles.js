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

    },
    TitleItem : {
      background :"orange",
      padding : "10px"
    },
    formControl: {
      minWidth: 550,
      marginTop : "10px",
      marginBottom : "10px",

    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    span  :{
      marginRight : "20px",
      fontSize : "18px",
    },
    inputFile : {
      padding :"10px",
      border : "1px solid grey",
      borderRadius : "4px"
    },
    products : {
      display  : "flex",
      flexDirection : "row",
      maxWidth : "60vw",
      justifyContent : "center",
      alignItems : "space-between",
      alignContent : "space-between"
    }
}));

export default useStyles;