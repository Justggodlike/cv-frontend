import React from 'react';
import UserService from '../services/UserService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Form } from './Form';
import './UserComponent.css'

function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split('')[0][0]}${name.split('')[1][0]}`,
    };
  }

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    ifNullThenEmptyString(str) {
        if(str === null) {
            return "UN";
        }
        return str;
    }

    render (){
        return (
            <div>
                {/* <Form /> */}
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
                <h1 className = "text-center"> Открытые позиции </h1>
                <Box
                    sx={{
                        width: 0,
                        height: 40,
                        backgroundColor: 'white',
                        '&:hover': {
                        backgroundColor: 'white',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
                    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', px: '15%'}}>
                        {/* {this.state.users.map((user) => */}
                        <React.Fragment>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar {...stringAvatar('КИ')} />
                                </ListItemAvatar>
                                <ListItemText
                                sx={{ display: 'block', fontSize: '20px', fontWeight: '600' }}
                                primary='Водитель-экспедитор (микроавтобус, категории B) - Кирего, ЧП'
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {'Доставка товаров клиентам. Учет товаров на складе. Поддержание машины в чистом и рабочем состоянии. Работа с сопроводительными документами. Опыт вождения не менее 2 лет.'.substring(0, 500)}
                                    </Typography>
                                    <Typography
                                        sx={{ display: 'block', paddingTop: '15px', fontSize: '20px', fontWeight: '600' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        1000p
                                    </Typography>
                                    </React.Fragment>
                                    
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar {...stringAvatar('SO')} />
                                </ListItemAvatar>
                                <ListItemText
                                sx={{ display: 'block', fontSize: '20px', fontWeight: '600' }}
                                primary='Frontend Developer/HTML-coder - SOFTSWISS'
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {'Работа с проектами на React. Работа с проектами на AngularJS (изначальное владение не обязательно). Разработка пользовательских интерфейсов. Уровень верстки - middle/senior. Уровень react - junior/middle. От 2-х лет опыта Frontend разработки. Высокий уровень знаний по HTML...'.substring(0, 500)}
                                    </Typography>
                                    <Typography
                                        sx={{ display: 'block', paddingTop: '15px', fontSize: '20px', fontWeight: '600' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        400$ - 1200$
                                    </Typography>
                                    </React.Fragment>
                                    
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            </React.Fragment>
                        {/* )} */}
                    </List>
                    <div className='divh'>
                    <Box
                    sx={{
                        width: 0,
                        height: 400,
                        backgroundColor: 'white',
                        '&:hover': {
                        backgroundColor: 'white',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
                    <button class="button button1">Добавить вакансию...</button>
                </div>
            </div>
        )
    }
}

export default UserComponent;

{/* <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', px: '15%'}}>
{this.state.users.map((user) =>
<React.Fragment>
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar {...stringAvatar(this.ifNullThenEmptyString(user.fullName))} />
        </ListItemAvatar>
        <ListItemText
        sx={{ display: 'block', fontSize: '20px', fontWeight: '600' }}
        primary={user.email.substring(0, 50)}
        secondary={
            <React.Fragment>
            <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
            >
                {user.password + " — I'll be in your neighborhood doing errands this…".substring(0, 500)}
            </Typography>
            <Typography
                sx={{ display: 'block', paddingTop: '15px', fontSize: '20px', fontWeight: '600' }}
                component="span"
                variant="body2"
                color="text.primary"
            >
                400$ - 1200$
            </Typography>
            </React.Fragment>
            
        }
        />
    </ListItem>
    <Divider variant="inset" component="li" />
    </React.Fragment>
)}
</List> */}