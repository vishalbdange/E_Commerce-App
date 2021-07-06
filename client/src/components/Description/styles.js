import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles((theme) =>({  
 
 container : {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
    
 },
 image  : {
     border:"2px solid pink",
     width:"1200px",
     height:"400px",
    textAlign: "center"
 },
 root :{

 }
}));

export default useStyles;