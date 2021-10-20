import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MainMaterial from "./MainMaterial";
import BottomDrawer from "./BottomDrawer";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card style={{ backgroundColor: "white" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "flex-start",
            display: "flex",
            fontSize: 16,
            marginLeft: 5,
            marginTop: 32,
            color: "green",
          }}
        >
          Patient Details{" "}
          {/* <span style={{ marginLeft: 10, color: "green" }}>Hannah</span> */}
        </h1>

        <Card
          style={{ backgroundColor: "#F7F7F7", display: "flex", padding: 10 }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  flexShrink: 0,
                  flexGrow: 0,
                  width: 90,
                  height: 90,
                  padding: 0,
                }}
                aria-label="recipe"
              >
                <Avatar
                  alt="Remy Sharp"
                  src={data.image}
                  sx={{ width: 90, height: 90, padding: 0, margin: 0 }}
                />
              </Avatar>
            }
          />

          <MainMaterial data={data} />
        </Card>

        <BottomDrawer />
      </Card>
    </>
  );
}
