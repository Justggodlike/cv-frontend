import axios from 'axios'

const INBOX_REST_API_URL = 'http://localhost:8080/api/messages/inbox';
const APPLICATIONS_REST_API_URL = 'http://localhost:8080/api/messages/outgoing';
const MESSAGE_REST_API_URL = 'http://localhost:8080/api/message/';

class MessageService {

    getMessagesInbox(){
        return axios.get(INBOX_REST_API_URL);
    }

    getApplications(){
        return axios.get(APPLICATIONS_REST_API_URL);
    }

    getMessage(message){
        return axios.get(MESSAGE_REST_API_URL + message);
    }
}

export default new MessageService();