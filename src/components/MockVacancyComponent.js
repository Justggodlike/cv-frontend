import React from 'react';
import MessageService from '../services/MessageService';
import Box from '@mui/material/Box';
import './MockVacancyComponent.css';
import Typography from '@mui/material/Typography';
import { Button } from './Button';

const typo1 = 'SOFTSWISS – продуктовая IT компания, сфокусированная на отрасли iGaming. Мы создаём и поддерживаем мощные программные решения для управления онлайн-бизнесом в индустрии развлечений по всему миру. Сегодня с нами более 1000 профессионалов в Беларуси и за её пределами, включая собственный офис на Мальте, Польши, Грузии с возможностью длительных командировок. Растём весьма активно: количество сотрудников за последний год увеличилось в два раза. С 2018 года имеем статус резидента Парка высоких технологий.'
const typo2 = 'Наша команда – компетентные, драйвовые сотрудники Senior и Middle уровня с серьёзным опытом. За плечами множество непростых проектов, включая онлайн-казино, спортивные порталы, криптовалютные биржи, партнёрские программы... У нас в работе большое число новых сайтов, которые мы разворачиваем по всему миру для себя и наших клиентов. Необходима постоянная поддержка и развитие сотен уже существующих сайтов, обслуживающих миллионы игроков. Огромное поле для развития и совершенствования навыков профессиональных frontend-разработчиков!'

class MockVacancyComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            vacancies:[]
        }
    }

    componentDidMount(){
        MessageService.getApplications().then((response) => {
            this.setState({ messages: response.data})
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
                <h1 className = "text-center texth"> Frontend Developer/HTML-coder </h1>
                <Typography
                    sx={{ display: 'block', paddingTop: '30px', fontSize: '20px', fontWeight: '700' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    SOFTSWISS
                </Typography>
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
                    {typo1}
                </Typography>
                <Typography
                    sx={{ display: 'block', paddingTop: '15px', fontSize: '18px', fontWeight: '400' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {typo2}
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
                <button class="button button1">Откликнуться</button>
            </div>

        )
    }
}

export default MockVacancyComponent;