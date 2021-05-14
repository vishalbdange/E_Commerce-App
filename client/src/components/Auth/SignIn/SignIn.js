import React, { useState,useEffect } from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import { FormControl, Input, InputLabel, Button, Grid, Typography, formatMs } from "@material-ui/core";
import isEmail from "validator/lib/isEmail"
import isEmpty from "validator/lib/isEmpty"
import useStyles from "./styles"
import { showSuccessMsg } from "../../../helper/showSuccessMsg"
import { showErrorMsg } from "../../../helper/showErrorMsg"
import { Loading } from "../../../helper/Loading"
import { signIn } from "../../../api/auth.js"
import { Link,useHistory } from "react-router-dom"
import { isAuthenticated, setAuthentication } from "../../../helper/auth"
const SignIn = () => {
  const history = useHistory();
  const classes = useStyles();


  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role == 1) {
      history.push("/admin/dashboard");
    }
    else if (isAuthenticated() && isAuthenticated().role == 0) {
      history.push("/user/dashboard");
    }
  }, [history])


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errorMsg: false,
    loading: false,
    redirectToDashboard: false,
  })
  const {
    email,
    password,
    errorMsg,
    loading
  } = formData;



  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, errorMsg: '' })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData, errorMsg: "All Fields are Required"
      })
    } else if (!isEmail(email)) {
      setFormData({
        ...formData, errorMsg: "Invalid Email"
      })
    }
    else {
      const { email, password } = formData;
      const data = { email, password };
      setFormData({
        ...formData, loading: false
      })
      signIn(data)
        .then(response => {
          setAuthentication(response.data.token, response.data.user)

          if (isAuthenticated() && isAuthenticated().role == 1) {
            history.push("/admin/dashboard");
          }
          else {
            history.push("/user/dashboard");
          }
        })
        .catch(err => {
          console.log(err.response.data.errorMsg)
          setFormData({
            ...formData,
            loading : false,
            errorMsg: err.response.data.errorMessage
          })
          console.log("Signin api Function Error", err);

        })
    }
  }
  //   signUp(data)
  //     .then(response => {
  //       console.log(response);
  //       setFormData({
  //         username: "",
  //         email: "",
  //         password: "",
  //         password2: "",
  //         successMsg: response.data.successMessage,
  //         loading: false,
  //         errorMsg,
  //       })
  //     })
  //     .catch(err => {
  //       console.log("Axxios Sign Up error", err, err.response);
  //       setFormData({ ...formData, loading: false, errorMsg: err.response.data.errorMessage });
  //     })
  // }

  return (
    <>
      <h1>This is SignIn</h1>
      <CssBaseline />
      <div className={classes.parent}>

        <form className={classes.form}>
          {loading && <div className={classes.loading}>{Loading()}</div>}
          {errorMsg && showErrorMsg(errorMsg)}
          <Typography variant="h5" style={{ textAlign: "center" }}>Sign In </Typography>
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
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Login
              </Button>
          <p style={{ textAlign: "center", }}>Don't have an Account? <Link to="/signup">SignUp</Link></p>
        </form>
      </div>

      <p>{JSON.stringify(formData)}</p>
    </>
  )
}

export default SignIn
