import React from 'react';
import { Box, Typography } from '@mui/material';

export default function MyComponent() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      <Box sx={{ flex: 1, minWidth: 200 }}>
        <Typography variant="h6">Item 1</Typography>
      </Box>
      <Box sx={{ flex: 1, minWidth: 200 }}>
        <Typography variant="h6">Item 2</Typography>
      </Box>
      <Box sx={{ flex: 1, minWidth: 200 }}>
        <Typography variant="h6">Item 3</Typography>
      </Box>
    </Box>
  );
}
