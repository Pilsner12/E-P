import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4">Vítej v React SPA s MUI!</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Klikni mě
      </Button>
    </Box>
  );
};

export default Home;
