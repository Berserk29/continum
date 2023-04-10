import { useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import mediaQuery from "../../helper/mediaQuery";

import DropMenu from "../dropMenu/dropMenu.component";
import { navLinkArray } from "./navigation.data";

import continumBlack from '../../assets/icon/logo_horizontal_b.png'
import continumWhite from '../../assets/icon/logo_horizontal_w.png' 
import hamBlack from '../../assets/icon/icon_hamburger_b.png'
import hamWhite from '../../assets/icon/icon_hamburger_w.png'
import globeWhite from '../../assets/icon/icon_globe_w.png'
import globeBlack from '../../assets/icon/icon_globe_b.png'
import closeBtn from '../../assets/icon/icon_close.png'

import { 
  NavHam,
  NavIconsContainer,
  NavigationContainer,
  NavLinks,
  NavLinksContainer,
  NavLi,
  NavLogo,
} from "./navigation.style";


const Navigation = () => {
  const [hoverState, setHoverState] = useState(false);
  const [dropMenuOn, setDropMenuOn] = useState(false);
  
  const navigate = useNavigate();
  const navLogoHandler = () => navigate('/');
  
  const isTablet = useMediaQuery(mediaQuery.useTablet);
  const isMobile = useMediaQuery(mediaQuery.useMobile);
  
  useEffect(() => {
    if(!isTablet) setDropMenuOn(false)
  }, [isTablet]);

  const hoverHandlerOn = () => setHoverState(true);
  const hoverHandlerOff = () => setHoverState(false);

  const clickHandler = () => {
    if(!dropMenuOn) setDropMenuOn(true)
    else setDropMenuOn(false)
  };
  
  const hoverLogic = (option1, option2) => hoverState ? option1 : option2 ;
  const betweenLogic = (option1, option2) => hoverState || dropMenuOn || isMobile ? option1 : option2 ;

  const navHamLogic = (option1, option2, option3) => {
    if(dropMenuOn) return option3
    return betweenLogic(option1, option2)
  };

    return (
      <Fragment>
          {  isTablet ?  
            <NavigationContainer onMouseEnter={hoverHandlerOn} onMouseLeave={hoverHandlerOff} color={betweenLogic('white','transparent')}>
              <NavLogo src={betweenLogic(continumBlack, continumWhite)} alt={"logo"} onClick={navLogoHandler}/>
              <NavIconsContainer>
                <NavHam src={navHamLogic(hamBlack, hamWhite, closeBtn)} alt={'hamburger-menu'} onClick={clickHandler}/>
              </NavIconsContainer>
            </NavigationContainer>
                :
            <NavigationContainer onMouseEnter={hoverHandlerOn} onMouseLeave={hoverHandlerOff} color={hoverLogic('white', 'transparent')}>
              <NavLogo src={hoverLogic(continumBlack, continumWhite)} alt={"logo"} onClick={navLogoHandler}/>
              <NavLinksContainer>
                {navLinkArray.map(el => <NavLi key={el.id}><NavLinks color={hoverLogic('black','white')} to={el.path}>{el.heading}</NavLinks></NavLi>)}
              </NavLinksContainer>
              <NavHam src={hoverLogic(globeBlack, globeWhite)} alt={'hamburger-menu'}/>
            </NavigationContainer>
            }
        {dropMenuOn && isTablet ? <DropMenu/> : ''}
      </Fragment>
    )
}

export default Navigation;