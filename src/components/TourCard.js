import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});
const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
        <Link to="/1" variant="body2">
        <img className="img" src={tour.image} alt="" />

</Link>
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration} hours
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  size="small"
                  readOnly
                  name="read-only"
                  value={4.5}
                  precision={0.5}
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body3" component="p" marginLeft={0.5}>
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </Box>
              <Box marginTop={3}>
                <Typography variant="h6" component="h3" marginLeft={0.5}>
                  From C ${tour.price}
                </Typography>
              </Box>
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};
export default TourCard;
