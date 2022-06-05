import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import { Form } from '../Form';
import {useParams} from "react-router-dom";


function AddMessage() {

    const {id} = useParams()

  return (
        <div>
            <Form id={id}/>
        </div>

  );
}

export default AddMessage;
