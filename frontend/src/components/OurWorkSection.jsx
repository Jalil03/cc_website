import { Box, Typography, Grid, Card, CardContent, Container, useTheme, useMediaQuery } from "@mui/material";

export default function OurWorkSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "black", color: "white", py: isMobile ? 6 : 10 }}>
      <Container>
        {/* Section Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            textAlign: "center",
            fontSize: "clamp(24px, 5vw, 36px)",
            mb: isMobile ? 4 : 6,
          }}
        >
          Our Work
        </Typography>

        {/* Project Cards */}
        <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
          {[1, 2, 3].map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project}>
              <Card
                sx={{
                  backgroundColor: "#1e1e1e",
                  color: "white",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
                  },
                  p: 2,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "clamp(16px, 4vw, 20px)", fontWeight: "bold" }}
                  >
                    Project {project}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.7, fontSize: "clamp(12px, 3vw, 16px)", mt: 1 }}
                  >
                    Description of the project goes here. Highlight what makes it special.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
