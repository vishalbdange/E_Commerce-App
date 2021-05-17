import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Grid,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from "./styles"



const AdminDashboard = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const classes = useStyles();
    return (
    <section>
      <CssBaseline />
      <div className={classes.parent}>  
            <Typography className={classes.header} onClick={handleClickOpen}>DashBoard</Typography>    
            <Grid container xs={12}>
              <Grid item xs= {4}>
                <Button className={classes.catbutton} variant="outlined" color="primary" onClick={handleClickOpen}>
                  <Typography>
                    Add Category
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs= {4}>
                <Button className={classes.catbutton} variant="outlined" color="primary" onClick={handleClickOpen}>
                  <Typography>
                    Add Category
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs= {4}>
                <Button className={classes.catbutton} variant="outlined" color="primary" onClick={handleClickOpen}>
                  <Typography>
                    Add Category
                  </Typography>
                </Button>
              </Grid>
          </Grid>

          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add category</DialogTitle>
            <DialogContent >
              <form>
                <Typography >Category</Typography>
                <br/>
              <TextField
                autoFocus
                margin="dense"  
                id="name"
                label="Category Name"
                type="name"
                fullWidth
                variant="outlined"
              />
            </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button> 
              <Button  onClick={handleClose} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
      </div>

    </section>
    )
}

export default AdminDashboard
