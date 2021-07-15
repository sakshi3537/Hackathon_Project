import React, { useState } from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css'
import dropdownValues from  './constants/dropdown.js'
import Topnavbar from './components/topnavbar/topnavbar.js'
import Sidebar from './components/sidebar/sidebar.js'
import CreateCard from './components/createCard/createCard.js'
import MyCard from './components/cards/card/card.js'
import Cards from './components/cards/cards.js'
import { Grid } from 'semantic-ui-react'

const App = () => {
  const [currentId,setCurrentId]= useState('');
  return(
  <div>
  <Topnavbar/>
  <Grid>
    <Grid.Row>
      <Grid.Column width={3}>
      <Sidebar />
      <CreateCard />
      </Grid.Column>
      <Grid.Column width={5}>
      <Cards />
      </Grid.Column>
      <Grid.Column width={5}>
        {
          //For later use
        }
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
  );
}


export default App



