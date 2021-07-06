import React, { useState,useEffect } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { FormControl, Button, Typography,TextField } from "@material-ui/core";
import isEmail from "validator/lib/isEmail"
import isEmpty from "validator/lib/isEmpty"
import equals from "validator/lib/equals"
import useStyles from "./styles"
import { showSuccessMsg } from "../../../helper/showSuccessMsg"
import { showErrorMsg } from "../../../helper/showErrorMsg"
import { Loading } from "../../../helper/Loading"
import { Link,useHistory } from "react-router-dom"
import { isAuthenticated } from "../../../helper/auth"
import { signUp } from "../../../api/auth.js"
const SignUp = () => {
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role == 1) {
      history.push("/admin/dashboard");
    }
    else if (isAuthenticated() && isAuthenticated().role == 0) {
      history.push("/user/dashboard");
    }
  }, [history])



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

      signUp(data)
        .then(response => {
          console.log(response);
          setFormData({
            username: "",
            email: "",
            password: "",
            password2: "",
            successMsg: response.data.successMessage,
            loading: false,
            errorMsg,
          })
        })
        .catch(err => {
          console.log("Axxios Sign Up error", err, err.response);
          setFormData({ ...formData, loading: false, errorMsg: err.response.data.errorMessage });
        })
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
          <Typography variant="h5" className={classes.heading}>Sign Up </Typography>
          <FormControl required fullWidth margin="normal">
            <TextField
              variant="outlined"
              className={classes.inp}
              label="Username"
              name="username"
              value={username}
              type="username"
              autoComplete="username"
              onChange={handlechange}
            />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <TextField
              variant="outlined"
              className={classes.inp}
              label="Email"
              name="email"
              value={email}
              type="email"
              autoComplete="email"
              onChange={handlechange}
            />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <TextField
              variant="outlined"
              className={classes.inp}
              label="Password"
              name="password"
              value={password}
              type="password"
              onChange={handlechange}
            />
          </FormControl>

          <FormControl required fullWidth margin="normal">
            <TextField
              variant="outlined"
              className={classes.inp}
              label="Confirm Password"
              name="password2"
              value={password2}
              type="password"
              onChange={handlechange}
            />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <Button
              fullWidth
              className={classes.subButton}
              variant="outlined"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Join
            </Button>
          </FormControl>

          <p className={classes.signdes}>Have an Account? <Link to="/signin">Login</Link></p>
        </form>
      </div>

      <p>{JSON.stringify(formData)}</p>
    </>
  )
}


export default SignUp;
