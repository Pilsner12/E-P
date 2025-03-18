import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

export default function MainGrid() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Card 1</Typography>
          {/* Content of the card */}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Card 2</Typography>
          {/* Content of the card */}
        </Paper>
      </Grid>
      {/* Add more grid items as needed */}
    </Grid>
  );
}
