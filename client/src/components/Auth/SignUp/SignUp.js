import React, { useState } from 'react';
import { Link } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline";
import { FormControl, Input, InputLabel, Button, Grid, Typography, formatMs } from "@material-ui/core";
import isEmail from "validator/lib/isEmail"
import isEmpty from "validator/lib/isEmpty"
import equals from "validator/lib/equals"
import useStyles from "./styles"
import { showSuccessMsg } from "../../../helper/showSuccessMsg"
import { showErrorMsg } from "../../../helper/showErrorMsg"
import { Loading } from "../../../helper/Loading"
import { useDispatch } from "react-redux"
import {signUp} from "../../../actions/auth.js"
import {useHistory} from "react-router-dom"
const SignUp = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false
  })
  const {
    username,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading
  } = formData;

  /********************** *
   Event Handlers
   *********************/
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, errorMsg: '', successMsg: '' })
  }
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    //client side validation
    if (isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
      setFormData({
        ...formData, errorMsg: "All Fields are Required"
      })
    } else if (!isEmail(email)) {
      setFormData({
        ...formData, errorMsg: "Invalid Email"
      })
    }
    else if (!equals(password, password2)) {
      setFormData({
        ...formData, errorMsg: "Passwords do not match"
      })
    }
    else {
      const { username, email, password, password2 } = formData;
      const data = { username, email, password };
      setFormData({
        ...formData, loading: true
      })

      dispatch(signUp(data),history);
    }
  }

  return (
    <>
      <CssBaseline />
      <div className={classes.parent}>

        <form className={classes.form}>
          {loading && <div className={classes.loading}>{Loading()}</div>}
          {errorMsg && showErrorMsg(errorMsg)}
          {successMsg && showSuccessMsg(successMsg)}
          <Typography variant="h5" style={{ textAlign: "center" }}>Sign Up </Typography>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="username">
              Username
                </InputLabel>
            <Input
              name="username"
              value={username}
              type="username"
              autoComplete="username"
              onChange={handlechange}
            />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="email">
              e-mail
                </InputLabel>
            <Input
              name="email"
              value={email}
              type="email"
              autoComplete="email"
              onChange={handlechange}
            />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="password" >
              password
                </InputLabel>
            <Input
              name="password"
              value={password}
              type="password"
              onChange={handlechange}
            />
          </FormControl>

          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="passwordConfirm">
              confrim password
                </InputLabel>
            <Input
              name="password2"
              value={password2}
              type="password"
              onChange={handlechange}
            />
          </FormControl>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Join
              </Button>
          <p style={{ textAlign: "center", }}>Have an Account? <Link to="/signin">Login</Link></p>
        </form>
      </div>

      <p>{JSON.stringify(formData)}</p>
    </>
  )
}


export default SignUp;
