import axios from 'axios'

const INBOX_REST_API_URL = 'http://localhost:8080/api/messages/inbox';
const APPLICATIONS_REST_API_URL = 'http://localhost:8080/api/messages/outgoing';

class MessageService {

    getMessagesInbox(){
        return axios.get(INBOX_REST_API_URL);
    }

    getApplications(){
        return axios.get(APPLICATIONS_REST_API_URL);
    }
}

export default new MessageService();