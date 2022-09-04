import React from "react";
import Header from "./Header";
import Grid from '@mui/material/Grid';
import Content from "./Content";


const App = () => {
  return (
    <Grid container direction="column"  >
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2}/>
        <Grid item xs={12} sm={8} >
          <Content/>
        </Grid>
       <Grid item xs={false} sm={2}/>
      </Grid>
      
    </Grid>
  );
};

export default App;