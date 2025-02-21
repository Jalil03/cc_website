import { Box, Typography, Button, Stack, Chip, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import logo from "/cc.png";

const MotionBox = motion(Box);

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
  sx={{
    position: "relative",
    backgroundColor: "#0a0a0a",
    backgroundImage: "radial-gradient(circle at center, rgba(126,34,206,0.2), rgba(10,10,10,1))",
    color: "white",
    textAlign: "center",
    overflow: "hidden",
    width: "100vw",
    height: isMobile ? "auto" : "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: 2,
    py: isMobile ? 8 : 0,
  }}
>

      {/* Floating Logo */}
      <MotionBox
        sx={{ display: "flex", justifyContent: "center", mt: isMobile ? 12 : 14, mb: 2 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <img src={logo} alt="Floating Logo" width={isMobile ? 50 : 60} height={isMobile ? 50 : 60} />
      </MotionBox>

      {/* Label */}
      <Typography
        variant="caption"
        sx={{
          px: 2,
          py: 0.5,
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          fontSize: "clamp(12px, 3vw, 14px)",
        }}
      >
        Code crafters
      </Typography>

      {/* Title */}
      <Typography variant="h3" fontWeight="bold" mt={2} sx={{ fontSize: "clamp(28px, 6vw, 48px)" }}>
        Where Creativity <br /> Meets Code
      </Typography>

      <Typography variant="subtitle1" sx={{ opacity: 0.8, mt: 1, fontSize: "clamp(14px, 3vw, 18px)" }}>
        Code your future, Craft your legacy
      </Typography>

      {/* Call to Action Button */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "white",
          color: "black",
          borderRadius: "20px",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "clamp(14px, 4vw, 16px)",
          px: 3,
          py: 1.2,
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        Get In Touch
      </Button>

      {/* Floating Tags */}
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? 1 : 2}
        flexWrap="wrap"
        justifyContent="center"
        mt={isMobile ? 3 : 4}
      >
        {["Networking events", "UX/UI Design", "Workshops", "AI & Data Science", "Web Development"].map((tag, index) => (
          <MotionBox
            key={tag}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Chip
              label={tag}
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                color: "white",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "clamp(12px, 3vw, 14px)",
                fontWeight: "500",
                "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
              }}
            />
          </MotionBox>
        ))}
      </Stack>

      {/* Large X² Curved Line */}
      <Box sx={{ position: "absolute", bottom: isMobile ? "5px" : "-50px", left: 0, width: "100%" }}>
        <svg viewBox="0 0 1440 320" width="100%" height="">
          <defs>
            {/* Gradient for a shiny effect */}
            <linearGradient id="shinyGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.4)" />
            </linearGradient>
          </defs>

          <path
            fill="none"
            stroke="url(#shinyGradient)"
            strokeWidth="2.5"
            d="M0,50 Q720,400 1440,50"
          />
        </svg>
      </Box>
    </Box>
  );
}
