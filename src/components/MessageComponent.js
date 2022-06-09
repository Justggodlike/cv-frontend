import React from 'react';
import MessageService from '../services/MessageService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

class MessageComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            messages:[]
        }
    }

    componentDidMount(){
        MessageService.getMessagesInbox().then((response) => {
            this.setState({ messages: response.data})
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
                <h1 className = "text-center"> Входящие </h1>
                <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', px: '15%'}}>
                        {this.state.messages.map((message) =>
                        <React.Fragment>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                </ListItemAvatar>
                                <ListItemText
                                sx={{ display: 'block', fontSize: '20px', fontWeight: '600' }}
                                primary={message.title.substring(0, 50)}
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {message.desc.substring(0, 500)}
                                    </Typography>
                                    <Typography
                                        sx={{ display: 'block', paddingTop: '15px', fontSize: '20px', fontWeight: '600' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        To: {message?.userFrom?.email}
                                    </Typography>
                                    <Link
                                        to={'/message/' + message.id} 
                                        className='navLink'
                                    >
                                        Просмотреть...
                                    </Link>
                                    </React.Fragment>
                                    
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            </React.Fragment>
                        )}
                    </List>
            </div>

        )
    }
}

export default MessageComponent;