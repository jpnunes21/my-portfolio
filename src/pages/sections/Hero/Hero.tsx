import { Button, Container, Grid2, styled, Typography } from "@mui/material"
import Avatar from "../../../assets/images/1641939364916.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';

const Hero = () => {
    
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }));

    const StyledImage = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }));
    
    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid2 container spacing = {2}>
                    <Grid2 size = {{ xs:12, md:4 }} >
                        <StyledImage src = {Avatar} />
                    </Grid2>
                    <Grid2 size = {{ xs:12, md:8 }}>
                        <Typography color="primary" variant="h1" textAlign="center">
                            João Nunes
                        </Typography>
                        <Typography color="primary" variant="h2" textAlign="center">
                            I'm a Software Engineer
                        </Typography>

                        <Grid2 container display="flex" justifyContent="center">
                            <Grid2 size={{xs: 12, md: 6}} display="flex" justifyContent="center">
                                <Button>
                                    <DownloadIcon />
                                    Download CV
                                </Button>
                            </Grid2>
                            <Grid2 size={{xs: 12, md: 6}} display="flex" justifyContent="center">
                                <Button>
                                    <MailIcon />
                                    Contact me
                                </Button>
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
  