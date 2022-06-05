import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/user/all';
const VACANCIES_REST_API_URL = 'http://localhost:8080/api/vacancy/all';
const VACANCY_REST_API_URL = 'http://localhost:8080/api/vacancy/{id}?id=';
const LOGIN_REST_API_URL = 'http://localhost:8080/api/login';
const VACANCY_CREATE_REST_API_URL = 'http://localhost:8080/api/vacancy/add';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    getVacancies(){
        return axios.get(VACANCIES_REST_API_URL);
    }

    getVacancy(vacancy){
        return axios.get(VACANCY_REST_API_URL + vacancy);
    }

    login(email, password){
        return axios.post(LOGIN_REST_API_URL, { email, password })
    }

    createVacancy(title, salary, desc, company){
        return axios.post(VACANCY_CREATE_REST_API_URL, { title, salary, desc, company })
    }
}

export default new UserService();