import { Avatar, Button, TextField, Link, Paper, Box, Grid, Typography, CssBaseline } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

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

export default function SignUpSide() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [logged, setLogged] = useState(false);

  const SignUp = async () => {
    console.log(user)
    console.log(pass)

    axios
      .post('http://localhost:8080/user/postUser',
        {
          username: user,
          password: pass,
          userType:'Client',
          firstname: fname,
          lastname: lname,
          email: email
        }
      )
      .then(res => {
        setUserInfo(res.data);
        if (res.data) {
          setLogged(true);
          alert("User Registered")
        }
        console.log(userInfo)
        console.log(logged)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'images/logo.png',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h4">
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="firstname"
              label="First Name"
              type="firstname"
              id="fname"
              autoComplete="firstname"
              autoFocus
              onChange={e => setFname(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Last Name"
              type="lastname"
              id="lname"
              autoComplete="lastname"
              onChange={e => setLname(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={e => setUser(e.target.value)}
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
              onChange={e => setPass(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "Green" }}
              onClick={() => SignUp()}
            >
              Sign Up
            </Button>
            <Grid container>
            </Grid>
            <Link href="/" variant="body2">
              {"Already have an account? Sign In"}
            </Link>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}