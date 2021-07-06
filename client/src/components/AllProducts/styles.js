import makeStyles from "@material-ui/core/styles/makeStyles"
import {red} from '@material-ui/core/colors';
const useStyles = makeStyles((theme) =>({  
 
    product : {
        
    },
    container : {
        paddingTop: "20px",
        display : "flex",
        flexWrap : "wrap",
 
    },
    image : {
        width :"100px",
        backgroundSize : "contain",
        maxWidth: "300px"
    },
    grid : {
        padding:"20px",
    },
    card : {
        minHeight:"347px",
        maxWidth : "360px",
    },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    
      root: {
        maxWidth: 345,
        flexGrow: 1,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
}));

export default useStyles;