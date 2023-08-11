import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { DropMenuContainer, DropMenuUl, MenuLink, SectionLine, FlexContainer, Arrow} from "./dropMenu.style";
import { categories } from "../../routes/footer/footer.data";

import Typo, {TypoType} from '../typo/typo.component'
import arrow from '../../assets/icon/arrow-narrow-right.png'

const DropMenu = () => {
  const [arrayNum, setArrayNum] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const isTablet = useMediaQuery(mediaQuery.useTablet)

  const clickHandler = (id) => setArrayNum(id);

  const linkHandler = () => {
    if(categories[arrayNum].path === location.pathname) return window.location.reload(true)
    else navigate(categories[arrayNum].path)
  };

  const linkColorLogic = (id) => arrayNum === id ? 'var(--color-primary)' : isTablet ? 'var(--color-secondary)' : 'var(--color-050)';

    return (
        <DropMenuContainer>
            <DropMenuUl gap={['2.5rem', '4rem']}>
              {categories.map((el) =>
                <FlexContainer key={el.id}>
                  <li  onClick={() => clickHandler(el.id)}>
                    <Typo type={TypoType.LinkDrop} linkColor={linkColorLogic(el.id)}>{el.title}</Typo>
                  </li>
                    {arrayNum === el.id && !isTablet && <Arrow src={arrow} alt="arrow-icon" />}
                </FlexContainer>
              )}
            </DropMenuUl>
            <DropMenuUl gap={['3.5rem', '3rem']}>
                { arrayNum !== false && 
                  categories[arrayNum].linkName.map((el,i) => 
                    <MenuLink onClick={linkHandler} key={i}>{el}</MenuLink>
                )}
            </DropMenuUl>
          {  !isTablet &&         
            <DropMenuUl padding='4rem 0'>
              <SectionLine />
            </DropMenuUl>
          }
        </DropMenuContainer>
    )
}

export default DropMenu;