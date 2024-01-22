import { Box, ImageList, Typography } from "@mui/material";
import img1 from "../images/d.avif"

const MuiTypography = () => {
    return (
        <div>
            <Typography
                variant="h3"
                align="center"
                sx={{ my: 3, borderBottom: 1, width: 1 / 2, mx: "auto", pb: 3 }}
            >
                Discipline
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 5,
                    gap: 5,
                }}
            >
                {/* <Typography
                    variant="h3"
                    align="center"
                    sx={{ width: "100%", color: 'primary.main' }}
                >
                    Discipline
                </Typography> */}
                <ImageList sx={{ width: 500, height: 450 }}>
                    <img src={img1} alt="" />
                </ImageList>

                <Typography
                    align="left"
                    sx={{
                        width: "100%",
                        p: 2,
                        border: 4,
                        borderColor: "success.main",
                        borderRadius: 6,
                        
                        color: "success.main"
                    }}
                >
                    Discipline is a fundamental trait that serves as the bedrock
                    for personal and professional success. It is the guiding
                    force that propels individuals toward their goals, shapes
                    habits, and fosters a sense of responsibility. In this
                    article, we explore the multifaceted nature of discipline,
                    its role in various aspects of life, and strategies for
                    cultivating and maintaining it.Discipline is a fundamental
                    trait that serves as the bedrock for personal and
                    professional success. It is the guiding force that propels
                    individuals toward their goals, shapes habits, and fosters a
                    sense of responsibility. In this article, we explore the
                    multifaceted nature of discipline, its role in various
                    aspects of life, and strategies for cultivating and
                    maintaining it.Discipline is a fundamental trait that serves
                    as the bedrock for personal and professional success. It is
                    the guiding force that propels individuals toward their
                    goals, shapes habits, and fosters a sense of responsibility.
                    In this article, we explore the multifaceted nature of
                    discipline, its role in various aspects of life, and
                    strategies for cultivating and maintaining it.
                </Typography>
            </Box>
        </div>
    );
};

export default MuiTypography;
