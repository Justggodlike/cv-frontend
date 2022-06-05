import React from 'react';
import '../../App.css';
import MockVacancyComponent from '../MockVacancyComponent';
import {useParams} from "react-router-dom";

function MockVacancy() {

  const {id} = useParams()

  return (
    <>
      <MockVacancyComponent id={id}/>
    </>
  );
}

export default MockVacancy;
