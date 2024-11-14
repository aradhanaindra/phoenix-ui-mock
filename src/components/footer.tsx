import React from 'react'
import { Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

export const Footer = () => {
  return (
    <Stack
      direction={'row'}
      spacing={2}
      sx={{
        padding: 1,
        backgroundColor: red[500],
      }}
      justifyContent={'space-between'}
    >
      <Typography color='white'>
        Jalan Tipar Cakung Kav. F 5-7, Jl. Cakung Bar No.154 1, RT.1/RW.9,
        Cakung Bar., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota
        Jakarta 13910
      </Typography>
    </Stack>
  );
};
