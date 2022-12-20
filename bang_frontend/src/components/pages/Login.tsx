import FormControlLabel from '@mui/material/FormControlLabel';
import {Button, TextField, Checkbox, Link, Paper, Box, Grid, Typography, CssBaseline, IconButton, InputAdornment } from '@mui/material';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../logo/BangLogo.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

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
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();
  
  const [logged, setLogged] = useState(false);

  const userContext = useContext(UserContext);

  const [loginData, setLoginData] = useState({
      username: "",
      password: ""
  });

  const { username, password } = loginData;

  const onInputChange = (e: any) => {
      setLoginData({...loginData, [e.target.name]: e.target.value });
  };

  const checkSignin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (username.trim().length !== 0  && password.trim().length !== 0) {
      axios.get(`http://localhost:8080/user/findByUsername?username=${username}`)
      .then((result) => {
          if(result.data.username !== null) { // Check if username exist
              console.log(result.data)
              if(result.data.password === password) { // Check if password is correct
                  if(result.data.userType === "Client") { // Check user type login is correct
                      //handleSetUser({ //this is for useContext
                      //  userid: res.data.userid,
                      //  firstname: res.data.firstname,
                       // lastname: res.data.lasttname,
                      //  email: res.data.email,
                      //  username: res.data.username,
                      //  password: res.data.password,
                       // userType: res.data.userType,
                      //});
                      userContext?.setUser(result.data.userid)
                      setLogged(true);
                      alert("User Login Success");
                      navigate("/dashboard");
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
            backgroundImage: "url(/static/images/Landing/bgpic.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundColor: "White",
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
              Sign In
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="user"
                label="Username"
                name="username"
                autoComplete="user"
                autoFocus
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                onChange={(e) => onInputChange(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
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
                href ='/dashboard'
                onClick={checkSignin}
              >
                Sign In
              </Button>
              <Grid container>
              </Grid>
              <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}