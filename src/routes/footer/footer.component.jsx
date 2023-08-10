import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import FooterLink from "../../component/footerLink/footerLink.component";

import { categories, footerIcon, selecterObject } from "./footer.data";

import {
    FooterContainer,
    FooterLinksContainer,
    UpperPartContainer,
    LowerPartContainer,
    TextLine2,
    CategoryContainer,
    Text,
    IconContainer,
    FooterIcon,
    Testing,
} from "./footer.style";
import Selecter from "../../component/selecter/selecter.component";



  
const Footer = () => {
  const { logoYoutube, logoInsta } = footerIcon

  return (
    <Fragment>
      <Outlet/>
      <FooterContainer>
        <UpperPartContainer>
          <CategoryContainer>
            {categories.map((el) => <FooterLink key={el.id} category={el}/>)}
          </CategoryContainer>

          {/* <Testing /> */}
          <Selecter props={selecterObject}/>

        </UpperPartContainer>
        <LowerPartContainer>
          <div>
            <TextLine2>500 Chem. De Polytechnique, Montréal, Qc &nbsp;&nbsp; | &nbsp;&nbsp; TEL(514)340-4711 &nbsp;&nbsp; | &nbsp;&nbsp; FAX(514)340-4712</TextLine2>
            <TextLine2>Copyright &copy; 2022 Continum Convergence. All Rights Reserved</TextLine2>
          </div>
          <div>
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