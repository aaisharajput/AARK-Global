import logo from "../../media/newupdated.png"
import styles from './style.module.css'
import { Icon } from '@iconify/react';

export default function Navbar(){

    return(
        <nav className={`navbar navbar-expand-lg py-1 ${styles.nav}`}>
        <div className="container p-0">
          <a className="navbar-brand p-0" href="#">
          <img src={logo} alt="" width="220" className="d-inline-block align-text-top" />
          </a>
          <button className={`navbar-toggler mx-3 ${styles.btn}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <Icon icon="bx:menu-alt-right" className={styles.Icon} />
          </button>
          <div className="collapse navbar-collapse my-0 mx-5 px-4" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item p-3">
                <a className={`nav-link ${styles.navLink}`} href="#">Home</a>
              </li>
              <li className="nav-item p-3">
                <a className={`nav-link ${styles.navLink}`} href="#">About Us</a>
              </li>
              <li className={`nav-item dropdown p-3 ${styles.customDropdown}`} >
                <a className={`nav-link ${styles.navLink} dropdown-toggle ${styles.dropArrow}`} href="#" id="navbarDropdownMenuLink" role="button"  aria-expanded="false">
                  Service Offerings
                </a>
                <ul className={`dropdown-menu ${styles.dropdownMenu} `} aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Software Product Engineering</a></li>
                  <li><a className="dropdown-item" href="#">Hardware Product Engineering</a></li>
                  <li><a className="dropdown-item" href="#">Cloud Platform Engineering</a></li>
                  <li><a className="dropdown-item" href="#">Cognitive Solutions</a></li>
                  <li><a className="dropdown-item" href="#">Salesforce CRM</a></li>
                </ul>
              </li>
              <li className="nav-item p-3">
                <a className={`nav-link ${styles.navLink}`} href="#">Engagement Model</a>
              </li>
              <li className="nav-item p-3">
              <a className={`nav-link ${styles.navLink}`} href="#">Careers</a>
            </li>
            <li className="nav-item p-3">
              <a className={`nav-link ${styles.navLink}`} href="#">Contact Us</a>
            </li>
            </ul>
           
          </div>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <i className="fa fa-magnifying-glass text-white"></i>
          </div>
        </div>
      </nav> 

        )
}

