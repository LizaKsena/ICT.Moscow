import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';

export default function BoxSx({ name, discription }) {
  return (
    <Grid item xs={4}>
      <Box sx={{
        backgroundColor: '#2B8580',
        color: '#FFFFFF',
        padding: 1
      }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: 1,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            // marginBottom: 3,
          }}
        >
          {discription}
        </Typography>
      </Box>
    </Grid>
  );
}
