import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PatientCard from "./PatientCard";
import MainBody from "./MainBody";
import SearchField from "./SearchField/searchfield";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainContent() {
  const [item, setItem] = React.useState(0);
  const data = [
    {
      name: "Hannah",
      date: "somewhere@gmail.com",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSA59WhEqH1KdnaN0DFb7RP2Xb7Lfe6sGsSA&usqp=CAU",
      color: "#00FF00",
    },
    {
      name: "Otis",
      date: "something@gmail.com",
      icon: "https://i.pinimg.com/236x/c7/eb/93/c7eb936f1f9aba983dc162d7dd91b77b.jpg",
      color: "#FF0000",
    },
  ];

  const dataNew = [
    {
      phone: "1234567809", 
      email: "hannah@gmail.com",
      gender: "Female",
      age: "45" ,
      surgery_type:"R-C-R",
      surgery_date: "15 Aug 2020" ,
      height:"163" ,
      weight:"90" ,
      bmi:"19" ,
      anesthesiologist:"Dr.Christina",
      anesthesiologist_phone:"2143654765",
      anesthesiologist_email:"christina@gji.com",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSA59WhEqH1KdnaN0DFb7RP2Xb7Lfe6sGsSA&usqp=CAU"

    },
    {
      phone: "987654321", 
      email: "Otis@gmail.com",
      gender: "Male",
      age: "25" ,
      surgery_type:"R-C-R",
      surgery_date: "15 jan 2021",
      height:"173",
      weight:"110",
      bmi:"21",
      anesthesiologist:"Dr.Harryjohn",
      anesthesiologist_phone:"65423145",
      anesthesiologist_email:"harry@gmail.com",
      image:"https://i.pinimg.com/236x/c7/eb/93/c7eb936f1f9aba983dc162d7dd91b77b.jpg",
    }
  ];
  // console.log(dataNew[item].phone)
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: 60 }}>
      <Grid container spacing={2} >
        <Grid item lg={2.5} style={{ padding:12, borderRight:"1px solid #888888", height:"93vh", backgroundColor:"#E8F5FE"}}>
        <p style={{ display:"flex",padding:"0px 15px", color:"#686A6D"}}>
          Patients
        </p>
         <SearchField />

        {data.map((i, idx) => (
            <PatientCard  setItem={setItem} idx={idx} name={i.name} icon={i.icon} color={i.color} item={item} />
          ))}
        </Grid>
        <Grid item lg={9.5} style={{padding:0}}>
        <MainBody data={dataNew[item]} />
        </Grid>
        
      </Grid>
    </Box>
  );
}