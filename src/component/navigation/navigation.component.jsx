import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import mediaQuery from "../../helper/mediaQuery";

import DropMenu from "../dropMenu/dropMenu.component";

import continumBlack from '../../assets/icon/logo_horizontal_b.png'
import continumWhite from '../../assets/icon/logo_horizontal_w.png' 
import hamBlack from '../../assets/icon/icon_hamburger_b.png'
import hamWhite from '../../assets/icon/icon_hamburger_w.png'
import globeWhite from '../../assets/icon/icon_globe_w.png'
import globeBlack from '../../assets/icon/icon_globe_b.png'

import { 
  NavHam,
  NavIconsContainer,
  NavigationContainer,
  NavLinks,
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
                <NavLi><NavLinks color={hoverLogic()} to='/about'>About Us</NavLinks></NavLi>
                <NavLi><NavLinks color={hoverLogic()} to='/business'>Business & Solutions</NavLinks></NavLi>
                <NavLi><NavLinks color={hoverLogic()} to='/sustainability'>Sustainability Management</NavLinks></NavLi>
                <NavLi><NavLinks color={hoverLogic()} to='/pr'>PR</NavLinks></NavLi>
                <NavLi><NavLinks color={hoverLogic()} to='/contact'>Contact Us</NavLinks></NavLi>
              </NavLinksContainer>
              <NavHam src={hoverState ? globeBlack : globeWhite} alt={'hamburger-menu'}/>
            </NavigationContainer>
            }
        {dropMenuOn && isTablet ? <DropMenu/> : ''}
      </Fragment>
    )
}

export default Navigation;