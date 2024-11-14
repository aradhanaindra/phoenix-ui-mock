import React from 'react'
import { Avatar, Button, Stack, TextField } from '@mui/material';
import { red } from '@mui/material/colors';
export const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      spacing={2}
      sx={{
        padding: 1,
        borderBottom: 1,
        borderColor: red[100],
      }}
      justifyContent={'space-between'}  
    >
      <Stack direction={'row'} spacing={2} alignItems={'center'}>
        {/* <img src={WingsLogo} alt="Logo" height={32} /> */}
        <Button id="basic-button" aria-haspopup="true">
          WM Apps
        </Button>
        <Button id="basic-button" aria-haspopup="true">
          SD Apps
        </Button>
      </Stack>

      <Stack direction={'row'} spacing={2}>
        <TextField
          id="outlined-basic"
          label="Search menu"
          variant="outlined"
          size="small"
        />
        <Avatar sx={{ bgcolor: red[700] }}>A</Avatar>
      </Stack>
    </Stack>
  );
};
