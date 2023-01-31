import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import continumBlack from '../../assets/logo_horizontal_b.png'
// import continumWhite from '../../assets/logo_horizontal_w.png' TODO
import globeBlack from '../../assets/icon_globe_b.png'
// import globeWhite from '../../assets/icon_globe_w.png'  TODO
import hamBlack from '../../assets/icon_hamburger_b.png'
// import hamWhite from '../../assets/icon_hamburger_w.png'


import { 
  NavGlobe,
  NavHam,
  NavIconsContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
  NavLogo,
} from "./navigation.style";

// TODO bring the path for the link...

const Navigation = () => {
    const navigate = useNavigate();

    const navLogoHandler = () => navigate('/')


    return (
      <Fragment>
        <NavigationContainer>
            <NavLogo src={continumBlack} alt={"logo"} onClick={navLogoHandler}/>
            <NavLinksContainer>
              <NavLink to='/categories'>About Us</NavLink>
              <NavLink to='#'>Business & Solutions</NavLink>
              <NavLink to='#'>Sustainability Management</NavLink>
              <NavLink to='#'>PR</NavLink>
              <NavLink to='#'>Recruitment</NavLink>
            </NavLinksContainer>
            <NavIconsContainer>
              <NavGlobe src={globeBlack} alt={'language-logo'}/>
              <NavHam src={hamBlack} alt={'hamburger-menu'}/>
            </NavIconsContainer>
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;