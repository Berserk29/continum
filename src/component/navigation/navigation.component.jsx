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
  NavLogo,
} from "./navigation.style";


const Navigation = () => {
  const [hoverState, setHoverState] = useState(false);
  const [dropMenuOn, setDropMenuOn] = useState(false);
  const {continumWhite, continumBlack, hamWhite, hamBlack, globeWhite, globeBlack, closeBtn} = navIcon;
  const navigate = useNavigate();

  const navigateHandler = (link) => navigate(link);
  const isTablet = useMediaQuery(mediaQuery.useTablet);

  const hoverHandlerOn = () => setHoverState(true);
  const hoverHandlerOff = () => setHoverState(false);

  const clickHandler = () => {
    if(!dropMenuOn) setDropMenuOn(true)
    else setDropMenuOn(false)
  };
  
  const hoverLogic = (option1, option2) => hoverState || dropMenuOn  ? option1 : option2 ;

  const navHamLogic = (option1, option2, option3) => {
    if(dropMenuOn) return option3
    return hoverLogic(option1, option2)
  };

    return (
      <Fragment>
            <NavigationContainer onMouseEnter={hoverHandlerOn} onMouseLeave={hoverHandlerOff} color={hoverLogic('var(--color-050)','transparent')}>
              <NavLogo src={hoverLogic(continumBlack, continumWhite)} alt={"logo"} onClick={() => navigateHandler('/')}/>
              { !isTablet &&
                <NavLinksContainer>
                  {navLinkArray.map(el => <li key={el.id} onClick={() => navigateHandler(el.path)}><Typo type={TypoType.Link} linkColor={hoverLogic('var(--color-secondary)','var(--color-050)')}>{el.heading}</Typo></li>)}
                </NavLinksContainer>
              }
              <NavIconsContainer>
                {!dropMenuOn && <NavIcon src={hoverLogic(globeBlack,globeWhite)} alt={'language-icon'} />}
                <NavIcon src={navHamLogic(hamBlack, hamWhite, closeBtn)} alt={'hamburger-icon'} onClick={clickHandler}/>
              </NavIconsContainer>
            </NavigationContainer>
        {dropMenuOn && <DropMenu/> }
      </Fragment>
    )
}


export default Navigation;