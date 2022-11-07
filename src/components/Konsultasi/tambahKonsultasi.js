import React from 'react';
import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemButton from '@mui/material/ListItemButton';
// import { Link } from 'react-router-dom'
import ListItemIcon from '@mui/material/ListItemIcon';
import ME from '../../assets/Ellipse.png'
import ListItemText from '@mui/material/ListItemText';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// import Paper from '@mui/material/Paper';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Avatar, CardActions, Toolbar } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HomeIcon from '@mui/icons-material/Home';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery'
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import SearchIcon from '@mui/icons-material/Search';
import {
  Grid,
  Card,
  InputBase,
  Paper,
  IconButton,
  CssBaseline,
  AppBar,
  Button,
  TextField
} from '@mui/material'
import {Link} from 'react-router-dom';

const drawerWidth = 240;
export default function Konsultasi (props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ maxWidth:'100%', display:'flex', ml:'17rem' }}>
        <CssBaseline />
      <AppBar
        elevation={1}
        position= "fixed"
        sx={{
          width: { md: `calc(200vh)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white',
          paddingTop: '10px',
          paddingLeft:'4rem'
        }}
        >
        <Toolbar sx={{ width:'150%', ml:'15rem' }}>
        <Typography sx={{ ml:'-5.5rem' }} fontSize={'24px'} fontFamily={'Poppins'} color={'black'} >
          Tambah Pertanyaan
        </Typography>
      </Toolbar>
            </AppBar>
            <Grid container sx={{mt:'70px'}}>
            <Grid item md={8} sx={{p:"35px",height:'90vh'}}>
                <Box>
                <Box sx={{}}>
                 <TextField sx={{width:1000}} id="standard-basic" label="Judul Pertanyaan" variant="standard" fullWidth/>
                </Box>
                <TextField sx={{width:1000, mt:2}} id="standard-basic" label="Pertanyaan" variant="standard" multiline rows={4} fullWidth />
              
              </Box>
              <CardActions>
               <Button component={Link} to='/konsultasi' sx={{mb:'0px', borderRadius:'10px', ml: '53.5rem', mt:'50px'}} variant="outlined">
                  Batal
               </Button>
              <Button component={Link} to='/konsultasi' sx={{ mt:'0px', borderRadius:'10px', ml: '53.5rem', mt:'50px'}} variant="contained"> 
                Kirim
              </Button>
            </CardActions>
      </Grid>
  </Grid>
  </Box>
  );
}
