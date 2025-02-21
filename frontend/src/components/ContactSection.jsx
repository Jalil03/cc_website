import { Box, Typography, TextField, Button, Container, useTheme, useMediaQuery } from "@mui/material";

export default function ContactSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#121212", color: "white", py: isMobile ? 6 : 10 }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center", fontSize: "clamp(24px, 5vw, 36px)" }}
        >
          Contact Us
        </Typography>

        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            mb: 2,
            fontSize: "clamp(12px, 3vw, 16px)",
          }}
        />
        <TextField
          fullWidth
          label="Your Message"
          multiline
          rows={isMobile ? 3 : 5}
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            mb: 2,
            fontSize: "clamp(12px, 3vw, 16px)",
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#a855f7",
            color: "white",
            fontSize: "clamp(14px, 4vw, 16px)",
            px: 3,
            py: 1.2,
            textTransform: "none",
            display: "block",
            mx: "auto",
            "&:hover": { backgroundColor: "#9333ea" },
          }}
        >
          Send Message
        </Button>
      </Container>
    </Box>
  );
}
