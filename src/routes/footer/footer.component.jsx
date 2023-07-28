import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import FooterLink from "../../component/footerLink/footerLink.component";

import { categories, footerIcon } from "./footer.data";

import {
    FooterContainer,
    FooterLinksContainer,
    LowerPartContainer,
    TextLine2,
    CategoryContainer,
    Text,
    IconContainer,
    FooterIcon,
} from "./footer.style";

  
const Footer = () => {
  const { logoYoutube, logoInsta } = footerIcon

  return (
    <Fragment>
      <Outlet/>
      <FooterContainer>
        <FooterLinksContainer>
          {
            categories.map((el) => 
              <CategoryContainer key={el.id}>
                <FooterLink  category={el}/>
              </CategoryContainer>)
          }
        </FooterLinksContainer>
        <LowerPartContainer>
          <div>
            <TextLine2>500 Chem. De Polytechnique, Montréal, Qc &nbsp;&nbsp; | &nbsp;&nbsp; TEL(514)340-4711 &nbsp;&nbsp; | &nbsp;&nbsp; FAX(514)340-4712</TextLine2>
            <TextLine2>Copyright &copy; 2022 Continum Convergence. All Rights Reserved</TextLine2>
          </div>
          <div>
            <Text>PRIVACY &nbsp;&nbsp; BUSINESS SITES &nbsp;&nbsp; FAMILY SITE</Text>
            <IconContainer>
              <FooterIcon  src={logoYoutube}/>
              <FooterIcon  src={logoInsta}/>
            </IconContainer>
          </div>
        </LowerPartContainer>
      </FooterContainer>
    </Fragment>
  )
}

export default Footer;