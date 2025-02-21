// this is the one i wanna use but i will keep improving it

import { Box, Typography, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import logo from '../../public/cc.png';

const MotionBox = motion(Box);
const FloatingBox = motion(Box);

const StarryBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'radial-gradient(circle at center, rgba(75, 0, 130, 0.7), black)',
  overflow: 'hidden',
  zIndex: 0,
  '& canvas': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

export default function HeroSection() {
  // Animation des étoiles avec Canvas
  const createStarsCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speedY: Math.random() * 0.3 + 0.1,
    }));

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.y += star.speedY;
        if (star.y > canvas.height) star.y = 0;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      });
      requestAnimationFrame(animateStars);
    };

    animateStars();
    return canvas;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        py: 15,
        overflow: 'hidden',
        height: '100vh',
      }}
    >
      {/* Starry Animated Background */}
      <StarryBackground ref={(el) => el?.appendChild(createStarsCanvas())} />

      {/* Purple Glow */}
      <MotionBox
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(126,34,206,0.9) 0%, rgba(0,0,0,0) 60%)',
          borderRadius: '50%',
          filter: 'blur(180px)',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      {/* Floating Logo */}
      <FloatingBox
        sx={{ mb: 2 }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={logo} alt="Code Logo" width={70} height={70} />
      </FloatingBox>

      <Typography
        variant="caption"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          px: 2,
          py: 0.5,
          borderRadius: 2,
          fontWeight: 'bold',
        }}
      >
        Code crafters
      </Typography>

      <Typography variant="h3" fontWeight="bold" mt={2}>
        Where Creativity <br /> Meets Code
      </Typography>

      <Typography variant="subtitle1" sx={{ opacity: 0.8, mt: 1 }}>
        Code your future, Craft your legacy
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          mt: 4,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        Get In Touch
      </Button>

      {/* Floating Tags */}
      <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center" mt={4}>
        {['Networking events', 'UX/UI Design', 'Workshops', 'AI & Data Science', 'Web Development'].map(
          (tag, index) => (
            <FloatingBox
              key={tag}
              animate={{
                y: [0, -5, 0],
                rotate: [0, 0.5, -0.5, 0],
              }}
              transition={{
                duration: 3 + index * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Chip
                label={tag}
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'grey.700',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    borderColor: '#a855f7',
                  },
                }}
              />
            </FloatingBox>
          )
        )}
      </Stack>
    </Box>
  );
}
