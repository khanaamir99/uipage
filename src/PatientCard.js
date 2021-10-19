import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

// import MainMaterial from "./MainMaterial";

export default function PatientCard({color, icon, name,idx,setItem }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <div sx={{ maxWidth: 345 }} onClick={()=>setItem(idx)} style={{backgroundColor:"white", borderRadius:10, margin:"10px 12px"}} >
 
      <CardHeader
        style={{ marginBottom: 10 }}
        avatar={<Avatar alt="Remy Sharp" src={icon} />}
        action={
          <IconButton aria-label="iconColor">
          <Avatar
                  alt="Remy Sharp" 
                  // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSA59WhEqH1KdnaN0DFb7RP2Xb7Lfe6sGsSA&usqp=CAU"
                  sx={{ width: 10, height: 10, padding: 0, margin: 0,   }}
                 style={{color:"green",backgroundColor:"green"}}
                />
          </IconButton>
        }
        title={name}
        subheader="September 14, 2021"
      />
    
    </div>
  );
}
