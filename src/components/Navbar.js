import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios'
import { triggerBase64Download } from 'react-base64-downloader';

const USERS_REST_API_URL = 'http://localhost:8080/api/user/getFile/629577ec6d7c7f0c89498588';

function download() {
//   axios.get(USERS_REST_API_URL).then((response) => {
//     console.log(response);
//     triggerBase64Download(response, 'name.docx')
// });
axios({
  url: USERS_REST_API_URL, //your url
  method: 'GET',
  responseType: 'blob', // important
}).then((response) => {
  console.log(response.headers);
  const filename = response.headers.get('content-disposition');
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

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} sx={{ fontSize: '30px', fontWeight: '600' }}>
            CV
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={download}>SIGN UP</Button>}
          <Link to="/files/file.txt" target="_blank" download> DOWNLOAD </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
