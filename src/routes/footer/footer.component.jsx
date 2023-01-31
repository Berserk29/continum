import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import FooterLinkContainer from "../../component/footerLinkContainer/footerLinkContainer.component";

import logoContinumWhite from '../../assets/logo_vertical_w.png'
import logoYoutube from '../../assets/logo_youtube.png'
import logoFacebook from '../../assets/logo_facebook.png'
import logoTwitter from '../../assets/logo_twitter.png'
import logoInsta from '../../assets/logo_insta.png'

import {
    FooterContainer,
    FooterLinksContainer,
    CategoryContainer,
    ContinumLogo,
    LowerPartContainer,
    TextLine2,
    Text,
    IconContainer,
    FooterIcon,
} from "./footer.style";


// TODO Bring into Context
const categories = [
  {
    id: 1,
    title: 'About Us',
    path: 'about',
    linkName: ['About Us', 'History', 'Business Sites']
  },
  {
    id: 2,
    title: 'Business & Solutions',
    path: 'business',
    linkName: ['Business', 'Solution',]
  },
  {
    id: 3,
    title: 'Substainability',
    path: 'substainability',
    linkName: ['Ethical Management', 'Quality Management','Safety and Health Enviroment', 'Shared Growth']
  },
  {
    id: 4,
    title: 'PR',
    path: 'pr',
    linkName: ['Press', 'Notice', 'CONTACT US']
  },
  {
    id: 5,
    title: 'Recruitment',
    path: 'recruitment',
    linkName: ['Talent', 'HR System', 'Jobs']
  },
]
  


const Footer = () => {
  return (
    <Fragment>
      <Outlet/>
      <FooterContainer>
        <FooterLinksContainer>
          <CategoryContainer>
            <ContinumLogo src={logoContinumWhite} alt={'logo-continum'}/>
          </CategoryContainer>
          {
            categories.map((el) => 
              <CategoryContainer key={el.id}>
                <FooterLinkContainer  category={el}/>
              </CategoryContainer>)
          }
        </FooterLinksContainer>
        <LowerPartContainer>
          <TextLine2>500 Chem. De Polytechnique, Montréal, Qc &nbsp;&nbsp; | &nbsp;&nbsp; TEL(514)340-4711 &nbsp;&nbsp; | &nbsp;&nbsp; FAX(514)340-4712<br/>Copyright &copy; 2022 Continum Convergence. All Rights Reserved</TextLine2>
          <div>
            <Text>PRIVACY &nbsp;&nbsp; BUSINESS SITES &nbsp;&nbsp; FAMILY SITE</Text>
            <IconContainer>
              <FooterIcon  src={logoYoutube}/>
              <FooterIcon  src={logoFacebook}/>
              <FooterIcon  src={logoTwitter}/>
              <FooterIcon  src={logoInsta}/>
            </IconContainer>
          </div>
        </LowerPartContainer>
      </FooterContainer>
    </Fragment>
  )
}

export default Footer;