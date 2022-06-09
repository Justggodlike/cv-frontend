import React from 'react';
import MessageService from '../services/MessageService';
import Box from '@mui/material/Box';
import './MockVacancyComponent.css';
import Typography from '@mui/material/Typography';
import { Button } from './Button';
import withRouter from './withRouter';
import { Link } from 'react-router-dom';
import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/user/getFile/';

function download(id, fileName) {
return axios({
  url: USERS_REST_API_URL + id,
  method: 'GET',
  responseType: 'blob',
}).then((response) => {
  console.log(response.headers);
  const filename = fileName;
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
});
}

class MockMessageComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            id:'',
            message:{}
        }
    }

    componentDidMount(){
        console.log(this.props.id)
        MessageService.getMessage(this.props.id).then((response) => {
            console.log(response)
            this.setState({message: response.data})
        });
    }

    render (){
        return (
            <div className='divh'>
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
                {/* {this.state.vacancy.title} */}
                <h1 className = "text-center texth">  {this.state.message.title} </h1>
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
                <Typography
                    sx={{ display: 'block', paddingTop: '15px', fontSize: '18px', fontWeight: '400' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {this.state.message.desc}
                </Typography>
                <Typography
                    sx={{ display: 'block', paddingTop: '50px', fontSize: '22px', fontWeight: '500', color: 'blue'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    onClick={() => download(this.state.message.id, this.state.message.fileName)}
                >
                    {this.state.message.filename}
                </Typography>
                <Box
                    sx={{
                        width: 0,
                        height: 200,
                        backgroundColor: 'white',
                        '&:hover': {
                        backgroundColor: 'white',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
            </div>

        )
    }
}

export default MockMessageComponent;