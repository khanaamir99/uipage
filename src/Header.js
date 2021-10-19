import * as React from 'react';
import "./Icons.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import MainContent from './MainContent';
const drawerWidth = 240;

export default function Header() {
  return (
    
    <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{ backgroundColor:"white"}}>
        <Toolbar>
      
          <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/05/21003336/LeewayHertzLogo2021.svg" className="logo"/>
          
          
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy style={{color:"black", cursor:"pointer"}}>
                 
                        Home
                   
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy style={{color:"black",cursor:"pointer"}}>
                        Posts
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy style={{color:"black",cursor:"pointer"}}>
                        Contact
               </TypoGraphy>
                </ListItemText>
            </ListItem>

        </List>
        <div className="icons">
      
        <div style={{paddingRight: 30, color:"black",cursor:"pointer"}}>
        <NotificationsActiveIcon />
        </div>
        <div style={{ color:"black",cursor:"pointer"}}>
        <AccountCircleIcon />
        </div>
        </div>
        
        </Toolbar>
      </AppBar>
     <MainContent />
    
      {/* <Responsive /> */}
    </Box>
  );
}
