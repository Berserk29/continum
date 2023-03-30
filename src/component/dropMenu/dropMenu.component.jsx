import { DropMenuContainer, DropMenuUl, MenuLi ,MenuLink,  } from "./dropMenu.style";

const DropMenu = () => {

    return (
        <DropMenuContainer>
            <DropMenuUl>
                <MenuLi><MenuLink to='/about'>About Us</MenuLink></MenuLi>
                <MenuLi><MenuLink to='/business'>Business & Solutions</MenuLink></MenuLi>
                <MenuLi><MenuLink to='/sustainability'>Sustainability Management</MenuLink></MenuLi>
                <MenuLi><MenuLink to='/pr'>PR</MenuLink></MenuLi>
                <MenuLi><MenuLink to='/contact'>Contact Us</MenuLink></MenuLi>
            </DropMenuUl>
        </DropMenuContainer>
    )
}

export default DropMenu;