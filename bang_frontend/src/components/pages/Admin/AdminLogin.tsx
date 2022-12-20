import FormControlLabel from '@mui/material/FormControlLabel';
import {Button, TextField, Checkbox, Link, Paper, Box, Grid, Typography, CssBaseline } from '@mui/material';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import '../../css/Admin.css';
import logo from '../../logo/BangLogo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        Bang!
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);

  const [loginData, setLoginData] = useState({
      username: "",
      password: ""
  });

  const { username, password } = loginData;

  const onInputChange = (e: any) => {
      setLoginData({...loginData, [e.target.name]: e.target.value });
  };

  const checkSignIn = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (username.trim().length !== 0  && password.trim().length !== 0) {
      axios.get(`http://localhost:8080/user/findByUsername?username=${username}`)
      .then((result) => {
          if(result.data.username !== null) { // Check if username exist
              console.log(result.data)
              if(result.data.password === password) { // Check if password is correct
                  if(result.data.userType === "Admin") { // Check user type login is correct
                      //handleSetUser({ //this is for useContext
                      //  userid: res.data.userid,
                      //  firstname: res.data.firstname,
                       // lastname: res.data.lasttname,
                      //  email: res.data.email,
                      //  username: res.data.username,
                      //  password: res.data.password,
                       // userType: res.data.userType,
                      //});
                      setLogged(true);
                      alert("User Login Success");
                      navigate("/adminmenu");
                    }else {
                      alert("User Login Error (Wrong user type login))")
                    }
                  }else {
                    alert("Invalid login credentials! Please check.")
                  }
                } else {
                  alert("User does not exist! ")
                }
      }).catch(err => {
        console.log(err)
      })
  }else {
    alert("Fill up fields first!")
  }
}
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "static/dashboard/pc_room.jpg",
            backgroundRepeat: 'no-repeat',
            backgroundColor: "#282c34",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={7} square>
          <Box sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img style={{ width: 80, height: 80 }} src={logo} alt="Logo" />
            <Typography component="h1" variant="h4">
              Admin Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "Green" }}
                href ='/adminmenu'
              >
                Login
              </Button>
              <Grid container>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}