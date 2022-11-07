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
import IMG from '../../assets/background.png';
import IMG2 from '../../assets/pfl.png';
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
  TextField,
  Tab
} from '@mui/material';
import {
  TabContext,
  TabList,
  TabPanel,
} from '@mui/lab'
import { styled } from '@mui/system';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Img = styled('img')({ 
    margin:"auto",
    display:"block",
    maxWidth:"auto",
    maxHeight:"auto"
})

 export default function DetailPerusahaan (props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth:'100%', display:'flex', ml:'10rem' }}>
        <CssBaseline />
        <Box>
        <Toolbar sx={{ width:'110%', mr: 135}}>
            <img src={IMG} />
        </Toolbar>
        <Avatar sx={{mt: '-3rem', width: 85, height: 88, position:'absolute', right:0, mr:125 }} alt="Remy Sharp" src={IMG2} />
        <Grid container sx={{mt:'50px'}}>
        <Grid item md={8} sx={{p:'15px', height:'auto'}}>
        <Typography sx={{mb: 3, ml: 14, position:'absolute', }}><b>PT Brilyan Trimatra Utama</b></Typography>
        <Typography sx={{color:'black', mb: 5,  ml: 14, position:'absolute'}} fontFamily={'Poppins'} mt={'20px'}>Empowering People, Knowledge and Technology. EXPERIENCE . EMPOWERMENT . EXCELLENCE</Typography>
        <Typography sx={{color:'#ababab', mt:6 ,  ml: 14, position:'absolute'}} >Jasa IT dan Konsultasi IT. Bekasi, Jawa Barat. Sejak 2004</Typography>
        </Grid>
        </Grid>  
        </Box>
         
        <Grid sx={{ width: '100%', typography: 'Roboto', mt: 45, position:'absolute', ml: '7rem'}}>
      <TabContext value={value}> 
        <Box sx={{ borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profil" value="1" />
            <Tab label="Lowongan Kerja" value="2" />
            <Tab label="Proyek" value="3" />
            <Tab label="Proyek" value="4" />
          </TabList>
          <Card elevation={0} sx={{p:2, backgroundColor:'#F5F5F5', mt:1}}/>
        </Box>
        <TabPanel value="1"><div style={{flexDirection:'column'}}>
        <b sx={{mt: 2}}>Deskripsi</b>
        <p sx={{mt: 5}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, </p>
        <b>Kontak</b>
        <p> <LanguageIcon/> www.brilyan.com</p>
        <p> <MailOutlineIcon/> info@brilyan.com</p>
        <p>  <LocalPhoneIcon/> +62 21-820-6565 </p>
        <b> Kantor Pusat</b>
        <p>Jl. Kemang Dahlia Raya Blok E12, RT.009/RW.036, Bojong Rawalumbu, Kec. Rawalumbu, Kota Bks, Jawa Barat 17116</p>
        </div>
        </TabPanel>
        <TabPanel value="2"><b>Lowongan Kerja</b></TabPanel>
        <TabPanel value="3"><b>Proyek</b></TabPanel>
        <TabPanel value="4"><b>Proyek</b></TabPanel>
      </TabContext>
    </Grid>
 
</Box>
  );
  }