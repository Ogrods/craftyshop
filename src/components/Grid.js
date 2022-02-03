import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "./Card.js"
import { css } from "./Grid.css"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box className="grid" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item><Card /></Item>
        </Grid>
        <Grid item xs={3}>
        <Item><Card /></Item>
        </Grid>
        <Grid item xs={3}>
        <Item><Card /></Item>
        </Grid>
        <Grid item xs={3}>
        <Item><Card /></Item>
        </Grid>
        <Grid item xs={3}>
        <Item><Card /></Item>
        </Grid>
        <Grid item xs={3}>
        <Item><Card /></Item>
        </Grid>
        <Grid item xs={3}>
        <Item><Card /></Item>
        </Grid>
        <Grid item xs={3}>
        <Item><Card /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}