import React from 'react';
import { Container } from '@mui/material';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <SearchForm />
      <Footer />
    </Container>
  );
}

export default App;
