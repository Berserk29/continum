import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import FooterLink from "../../component/footerLink/footerLink.component";

import logoContinumTablet from '../../assets/icon/logo_horizontal_w.png'
import logoContinumWhite from '../../assets/icon/logo_vertical_w.png'
import logoYoutube from '../../assets/icon/logo_youtube.png'
import logoFacebook from '../../assets/icon/logo_facebook.png'
import logoTwitter from '../../assets/icon/logo_twitter.png'
import logoInsta from '../../assets/icon/logo_insta.png'

import {
    FooterContainer,
    FooterLinksContainer,
    ContinumLogo,
    LowerPartContainer,
    TextLine2,
    CategoryContainer,
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
    title: 'Sustainability',
    path: 'sustainability',
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
    title: 'Contact Us',
    path: 'contact',
    linkName: ['Talent', 'HR System', 'Jobs']
  },
]
  
const Footer = () => {
  const isTablet = useMediaQuery(mediaQuery.useTablet);

  return (
    <Fragment>
      <Outlet/>
      <FooterContainer>
        <FooterLinksContainer>
          <CategoryContainer>
            {isTablet ? '' : <ContinumLogo src={logoContinumWhite} alt='logo-continum'/>}
          </CategoryContainer>
          {
            categories.map((el) => 
              <CategoryContainer key={el.id}>
                <FooterLink  category={el}/>
              </CategoryContainer>)
          }
          {isTablet ? <ContinumLogo src={logoContinumTablet} alt='logo-continum'/> : ''}
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