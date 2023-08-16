import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import mediaQuery from "../../helper/mediaQuery";

import DropMenu from "../dropMenu/dropMenu.component";
import Typo , {TypoType} from "../typo/typo.component"

import { navLinkArray, navIcon } from "./navigation.data";

import { 
  NavIcon,
  NavIconsContainer,
  NavigationContainer,
  NavLinksContainer,
  NavLogo1,
  NavLogo2,
  NavLogoContainer,
} from "./navigation.style";


const Navigation = () => {
  const {logo1, logo2, hamWhite, globeWhite, closeBtn} = navIcon;
  const [hoverState, setHoverState] = useState(false);
  const [dropMenuNav, setDropMenuNav] = useState(false);
  const [dropMenuOn, setDropMenuOn] = useState(false);
  const [clickOne, setClickOne] = useState(false)
  const navigate = useNavigate();
  const isTablet = useMediaQuery(mediaQuery.useTablet);

  const navigateHandler = (link) => navigate(link);
  const hoverHandler = (boolean) => setHoverState(boolean);
  const hoverLogic = (option1, option2) => hoverState || dropMenuNav  ? option1 : option2 ;
  const globeLogic = (option1, option2) => hoverState && !dropMenuNav ? option1 : option2; 
  const hamLogic = (option1, option2) => dropMenuNav ? option1 : option2

  // INFO The dropMenuNav is made to keep the navigation hover color until the dropMenu comeback
  // INFO The dropMenu take .7s to comeback that's why the 700
  const clickHandler = () => {
    if(!dropMenuOn) {
      setClickOne(true)
      setDropMenuOn(true)
      setDropMenuNav(true)
    }
    else {
      setDropMenuOn(false)
      setTimeout(() => {
        setDropMenuNav(false)
      }, 700)
    } 
  };
  
    return (
      <Fragment>
            <NavigationContainer onMouseEnter={() => hoverHandler(true)} onMouseLeave={() => hoverHandler(false)} color={hoverLogic('var(--color-050)','transparent')}>
              <NavLogoContainer onClick={() => navigateHandler('/')}>
                <NavLogo1 src={logo1} alt="Continum-logo" />
                <NavLogo2 isHover={hoverLogic(true, false)} src={logo2} alt="Continum-logo" />
              </NavLogoContainer>
              { !isTablet &&
                <NavLinksContainer>
                  {navLinkArray.map(el => <li key={el.id} onClick={() => navigateHandler(el.path)}><Typo type={TypoType.Link} linkColor={hoverLogic('var(--color-secondary)','var(--color-050)')}>{el.heading}</Typo></li>)}
                </NavLinksContainer>
              }
              <NavIconsContainer>
                <NavIcon src={globeWhite}  isHover={globeLogic(true, false)}  alt={'language-icon'} />
                <NavIcon src={hamLogic(closeBtn, hamWhite)} isHover={hoverLogic(true, false)} alt={'hamburger-icon'} onClick={clickHandler}/>
              </NavIconsContainer>
            </NavigationContainer>
            <DropMenu isOpen={dropMenuOn} clickOne={clickOne}/> 
      </Fragment>
    )
}

export default Navigation;