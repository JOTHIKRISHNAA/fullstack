
// import { Navbar, Nav, Dropdown } from 'rsuite'; // Include Dropdown in the import

// import HomeIcon from '@rsuite/icons/legacy/Home';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignOutAlt,faUser} from '@fortawesome/free-solid-svg-icons';
// import CogIcon from '@rsuite/icons/legacy/Cog';
// import { Link } from 'react-router-dom';


// const CustomNavBar = () => {
//   return (
//     <Navbar>
//       <Navbar.Brand href="#">
//         <img
//           src={"https://makemyevent.in/wp-content/uploads/2019/11/cropped-cropped-Logo-Home-Header-1-2048x691.png"}
//           alt="Logo"
//           style={{ height: '30px', marginRight: '10px' }}
//         />
//       </Navbar.Brand>
//       <Nav >
//         <Nav.Item icon={<HomeIcon />}><Link to={'/home'}>HOME</Link></Nav.Item>
//         <Nav.Item><Link to={'/about'}>ABOUT US</Link></Nav.Item>
//         <Nav.Item><Link to={'/event'}>BIRTHDAY EVENTS</Link></Nav.Item>
//         <Nav.Item><Link to={'/services'}>OUR SERVICES</Link></Nav.Item>
//         <Nav.Item><Link>BOOKED EVENTS</Link></Nav.Item>
//       </Nav>
//       <Nav pullRight>
//         <Link><Dropdown icon={<CogIcon />}title="SETTINGS" > {/* Use Dropdown from the imported rsuite */}
//           <Dropdown.Item><Nav.Item><FontAwesomeIcon icon={faUser} /> <Link to={'/profile'}>PROFILE</Link></Nav.Item></Dropdown.Item>
//           <Dropdown.Item><Nav.Item><FontAwesomeIcon icon={faSignOutAlt} /> <Link to={'/login'}>LOGOUT</Link></Nav.Item></Dropdown.Item>
          
//         </Dropdown></Link>
       
//       </Nav>
//     </Navbar>
//   );
// };

// export default CustomNavBar;
import React from 'react';
import { Navbar, Nav, Dropdown } from 'rsuite'; // Include Dropdown in the import
import HomeIcon from '@rsuite/icons/legacy/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';

const CustomNavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#">
        <img
          src="https://makemyevent.in/wp-content/uploads/2019/11/cropped-cropped-Logo-Home-Header-1-2048x691.png"
          alt="Logo"
          style={{ height: '30px', marginRight: '5px' }} // Adjusted marginRight
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Item icon={<HomeIcon />}><Link to={'/home'}>HOME</Link></Nav.Item>
        <Nav.Item><Link to={'/about'}>ABOUT US</Link></Nav.Item>
        <Nav.Item><Link to={'/event'}>BIRTHDAY EVENTS</Link></Nav.Item>
        <Nav.Item><Link to={'/services'}>OUR SERVICES</Link></Nav.Item>
        <Nav.Item><Link>BOOKED EVENTS</Link></Nav.Item>
      </Nav>
      <Nav pullRight>
        <Link>
          <Dropdown icon={<CogIcon />} title="SETTINGS">
            {/* Use Dropdown from the imported rsuite */}
            <Dropdown.Item>
              <Nav.Item>
                <FontAwesomeIcon icon={faUser} /> <Link to={'/profile'}>PROFILE</Link>
              </Nav.Item>
            </Dropdown.Item>
            <Dropdown.Item>
              <Nav.Item>
                <FontAwesomeIcon icon={faSignOutAlt} /> <Link to={'/'}>LOGOUT</Link>
              </Nav.Item>
            </Dropdown.Item>
          </Dropdown>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavBar;

