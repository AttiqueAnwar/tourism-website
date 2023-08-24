import { Card, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomizedAccordions from "../components/Accordian";
import QuiltedImageList from "../components/ImageCollage";
import { BottomNavigation, Paper } from "@mui/material";
import BasicModal from "../components/Modal";

export default function Tour() {
  const [value, setValue] = React.useState(0);
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Las Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt=""
          height={325}
        />
        <QuiltedImageList />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          porttitor lacus luctus accumsan tortor posuere ac ut consequat semper
          viverra nam libero justo laoreet sit amet cursus sit amet dictum sit
          amet justo donec enim diam vulputate ut pharetra sit amet aliquam id
          diam maecenas ultricies mi eget mauris
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BasicModal />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}
