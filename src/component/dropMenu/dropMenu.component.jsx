import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DropMenuContainer, DropMenuUl, MenuLi, MenuLink, MenuContainer} from "./dropMenu.style";


const categories = [
    {
      id: 0,
      title: 'About Us',
      path: '/about',
      linkName: ['About Us', 'History', 'Business Sites']
    },
    {
      id: 1,
      title: 'Business & Solutions',
      path: '/business',
      linkName: ['Business', 'Solution']
    },
    {
      id: 2,
      title: 'Sustainability',
      path: '/sustainability',
      linkName: ['Ethical Management', 'Quality Management','Safety and Health Enviroment', 'Shared Growth']
    },
    {
      id: 3,
      title: 'PR',
      path: '/pr',
      linkName: ['Press', 'Notice', 'CONTACT US']
    },
    {
      id: 4,
      title: 'Contact Us',
      path: '/contact',
      linkName: ['Talent', 'HR System', 'Jobs']
    },
  ]

const DropMenu = () => {
  const [arrayNum, setArrayNum] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()

    const clickHandler = (id) => setArrayNum(id)

    const linkHandler = () => {
      if(categories[arrayNum].path === location.pathname) return window.location.reload()
      else {
        navigate(categories[arrayNum].path)
      }
    }

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