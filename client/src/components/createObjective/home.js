import React, { useEffect, useState } from 'react';
import { Button, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CreateObjective from './createObjective';
import { useDispatch } from 'react-redux';
import { fetchObjectives } from '../../actions/actions';
import Objectives from '../objectives/objectives';

const Home = () => {
    const [open, setOpen] = useState(false);
    const handleAddNewObjective = () => {
        setOpen(true);
    };
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchObjectives());
    },[])
    return (
        <>
        <Header>
        <Icon name='laptop' style={{marginTop:'.5%'}}/>Prosper
        </Header>
        <Button style={{marginTop: '1%', marginLeft: '45%'}} color='green' onClick={handleAddNewObjective}>Add New Objectives</Button>
        <CreateObjective open={open} setOpen={setOpen}/>
        <Objectives />
        </>
    );
};

export default Home;