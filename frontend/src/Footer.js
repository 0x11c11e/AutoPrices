import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container maxWidth="md" style={{marginTop: '20px', marginBottom: '20px'}}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'© '}
        {new Date().getFullYear()}
        {' DealerClick LLC. All rights reserved.'}
      </Typography>
    </Container>
  );
}

export default Footer;
