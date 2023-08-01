import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { DropMenuContainer, DropMenuUl, MenuLi, MenuLink, MenuContainer} from "./dropMenu.style";
import { categories } from "../../routes/footer/footer.data";

const DropMenu = () => {
  const [arrayNum, setArrayNum] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const clickHandler = (id) => setArrayNum(id);

  const linkHandler = () => {
    if(categories[arrayNum].path === location.pathname) return window.location.reload(true)
    else navigate(categories[arrayNum].path)
  };

    return (
        <DropMenuContainer>
            <DropMenuUl>
            {categories.map((el) =>
              <MenuContainer key={el.id}>
                <MenuLi
                  className={arrayNum === el.id ? 'active' : ''} 
                  onClick={() => clickHandler(el.id)}
                >{el.title}</MenuLi>
              </MenuContainer> 
            )}
            </DropMenuUl>
            <DropMenuUl>
                { arrayNum === false ? '' : 
                  categories[arrayNum].linkName.map((el,i) => 
                  <MenuLink 
                    onClick={linkHandler} 
                    key={i}
                    >{el}</MenuLink>
                )}
            </DropMenuUl>
        </DropMenuContainer>
    )
}

export default DropMenu;