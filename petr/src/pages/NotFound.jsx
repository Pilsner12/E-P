import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useLocation } from 'wouter';

const NotFound = () => {
  const [, navigate] = useLocation(); // Pro přesměrování

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" color="error">404</Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>Stránka nenalezena</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Zpět na hlavní stránku
      </Button>
    </Box>
  );
};

export default NotFound;
