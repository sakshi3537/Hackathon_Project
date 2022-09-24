import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { updateObjective } from '../../../actions/actions';
import '../../../App.css'



const MyObjective = ({objective}) => {
  const dispatch= useDispatch();
  const [open, setOpen]=useState(false);
  const [openForViewLearnings, setOpenForViewLearnings] = useState(false);
  const [objectiveCard, setObjectiveCard] = useState(objective);
  const handleUpdateItem= ()=>{
    setOpen(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateObjective(objectiveCard));
    setObjectiveCard({});
  }

  const handleViewUpdates = () => {
    setOpenForViewLearnings(true);
  };
  const extra = (
    <div>
        <div>
        <div style={{float:"left", marginLeft:"25%"}}>
        <Button style={{backgroundColor:"green",color:"white"}} onClick={handleUpdateItem}>Add your Learnings</Button> 
        
        </div>
        <div style={{float:"right", marginRight:"25%"}}>
        <Button style={{backgroundColor:"blue",color:"white"}} onClick={handleViewUpdates}>View all Learnings</Button>
        
        </div>
        </div>
        <Modal
          onClose={() => {setOpen(false);}}
          onOpen={() => {setOpen(true);}}
          open={open}
        >
          
          <Modal.Header className = "header">Add your Learnings</Modal.Header>
          <Modal.Content >
              
          <Form className = "formStyles"  style={{textAlign:"center"}} onSubmit = {handleSubmit}>
                <Form.Field >
                    <label>Learning</label>
                    <input placeholder='Learning' style={{width: "60%" }} onChange = {(e) => {setObjectiveCard({...objectiveCard, update : e.target.value})}} value={objectiveCard.update}/>
                </Form.Field>
         </Form>
    
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={() => {setOpen(false);}} >Cancel</Button>
            <Button onClick={(e) => {setOpen(false);handleSubmit(e);}}  positive >
            Submit
            </Button>
          </Modal.Actions>
    
        </Modal> 
        <Modal scrolling
          onClose={() => {setOpenForViewLearnings(false);}}
          onOpen={() => {setOpenForViewLearnings(true);}}
          open={openForViewLearnings}
        >
        <Modal.Header className = "header">List of Learnings</Modal.Header>
          <Modal.Content >
              {objective.updates.map((learning) => (
                <Card fluid
                  header= {learning}
                  color="teal"
                  style={{width:"60%", marginLeft:"20%", marginTop:"2%"}}
                />
              ))}
          
    
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={() => {setOpenForViewLearnings(false);}} >Cancel</Button>
          </Modal.Actions>
    
        </Modal> 
    </div>
  );
  return(
  <Card fluid
    header= {objective.topic}
    meta= {new Date(objective.createdAt). toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
    color="teal"
    style={{width:"60%", marginLeft:"20%", marginTop:"2%"}}
    extra={extra}
  />
  );
}

export default MyObjective;