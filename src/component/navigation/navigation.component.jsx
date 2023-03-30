import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import mediaQuery from "../../helper/mediaQuery";

import DropMenu from "../dropMenu/dropMenu.component";

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
import { useEffect } from "react";


const Navigation = () => {
  const navigate = useNavigate();
  const navLogoHandler = () => navigate('/');
  const [hoverState, setHoverState] = useState(false)
  const [dropMenuOn, setDropMenuOn] = useState(false)
  
  const isTablet = useMediaQuery(mediaQuery.useTablet)
  const hoverHandlerOn = () => setHoverState(true);
  const hoverHandlerOff = () => setHoverState(false);

  const clickHandler = () => {
    if(!dropMenuOn){
      setDropMenuOn(true)
    }
    else {
      setDropMenuOn(false)
    }
  }

  useEffect(() => {
    if(!isTablet) setDropMenuOn(false)
  }, [isTablet])

  const hoverLogic = () => {
    return hoverState ? 'black' : 'white'
  }

    return (
      <Fragment>
          {  isTablet ?  
            <NavigationContainer onMouseEnter={hoverHandlerOn} onMouseLeave={hoverHandlerOff} color={hoverState || dropMenuOn ? 'white' : 'transparent'}>
              <NavLogo src={hoverState || dropMenuOn ? continumBlack : continumWhite} alt={"logo"} onClick={navLogoHandler}/>
              <NavIconsContainer>
                <NavHam src={hoverState || dropMenuOn ? hamBlack : hamWhite} alt={'hamburger-menu'} onClick={clickHandler}/>
              </NavIconsContainer>
            </NavigationContainer>
                :
            <NavigationContainer onMouseEnter={hoverHandlerOn} onMouseLeave={hoverHandlerOff} color={hoverState ? 'white' : 'transparent'}>
              <NavLogo src={hoverState ? continumBlack : continumWhite} alt={"logo"} onClick={navLogoHandler}/>
              <NavLinksContainer>
                <NavLi><NavLink color={hoverLogic()} to='/about'>About Us</NavLink></NavLi>
                <NavLi><NavLink color={hoverLogic()} to='/business'>Business & Solutions</NavLink></NavLi>
                <NavLi><NavLink color={hoverLogic()} to='/sustainability'>Sustainability Management</NavLink></NavLi>
                <NavLi><NavLink color={hoverLogic()} to='/pr'>PR</NavLink></NavLi>
                <NavLi><NavLink color={hoverLogic()} to='/contact'>Contact Us</NavLink></NavLi>
              </NavLinksContainer>
            </NavigationContainer>
            }
        {dropMenuOn && isTablet ? <DropMenu/> : ''}
      </Fragment>
    )
}

export default Navigation;