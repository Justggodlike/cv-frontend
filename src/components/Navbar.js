import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/user/getFile/6295e98cdb204534df165e82';

function download() {
axios({
  url: USERS_REST_API_URL, //your url
  method: 'GET',
  responseType: 'blob',
}).then((response) => {
  console.log(response.headers);
  const filename = 'AYE.txt'
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
});
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' sx={{ fontSize: '30px', fontWeight: '600' }}>
            CV
            <i className='fab fa-typo3' />
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link 
                to='/' 
                className='nav-links'
              >
                Открытые вакансии
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/messages'
                className='nav-links'
              >
                Входящие заявки
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/applications'
                className='nav-links'
              >
                Поданые заявки
              </Link>
            </li>
          </ul>
          <Button buttonStyle='btn--outline'>Login</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
