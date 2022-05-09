import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const Featured = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Grid container sx={{ backgroundColor: "#e8d4c6" }}>
                <Grid item xs={12} sm={12} md={6}>
                    <img
                        src="https://i.ibb.co/y0D53f5/fridge.jpg"
                        // src="https://i.ibb.co/zGxJFCW/Capture.png"
                        alt=""
                        className="img-fluid"
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    sx={{
                        color: "#000",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        px: 6,
                        py: 6,
                    }}>
                    <Typography sx={{ mb: 0 }} variant="h3" gutterBottom component="div">
                        Multi-functional Refrigerator!
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        Refrigerator with Door in Door, Craft Ice, and Smart Wi-Fi - Black stainless steel
                    </Typography>
                    <Typography
                        sx={{ mb: 2 }}
                        variant="button"
                        display="block"
                        gutterBottom>
                        Samsung's 22 cu. ft. Smart 3-Door French Door refrigerator is beautifully designed with an external water dispenser and a modern look that blends seamlessly into your kitchen.
                    </Typography>
                    <Typography
                        sx={{ mb: 4 }}
                        variant="subtitle2"
                        gutterBottom
                        component="div">

                    </Typography>
                    <Button variant="contained">Explore Now</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Featured;