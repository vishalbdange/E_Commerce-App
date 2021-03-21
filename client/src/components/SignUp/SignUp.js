import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";

const SignUp = () => {
    return (
        <>
        <CssBaseline />

<Paper >
  <Avatar >
    <PeopleAltIcon  />
  </Avatar>
  <form
  >
    <FormControl required fullWidth margin="normal">
      <InputLabel htmlFor="email" >
        e-mail
      </InputLabel>
      <Input
        name="email"
        type="email"
        autoComplete="email"
      />
    </FormControl>

    <FormControl required fullWidth margin="normal">
      <InputLabel htmlFor="password" >
        password
      </InputLabel>
      <Input
        name="password"        
      />
    </FormControl>

    <FormControl required fullWidth margin="normal">
      <InputLabel htmlFor="passwordConfrim">
        confrim password
      </InputLabel>
      <Input
        name="passwordConfrim"
      />
    </FormControl>
    <Button
      fullWidth
      variant="outlined"
      type="submit"
    >
      Join
    </Button>
  </form>
</Paper>
        </>
    )
}

export default SignUp
