import React from 'react';
import '../../App.css';
import MockMessageComponent from '../MockMessageComponent';
import {useParams} from "react-router-dom";

function MockMessage() {

  const {id} = useParams()

  return (
    <>
      <MockMessageComponent id={id}/>
    </>
  );
}

export default MockMessage;
