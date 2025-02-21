import { AppBar, Toolbar, Typography, Button, Stack, Box, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import logo from '/cc.png';

const CenterBlurWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(20px)',
    zIndex: -1,
    borderRadius: '0 0 20px 20px',
    [theme.breakpoints.down('sm')]: {
      width: '100%', // Make it full width on mobile
    },
  }));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  fontSize: 'clamp(12px, 4vw, 14px)',
  fontWeight: 400,
  position: 'relative',
  textTransform: 'none',
  transition: 'color 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '1.5px',
    bottom: -2,
    left: '50%',
    backgroundColor: '#a855f7',
    transition: 'all 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
    left: 0,
  },
  '&:hover': {
    color: '#e9d5ff',
  },
}));

const JoinButton = styled(Button)(({ theme }) => ({
  color: 'white',
  borderColor: 'white',
  textTransform: 'none',
  borderRadius: '20px',
  fontWeight: '400',
  transition: 'all 0.3s ease',
  padding: '6px 16px',
  fontSize: 'clamp(12px, 4vw, 14px)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#a855f7',
    color: '#e9d5ff',
  },
}));

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <CenterBlurWrapper />
      <Container maxWidth="lg">
        <Toolbar sx={{ minHeight: '70px', justifyContent: 'space-between', px: isMobile ? 1 : 3 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img src={logo} alt="Logo" width={isMobile ? 28 : 36} height={isMobile ? 28 : 36} style={{ marginRight: 8 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', fontSize: 'clamp(16px, 4vw, 20px)' }}>
              CodeCrafters
            </Typography>
          </Box>

          {/* Mobile Menu Button */}
          {isMobile ? (
            <IconButton onClick={() => setOpenMenu(!openMenu)} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
          ) : (
            // Desktop Navigation
            <Stack direction="row" spacing={4} sx={{ alignItems: 'center' }}>
              <StyledButton>Home</StyledButton>
              <StyledButton>Our Work</StyledButton>
              <StyledButton>About Us</StyledButton>
              <StyledButton>Blog</StyledButton>
              <StyledButton>Contact</StyledButton>
            </Stack>
          )}

          {/* Join Button Always Visible */}
          {!isMobile && <JoinButton variant="outlined">Join us</JoinButton>}
        </Toolbar>
      </Container>

      {/* Mobile Menu - Hidden by Default */}
      {isMobile && openMenu && (
        <Box
          sx={{
            position: 'absolute',
            top: 70,
            left: 0,
            width: '100%',
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(10px)',
            padding: 2,
            textAlign: 'center',
            zIndex: 9,
          }}
        >
          <Stack direction="column" spacing={2}>
            <StyledButton>Home</StyledButton>
            <StyledButton>Our Work</StyledButton>
            <StyledButton>About Us</StyledButton>
            <StyledButton>Blog</StyledButton>
            <StyledButton>Contact</StyledButton>
            <JoinButton
                    variant="outlined"
                    sx={{
                        fontSize: 'clamp(12px, 4vw, 14px)',
                        minWidth: isMobile ? '80px' : 'auto',
                    }}
                    >
                    Join us
            </JoinButton>
          </Stack>
        </Box>
      )}
    </AppBar>
  );
}
