import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MotionBox = motion(Box);

export default function AboutSection() {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth; // Bind to parent width
      canvas.height = 500;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speedY: Math.random() * 0.3 + 0.1,
      opacity: 1,
    }));

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.y += star.speedY;
        if (star.y > canvas.height) star.y = 0;

        const fadeStart = canvas.height * 0.6;
        const fadeEnd = canvas.height * 0.9;
        star.opacity = star.y > fadeStart ? 1 - (star.y - fadeStart) / (fadeEnd - fadeStart) : 1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(star.opacity, 0)})`;
        ctx.fill();
      });

      requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden', // Prevents horizontal scrolling
        width: '100vw', // Full width without extra space
        maxWidth: '100%', // Ensure it does not exceed viewport
        minHeight: '60vh',
      }}
    >
      {/* Canvas for stars */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          maxWidth: '100%', // Ensures it doesn’t cause overflow
        }}
      />

      {/* Gradient background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(18, 16, 27, 0) 10%, black 80%)',
          zIndex: 1,
        }}
      />

      {/* SVG Curve for smooth transition */}
      <Box sx={{ position: 'absolute', top: '-1px', left: 0, width: '100%', lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="black"
            fillOpacity="1"
            d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,213.3C840,192,960,160,1080,144C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </Box>

      {/* Glow effect for ambiance */}
      <MotionBox
        sx={{
          position: 'absolute',
          width: isSmallScreen ? 200 : 300,
          height: isSmallScreen ? 200 : 300,
          background: 'radial-gradient(circle, rgba(126,34,206,0.4) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          top: '40%',
          left: isSmallScreen ? '50%' : '15%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      {/* Content */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 3,
          py: isSmallScreen ? 6 : 10,
          textAlign: isSmallScreen ? 'center' : 'left',
          width: '100%', // Ensures it fits the screen
          maxWidth: '90vw', // Prevents horizontal scrolling
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: isSmallScreen ? '1.8rem' : '2.5rem',
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            opacity: 0.8,
            fontSize: isSmallScreen ? '1rem' : '1.2rem',
            maxWidth: '700px',
            mx: isSmallScreen ? 'auto' : 0,
          }}
        >
          We are a team of passionate developers, designers, and innovators. We believe in creating products that not
          only work but also inspire. Our goal is to blend creativity with technology to craft solutions that stand out.
        </Typography>
      </Container>
    </Box>
  );
}
