import React from 'react'
import { Grid } from 'semantic-ui-react'
import { useSelector} from 'react-redux'
import MyCard from './objective/objective.js'

const Objectives = () => {
  const objectives = useSelector((state) => state.objectiveReducer);
  return(
  <Grid columns={1} divided>
    <Grid.Row>
      <Grid.Column>
         {objectives.map((objective) => (
            <MyCard objective={objective} />
          ))}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
}

export default Objectives;
