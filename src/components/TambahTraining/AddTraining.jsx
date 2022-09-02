import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import ListItem from '@mui/material/ListItem';
// import LogoutIcon from '@mui/icons-material/Logout';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// // import Paper from '@mui/material/Paper';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import MenuIcon from '@mui/icons-material/Menu';
// import AssignmentIcon from '@mui/icons-material/Assignment';
import { Avatar, Toolbar,Card, CardContent, Grid } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import ChatIcon from '@mui/icons-material/Chat';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import HomeIcon from '@mui/icons-material/Home';
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Typography from '@mui/material/Typography';
// import useMediaQuery from '@mui/material/useMediaQuery'

export default function ResponsiveDrawer() {
  const drawerWidth = 250;
  let dataAssessment = [
    {
      type:"Sistem",
      time:"6 Jam yang lalu",
      title:"Asesmen Anda dijadwalkan kembali pada tanggal 20/8/2022",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
    },
    {
      type:"Sistem",
      time:"· 10 jam yang lalu",
      title:"Asesmen level 6 telah tersedia",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
    },
  ]

  return (
    <Box sx={{ maxWidth:'100%', display: 'flex', marginLeft:'17rem' }}>
      <CssBaseline />
      <AppBar
        elevation={4}
        position= "fixed"
        sx={{
          width: { md: `calc(200vh)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white',
          paddingTop: 'auto',
          paddingLeft:'4rem'
        }}
      >
        <Toolbar sx={{ width:'auto', ml:'3rem' }}>
          <Typography sx={{ ml:'1px' }} fontSize={'24px'} fontFamily={'Poppins'} color={'black'}>
            Training
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
         sx={{ marginTop:'76px' ,display:'block' ,flexGrow: 1, p: 3, ml: -3.5, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar>
            <Typography 
            fontFamily={'Poppins'} 
            textTransform={'capitalize'}
            fontSize={'24px'} 
            sx={{ marginLeft:'-1.5rem', textDecoration:'underline' }}
            >
            Lengkapi Data Dibawah Ini
            </Typography>
        </Toolbar>
      </Box>
      <Box>
        <Grid container>
          <Grid item md={5} sx={{pt:"10rem",height:'90vh', display:'table-column-group'}} >
            {
            dataAssessment.map((item,index)=>(
              <Card elevation={0} sx={{p:3,backgroundColor:'#F5F5F5',mb:"31px"}}>
                <Box>
                  <Box flexDirection="row" display="flex">
                    <Typography sx={{color:'#2A68C4',fontSize:14}}>{item.type}</Typography>
                    <Typography sx={{color:'#ababab',fontSize:14}}>{item.time}</Typography>
                  </Box>
                  <Typography sx={{color:'#2A68C4',mt:'10px',mb:'10px',fontSize:20}}>{item.title}</Typography>
                  <Typography sx={{color:'#272729',mb:'10px',fontSize:14}}>{item.description}</Typography>
                </Box>
              </Card>
            ))
          }
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

}

