import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css'
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
import { Avatar, Toolbar } from '@mui/material';
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

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/konsultasi">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


const drawerWidth = 258;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{mt:'28px', width:'auto' }}>
      <Avatar sx={{ml: '-4px', width: 40, height: 40 }} alt="Remy Sharp" src={ME} />
              <Box paddingLeft={3}flexDirection="column" display="column">
                <Typography sx={{color:'white',fontSize:13}}><b>Cindy Riyanti</b></Typography>
                <Typography sx={{fontSize:11}} variant="h6" color='white'>Pencari Kerja</Typography>
              </Box>
      </Toolbar>
        <List sx={{ pt:'30px', pb:'25px' }}>
          {[ {title:'Home', icon:<HomeIcon sx={{ fontSize:20, ml:0.5 }}/> }, {title:'Asesmen', icon:<AssignmentIcon sx={{ fontSize:20, ml:0.5 }}/>}, {title:'Konsultasi', icon:<ConnectWithoutContactIcon sx={{ fontSize:20, ml:0.5 }}/>}, {title:'Training' , icon:<OndemandVideoIcon sx={{ fontSize:20, ml:0.5 }}/>}].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ml: '10px', color:'white' }}>
                  {text.icon}
                </ListItemIcon>
                <Typography sx={{fontSize:13.5, color:'white'}}>{text.title}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
          <Divider variant="middle" sx={{backgroundColor: 'white'}} component="li"/>
        <Box sx={{ pt:'17px' }}>
        <List>
          {[{title:'Akun', icon:<ManageAccountsOutlinedIcon sx={{ fontSize:20, ml:0.5 }} />}, {title:'Notifikasi', icon:<NotificationsOutlinedIcon sx={{ fontSize:20, ml:0.4 }} />}, {title:'Pesan',  icon:<ChatIcon sx={{ fontSize:20, ml:0.5 }} />}].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ml: '10px', color:'white' }}>
                  {text.icon}
                </ListItemIcon>
                <Typography sx={{fontSize:13.5, color:'white'}}>{text.title}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
            <ListItemButton sx={{ mt:16 }}>
                <ListItemIcon sx={{ml: '10px', color:'white' }}>
                  <LogoutIcon sx={{fontSize:20, ml:0.5 }} />
                </ListItemIcon>
                <Typography sx={{fontSize:13.5, color:'white'}}>Logout</Typography>
            </ListItemButton>
        </List>
        </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { bgcolor:'#252b42', boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {  background : "#252b42", boxSizing: 'border-box', width: '40vh', height:'100vh' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = { 
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
