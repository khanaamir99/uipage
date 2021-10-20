import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { green } from "@mui/material/colors";

import "./style.css";

const MainMaterial = (props) => {
  const {phone,email,gender,age,surgery_type,surgery_date,height,weight,bmi,anesthesiologist,
    anesthesiologist_phone,anesthesiologist_email} = props.data;
  return (
      <div className="mainMaterial">
        <ul style={{ width: 170 }}>
          <li>
            Phone:<span>{phone}</span>
          </li>
          <li>
            Email:<span>{email}</span>
          </li>
          <li>
            Gender: <span>{gender}</span>
          </li>
          <li>
            Age: <span>{age}</span>
          </li>
        </ul>
        <ul style={{ width: 240, paddingLeft: 50 }}>
          <li>
            Surgery Type:<span>{surgery_type}</span>
          </li>
          <li>
            Surgery Date:<span>{surgery_date}</span>
          </li>
          <li>
            Height(cm): <span>{height}</span>
          </li>
          <li>
            weight(lb):<span>{weight}</span>
          </li>
          <li>
            BMI: <span>{bmi}</span>
          </li>
        </ul>
        <ul style={{ width: 330 }}>
          <li>
            Anesthesiologist:<span>{anesthesiologist}</span>
          </li>
          <li>
            Anesthesiologist Phone:<span>{anesthesiologist_phone}</span>
          </li>
          <li>
            Anesthesiologist Email:<span>{anesthesiologist_email}</span>
          </li>
        </ul>
        <ul style={{ marginRight: 100, padding: 0 }}>
          <li style={{ display: "flex", justifyContent: "center" }}>
            Surgery Clearance
          </li>
          <li style={{ display: "flex", justifyContent: "center", fontSize: 50 }}>
           
            <CheckCircleOutlineIcon sx={{ color: green[500]}} style={{fontSize: 60 }} />
          </li>
        </ul>
      </div>
  );
};
export default MainMaterial;
