import * as React from 'react';



import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';




import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Medicine" value="1" style={{backgroundColor:"white",color:"#00A0F0"}} />
            <Tab label="Details" value="2" style={{backgroundColor:"white",color:"#00A0F0"}}/>
            <Tab label="History" value="3" style={{backgroundColor:"white",color:"#00A0F0"}} />
          </TabList>
        </Box>
        <TabPanel value="1" style={{display:"flex"}}>
        Synthroid (levothyroxine) <br />
          Januvia (sitagliptin)</TabPanel>
        <TabPanel value="2" style={{display:"flex", margin:0, padding:0}}>

        </TabPanel>
        <TabPanel value="3" style={{display:"flex"}}></TabPanel>
      </TabContext>
    </Box>
  );
}
