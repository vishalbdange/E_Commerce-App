import React, { useEffect, useState,Fragment } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Avatar,
  Tooltip,
  Fab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles.js";
import { Link , withRouter } from "react-router-dom"
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { isAuthenticated , logout } from "../../helper/auth.js";


const Navbar = ({history}) => {
  const {
    mobileloginMenu,
    parentTool,
    midNavbar,
    appBarSpacer,
    logo,
    menuButton,
    appBar,
    brandContainer,
    toolbar,
    drawerContainer,
    image,
    heading,
  } = useStyles();

 
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  //Setting state fro mobileview
  const { mobileView, drawerOpen } = state;


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (e) =>{
    logout(() =>{
      history.push("signin");
    })
  }


  //get user data

  useEffect(() => {
    //Function which returns the current view of the window.
    const setResponsiveness = () => {
      return window.innerWidth < 900 && window.innerWidth > 100
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  const getDrawerChoices = () => {
 

    return (
      <>
      {
        (!isAuthenticated() &&
          <Fragment >
            <Link
              to="/"
              color="inherit"
              className={menuButton}
              key="Home"
            >
              <MenuItem>Home</MenuItem>
            </Link>   
            <Link
              to="/signup"
              color="inherit"
              className={menuButton}
              key="Sign Up"
            >
              <MenuItem>Sign Up</MenuItem>
            </Link>
            <Link
              to="/signin"
              color="inherit"
              className={menuButton}
              key="signin "
            >
              <MenuItem>signin </MenuItem>
            </Link>
          </Fragment>
        )}
        {(isAuthenticated() && isAuthenticated().role == 0 &&
            <Link to="/">
            <Button className={menuButton}>
              Logout
            </Button>
          </Link>
         )}

      </>
    );
  };

const getMenuButtons = () => {
    return (
      <>
        <div className={midNavbar}>

        {
         (!isAuthenticated() && 
          <Fragment>
            <Link  to="/">
              <Button className={menuButton}>
                Home
              </Button>
            </Link>
            <Link to="/signup">
              <Button className={menuButton}>
                Sign Up
              </Button>
            </Link>
            <Link to="signin">
              <Button className={menuButton}>
                Sign In
              </Button>
            </Link>
          </Fragment>
         )}

         {(isAuthenticated() && isAuthenticated().role == 0 &&
         <Fragment>
            <Link to="/user/dashboard ">
              <Button className={menuButton}>
               dashboard
              </Button>
            </Link>    
            </Fragment>   
         )}
        {(isAuthenticated() && isAuthenticated().role == 1 &&
          <Fragment>
            <Link to="/admin/dashboard ">
              <Button className={menuButton}>
               dashboard
              </Button>
            </Link>  
          </Fragment>     
         )}
        {(isAuthenticated() &&
          <Fragment>
            <Link to="/signin">
              <Button className={menuButton} onClick={handleLogout}>
               Logout
              </Button>
            </Link>   
          </Fragment>    
         )}
        </div>
        </>
    )}
    {/* // return navData.map(({label,href}) => {
    //     return (
    //         <Button
    //             {...{
    //                 component :RouterLink,
    //                 to : href,
    //                 key : label,
    //                 className : menuButton,
    //                 onClick:{logOut}
    //             }}

    //         >
    //         {label}
    //         </Button>
    //     );
    // })
  }; */}

  ///DisplayDesktop() Functionality

  //Writing displayMobile() functionality
  const displayDesktop = () => {
    return (
      <>
        <MenuBookIcon style={{ margin: "20px" }} />
        <Toolbar className={toolbar}>{getMenuButtons()}</Toolbar>
      </>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };
    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    };

    return (
      <>
        <Toolbar className={parentTool}>
          <IconButton
            {...{
              edge: "start", //Allows Button to be Positioned at the start
              color: "inherit", //lets the icon the color specified to closest top level component
              "aria-label": "menu", //These two meant for screen readers to notify users ,this element is menu , this element is pop up
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>

          <MenuBookIcon style={{ margin: "20px" }} />
        </Toolbar>
        </>
    );
  };

  return (
    <>
      <AppBar className={appBar} position="fixed">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>

      <div className={appBarSpacer}></div>
    </>
  );
};

export default withRouter(Navbar);
