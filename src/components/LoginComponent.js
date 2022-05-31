import React from 'react';
import Box from '@mui/material/Box';
import axios from 'axios'
import './LoginComponent.css';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

class LoginComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        const navigate = useNavigate();
        event.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:8080/api/login",
            data: {email:this.state.email, password:this.state.password},
            })
        navigate('/');
      };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render (){
        return (
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
                <form onSubmit={this.handleSubmit} className='form'>
                <label className='input'>
                    email 
                    <input
                    className='input'
                    name="email"
                    type="text"
                    checked={this.state.email}
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
                    password
                    <input
                    className='input'
                    name="password"
                    type="text"
                    checked={this.state.password}
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
                <div>
                    <label className='input'>
                        <input className='input' type="submit" value="LOGIN"/>
                    </label>
                </div>
                </form>
            </div>
        )
    }
}

export default LoginComponent;