import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { Button, Form, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {createObjective} from '../../actions/actions.js'

const CreateObjective = ({open, setOpen}) => {
    const [objective, setObjective] = useState({});
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createObjective(objective));
        setObjective({topic: ''});
    };
    return (
        <Modal
          onClose={() => {setOpen(false);}}
          onOpen={() => {setOpen(true);}}
          open={open}
        >
          
          <Modal.Header className = "header">Create a new Objective</Modal.Header>
          <Modal.Content >
              
          <Form className = "formStyles"  style={{textAlign:"center"}} onSubmit = {handleSubmit}>
                <Form.Field >
                    <label  >Topic</label>
                    <input placeholder='Topic' style={{width: "60%" }} onChange = {(e) => {setObjective({...objective, topic : e.target.value})}} value={objective.topic}/>
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
    
        
      )
    };
    

export default CreateObjective;