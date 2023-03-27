import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import mediaQuery from "../../helper/mediaQuery";


import continumBlack from '../../assets/icon/logo_horizontal_b.png'
import continumWhite from '../../assets/icon/logo_horizontal_w.png' 
import hamBlack from '../../assets/icon/icon_hamburger_b.png'
import hamWhite from '../../assets/icon/icon_hamburger_w.png'

import { 
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

  const isTabletOrMobile = useMediaQuery(mediaQuery.useTablet)


    return (
        <NavigationContainer onMouseEnter={hoverHandlerOn} onMouseLeave={hoverHandlerOff}>
            <NavLogo src={hoverState ? continumBlack : continumWhite} alt={"logo"} onClick={navLogoHandler}/>
            {  isTabletOrMobile ?  
              <NavIconsContainer>
                <NavHam src={hoverState ? hamBlack : hamWhite} alt={'hamburger-menu'}/>
              </NavIconsContainer>
                :
              <NavLinksContainer>
                <NavLi><NavLink to='/about'>About Us</NavLink></NavLi>
                <NavLi><NavLink to='/business'>Business & Solutions</NavLink></NavLi>
                <NavLi><NavLink to='/sustainability'>Sustainability Management</NavLink></NavLi>
                <NavLi><NavLink to='/pr'>PR</NavLink></NavLi>
                <NavLi><NavLink to='/contact'>Contact Us</NavLink></NavLi>
              </NavLinksContainer>
              }
        </NavigationContainer>
    )
}

export default Navigation;