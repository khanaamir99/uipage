
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

// import MainMaterial from "./MainMaterial";

export default function PatientCard({color, icon, name,idx,setItem,item }) {
  const [bgColor, setbgColor] = React.useState(idx);

  const handleClick =()=>{
    setItem(idx)
    setbgColor(1?0:1)
  }

  return (
    
    <div sx={{ maxWidth: 345 }} onClick={handleClick} style={{backgroundColor:item==idx?'#3d8bff':"#fff", borderRadius:10, margin:"10px 12px",cursor:'pointer'}} >
 
      <CardHeader
        style={{ marginBottom: 10,color:item==idx?'#fff':"#000",fontWeight:'bold' }}
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
        
      />
      <p style={{ color:item==idx?'#fff':"#000",fontWeight:'bold',marginTop:-76 }}>{name}</p>
      <p style={{ color:item==idx?'#fff':"#000",fontSize:12,paddingBottom:12 }}>September 14, 2021</p>
    
    </div>
  );
}









