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
import { Avatar, Toolbar, useMediaQuery } from '@mui/material';
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
  Button
} from '@mui/material'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import {Link} from 'react-router-dom';

const drawerWidth = 258;
export default function TambahKonsultasi (props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let dataAssessment = [
    {
      type:"Pertanyaan dari",
      name:" Nur Kholiq Ansori ",
      time:" · 16 jam yang lalu",
      title:"Bagaimana cara menarik perhatian HRD?",
      answer:"1 Jawaban"
    },
    {
        type:"Pertanyaan dari ",
        name:"Zacky Al Baehaki",
        time:" · 18 jam yang lalu",
        title:"Mengapa perusahaan lebih senang dengan pekerja yang berlatar belakang organisasi?",
        answer:"4 Jawaban"
      },
      {
        type:"Pertanyaan dari",
        name:" Misna Syari",
        time:" · 20 jam yang lalu",
        title:"Apa saja tes yang ada di perusahaan",
        answer:"10 Jawaban"
      },
  ]
  return (
    <Box sx={{  display:'flex' }}>
        <CssBaseline />
      <AppBar
        elevation={1}
        position= "fixed"
        sx={{
          width: { md: `calc(110% - ${drawerWidth}px)` },
          height:'80px',
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white',
          paddingTop: '10px',
          paddingLeft:'0rem'
        }}
        >
        <Toolbar sx={{ width:'150%', ml:'15rem' }}>
        <Typography sx={{ ml:'-5.5rem' }} fontSize={'24px'} fontFamily={'Poppins'} color={'black'} >
          Konsultasi
        </Typography>
      <Button component={Link} to='/konsultasi-tambah' sx={{ mt:'0px', borderRadius:'10px', ml: '41.5rem'}} variant="contained"> 
            <Typography y6
            fontFamily={'Poppins'} 
            textTransform={'capitalize'}
            fontSize={'normal'} 
            marginTop={'-1px'}
            >
            Tanya sebuah pertanyaan
            </Typography>
        </Button>
        </Toolbar>
            </AppBar>
            <Grid container sx={{mt:10}} style={{backgroundColor:"#ECECEC", height:'100vh', width:'100%', pl:'2rem'}}>
            <Grid item md={8} alignItems='center' sx={{ p:"35px", ml:'16.5rem'}}>
              {

        dataAssessment.map((item,index)=>(
          <Card elevation={0} sx={{width:'100vh', p:3,backgroundColor:'#FFFFFF',mb:"31px"}}>
            <Box>
              <Box flexDirection="row" display="flex">
                <Typography sx={{color:'#black',fontSize:14}}>{item.type}</Typography>
                <Typography sx={{color:'blue', fontSize:'10', paddingLeft:'0.2rem', }}><b>{item.name}</b></Typography>
                <Typography sx={{color:'#ababab',fontSize:14, mr:'10px', paddingLeft:'0.3rem'}}>{item.time}</Typography>
                <Card sx={{borderRadius:'10px', ml:'20px', backgroundColor:'#005aff'}}>
                <Typography sx={{color:'#fff',fontSize:14, pl:'20px',pr:'20px'}}>{item.answer}</Typography>
                </Card>
              </Box>
              <Typography sx={{color:'black',mt:'10px',mb:'10px',fontSize:20}}>{item.title}</Typography>
              <Typography sx={{color:'#272729',mb:'10px',fontSize:14}}>{item.description}</Typography>
            </Box>
          </Card>
        ))
      }
    </Grid>
    <Grid item md={4} sx={{ position:'fixed',height:'100vh',px:"26px",py:"20px", backgroundColor:"white", ml: '64rem'}}>
    <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mt: 2, width: 300,border:'1px solid #EAEAEA',borderRadius:"10px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Pencarian"
          inputProps={{ 'aria-label': 'Pencarian' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box sx={{mt:"38px"}}>
        <Typography><b>Filter</b></Typography>
      </Box>
      <Box sx={{mt:'20px'}}>
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group"  style={{color:'black'}}>Diurutkan berdasarkan</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        <FormControlLabel value="terbaru" control={<Radio />} label="Terbaru" />
        <FormControlLabel value="terpopuler" control={<Radio />} label="Terpopuler" />
      </RadioGroup>
    </FormControl>
    </Box>
    <Box sx={{mt:'20px'}}>
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" style={{color:'black'}}>Lihat Pertanyaan</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        <FormControlLabel value="semua" control={<Radio />} label="Semua" />
        <FormControlLabel value="saya" control={<Radio />} label="Saya" />
      </RadioGroup>
    </FormControl>
    </Box>
    </Grid>
  </Grid>
  </Box>
  );
}