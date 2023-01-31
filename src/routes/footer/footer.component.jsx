import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import logoContinumWhite from '../../assets/logo_vertical_w.png'



import {
    FooterContainer,
    FooterLinksContainer,
    FooterCategory,
    FooterContinumLogo,
} from "./footer.style";

const Footer = () => {
  return (
    <Fragment>
      <Outlet/>
      <FooterContainer>
        <FooterLinksContainer>
          <FooterCategory>
            <FooterContinumLogo src={logoContinumWhite} alt={'logo-continum'}/>
          </FooterCategory>
          <FooterCategory>

          </FooterCategory>
        </FooterLinksContainer>
      </FooterContainer>
    </Fragment>
  )
}

export default Footer;