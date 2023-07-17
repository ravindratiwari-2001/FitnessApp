import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '40px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/fitness-app-react.github.io/">
      <img src={Logo} alt="logo" style={{ width: '80px', height: '80px', margin: { sm: '0px 20px', xs: '0px 40px' } }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      paddingBottom="20px"
    >
      <Link to="/fitness-app-react.github.io/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
