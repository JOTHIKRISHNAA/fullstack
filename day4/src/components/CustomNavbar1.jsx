import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const CustomNavBar1 = () =>{

    return(

        <Navbar>
    <Navbar.Brand href="#">
        <img src={"https://makemyevent.in/wp-content/uploads/2019/11/cropped-cropped-Logo-Home-Header-1-2048x691.png"} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
      </Navbar.Brand>
    <Nav>
      
      <Nav.Item><Link to={'/addtheme'}>ADD THEME</Link></Nav.Item>
      <Nav.Item><Link to={'/foodmenu'}>FOOD MENU</Link></Nav.Item>
      <Nav.Item><Link to={'/addons'}>ADD-ONS</Link></Nav.Item>
      <Nav.Item><Link to={'/viewevents'}>VIEW EVENTS</Link></Nav.Item>
      
      
    </Nav>
    <Nav pullRight>
    <Nav.Item>
          {/* Add your logout icon here */}
          <FontAwesomeIcon icon={faSignOutAlt} /> <Link to={'/login'}>LOGOUT</Link>
        </Nav.Item>
    </Nav>
  </Navbar>
    );
}
export default CustomNavBar1;