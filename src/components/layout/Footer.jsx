import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './FooterStyle.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='informations-F'>
          <h1>Varied Delicacies</h1>
          <h2>©copyright 2024 Jhon Itallo</h2>
          <div className='social-media'>
            <ul>
              <li>
              <a className='btn' href="https://github.com/jhonItallo" target="_blank"><FaGithub /></a>
              </li>
              <li>
              <a className='btn' href="https://www.linkedin.com/in/jhon-itallo/" target="_blank"><FaLinkedin /></a>
              </li>
              <li>
              <a className='btn' href="https://www.instagram.com/jhon_itallo/" target="_blank"><FaInstagram /></a>
              </li>
            </ul>
          </div>
        </div>
  
      <div className='containerIMG-footer'>
        <div className='img'></div>
      </div>
    </footer>
  )
}

export default Footer