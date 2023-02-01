import { useNavigate } from "react-router-dom";
import { useState } from "react";

import continumBlack from '../../assets/logo_horizontal_b.png'
import continumWhite from '../../assets/logo_horizontal_w.png' 
import globeBlack from '../../assets/icon_globe_b.png'
import globeWhite from '../../assets/icon_globe_w.png'  
import hamBlack from '../../assets/icon_hamburger_b.png'
import hamWhite from '../../assets/icon_hamburger_w.png'

import { 
  NavGlobe,
  NavHam,
  NavIconsContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
  NavLi,
  NavLogo,
} from "./navigation.style";


const Navigation = () => {
  const navigate = useNavigate();
  const navLogoHandler = () => navigate('/');
  
  const [hoverState, setHoverState] = useState(false)
  const hoverHandlerOn = () => setHoverState(true);
  const hoverHandlerOff = () => setHoverState(false);

    return (
        <NavigationContainer onMouseEnter={hoverHandlerOn} onMouseLeave={hoverHandlerOff}>
            <NavLogo src={hoverState ? continumBlack : continumWhite} alt={"logo"} onClick={navLogoHandler}/>
            <NavLinksContainer>
              <NavLi><NavLink to='/about'>About Us</NavLink></NavLi>
              <NavLi><NavLink to='/business'>Business & Solutions</NavLink></NavLi>
              <NavLi><NavLink to='/sustainability'>Sustainability Management</NavLink></NavLi>
              <NavLi><NavLink to='/pr'>PR</NavLink></NavLi>
              <NavLi><NavLink to='/contact'>Contact Us</NavLink></NavLi>
            </NavLinksContainer>
            <NavIconsContainer>
              <NavGlobe src={hoverState ? globeBlack : globeWhite} alt={'language-logo'}/>
              <NavHam src={hoverState ? hamBlack : hamWhite} alt={'hamburger-menu'}/>
            </NavIconsContainer>
        </NavigationContainer>
    )
}

export default Navigation;