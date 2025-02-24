import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography variant="body1">
        This is your main dashboard where you can see various metrics and data.
      </Typography>
    </Box>
  );
}
