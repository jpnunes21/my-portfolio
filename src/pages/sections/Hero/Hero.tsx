import { Box, Container, Grid2, styled, Typography } from "@mui/material"
import Avatar from "../../../assets/images/1641939364916.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';
import StyledButton from "../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
    
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }));

    const StyledImage = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));
    
    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid2 container spacing = {2}>
                    <Grid2 size = {{ xs:12, md:5 }} >
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImage src = {Avatar} />
                            </Box>
                        </Box>
                    </Grid2>
                    <Grid2 size = {{ xs:12, md:7 }}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                            João Nunes
                        </Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">
                            I'm a Software Engineer
                        </Typography>

                        <Grid2 container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid2 size={{xs: 12, md: 6}} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon />
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid2>
                            <Grid2 size={{xs: 12, md: 6}} display="flex" justifyContent="center">
                                <StyledButton>
                                    <MailIcon />
                                    <Typography>Contact me</Typography>
                                </StyledButton>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  