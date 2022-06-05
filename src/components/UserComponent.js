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
import { Link } from 'react-router-dom';
import { Form } from './Form';
import './UserComponent.css'
import { useNavigate } from "react-router-dom";

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

//   function clickVac(id){
//     let navigate = useNavigate(); 
//     const routeChange = () =>{ 
//         let path = 'vacancy/' + id; 
//         navigate(path);
//     }
//   }

//   function clickVac(id) {
//     const navigate = useNavigate();
//     let path = 'vacancy/' + id; 
//     navigate(path);
//   }

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            vacancies:[]
        }
    }

    clickVac() {
        const navigate = this.useNavigate();
        let path = 'vacancy/'; 
        navigate(path);
      }

    componentDidMount(){
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        if(email != null && password != null) {
            UserService.login(email, password);
            localStorage.removeItem('email');
            localStorage.removeItem('password');

        }
        const title = localStorage.getItem('title');
        const salary = localStorage.getItem('salary');
        const desc = localStorage.getItem('desc');
        const company = localStorage.getItem('company');
        if(title != null && salary != null && desc != null && company != null) {
            UserService.createVacancy(title, salary, desc, company);
            localStorage.removeItem('title');
            localStorage.removeItem('salary');
            localStorage.removeItem('company');
            localStorage.removeItem('desc');

        }
        UserService.getVacancies().then((response) => {
            this.setState({ vacancies: response.data})
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
                        {this.state.vacancies.map((vacancy) =>
                        <React.Fragment>
                            <ListItem alignItems="flex-start" >
                                <ListItemAvatar>
                                <Avatar {...stringAvatar(this.ifNullThenEmptyString(vacancy.company))} />
                                </ListItemAvatar>
                                <ListItemText
                                sx={{ display: 'block', fontSize: '20px', fontWeight: '600' }}
                                primary={vacancy.title.substring(0, 50) + " - " + vacancy.company}
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {vacancy.desc.substring(0, 500)}
                                    </Typography>
                                    <Typography
                                        sx={{ display: 'block', paddingTop: '15px', fontSize: '20px', fontWeight: '600' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {vacancy.salary}
                                    </Typography>
                                    </React.Fragment>
                                    
                                }
                                />
                            </ListItem>
                            <Link
                                to={'/vacancy/' + vacancy.id} 
                                className='navLink'
                            >
                                Просмотреть...
                            </Link>
                            <Divider variant="inset" component="li" />
                            </React.Fragment>
                        )}
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
                    <Link
                        to='/vacancy/add' 
                        className='navLink'
                    >
                        Добавить вакансию...
                    </Link>
                </div>
            </div>
        )
    }
}

export default UserComponent;

{/* <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', px: '15%'}}>
{/* {this.state.users.map((user) => */}
{/* <React.Fragment>
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
    </React.Fragment> */}
{/* )} */}
// </List>