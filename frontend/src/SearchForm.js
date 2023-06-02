import React from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const SearchForm = () => {
  // Assuming we have some data for the dropdown menus
  const years = ['2020', '2021', '2022', '2023'];
  const makes = ['Make 1', 'Make 2', 'Make 3'];
  const models = ['Model 1', 'Model 2', 'Model 3'];

  return (
    <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '60vh' }}>
      <Grid item style={{padding: '20px'}}>
        <FormControl variant="filled" style={{minWidth: 120}}>
          <InputLabel>Year</InputLabel>
          <Select>
            {years.map((year, index) => <MenuItem value={year} key={index}>{year}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item style={{padding: '20px'}}>
        <FormControl variant="filled" style={{minWidth: 120}}>
          <InputLabel>Make</InputLabel>
          <Select>
            {makes.map((make, index) => <MenuItem value={make} key={index}>{make}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item style={{padding: '20px'}}>
        <FormControl variant="filled" style={{minWidth: 120}}>
          <InputLabel>Model</InputLabel>
          <Select>
            {models.map((model, index) => <MenuItem value={model} key={index}>{model}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item style={{padding: '20px'}}>
        <TextField type="number" label="Odometer" variant="filled" style={{width: '120px'}}/>
      </Grid>
      <Grid item style={{padding: '20px'}}>
        <FormControlLabel control={<Checkbox />} label="Accident" />
      </Grid>
      <Grid item style={{padding: '20px'}}>
        <Button variant="contained" color="primary">Search</Button>
      </Grid>
    </Grid>
  );
}

export default SearchForm;
