import React from 'react';
import MessageService from '../services/MessageService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import './AddVacancyComponent.css';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

class AddVacancyComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: '',
            company: '',
            salary: '',
            desc: ''
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        localStorage.setItem(name, value);
    
        this.setState({
          [name]: value
        });
      }

    render (){
        return (
            <div>
                <div>
                <Box
                    sx={{
                        width: 0,
                        height: 100,
                        backgroundColor: 'white',
                        '&:hover': {
                        backgroundColor: 'white',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
                <div className='form'>
                <label className='input'>
                    title 
                    <input
                    className='input'
                    name="title"
                    type="text"
                    checked={this.state.title}
                    onChange={this.handleInputChange} />
                </label>
                <Box
                    sx={{
                        width: 0,
                        height: 10,
                        backgroundColor: 'white',
                        '&:hover': {
                        backgroundColor: 'white',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
                <br />
                <label className='input'>
                    salary
                    <input
                    className='input'
                    name="salary"
                    type="text"
                    checked={this.state.salary}
                    onChange={this.handleInputChange} />
                </label>
                <Box
                    sx={{
                        width: 0,
                        height: 10,
                        backgroundColor: 'white',
                        '&:hover': {
                        backgroundColor: 'white',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
                <br />
                <label className='input'>
                    company
                    <input
                    className='input'
                    name="company"
                    type="text"
                    checked={this.state.company}
                    onChange={this.handleInputChange} />
                </label>
                <Box
                    sx={{
                        width: 0,
                        height: 10,
                        backgroundColor: 'white',
                        '&:hover': {
                        backgroundColor: 'white',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
                <br />
                <label className='input'>
                    desc
                    <textarea name="body"
                     className='input desc'
                     name="desc"
                     type="text"
                     checked={this.state.desc}
                     onChange={this.handleInputChange}/>
                </label>
                <Box
                    sx={{
                        width: 0,
                        height: 10,
                        backgroundColor: 'white',
                        '&:hover': {
                        backgroundColor: 'white',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
                <br />
                <div>
                <Link
                    to='/'
                    className='navLink'
                >
                    Опубликовать
                </Link>
                </div>
                </div>
            </div>
            </div>

        )
    }
}

export default AddVacancyComponent;