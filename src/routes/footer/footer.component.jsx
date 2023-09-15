import FooterLink from "../../component/footerLink/footerLink.component";
import Selecter from "../../component/selecter/selecter.component";
import Typo, {TypoType} from "../../component/typo/typo.component";
import { detect } from "detect-browser";

import { categories, footerIcon, selecterObject } from "./footer.data";

import {
    FooterHome,
    FooterContainer,
    UpperPartContainer,
    LowerPartContainer,
    CategoryContainer,
    IconContainer,
    FooterIcon,
    FlexCss
} from "./footer.style";

const Footer = ({isHome = false}) => {
  const { logoYoutube, logoInsta } = footerIcon
  const browser = detect()

  const FooterLogic = ({children}) => (
    !isHome || browser.name === 'safari' ? <FooterContainer>{children}</FooterContainer> : <FooterHome>{children}</FooterHome>
  )

  return (
    <FooterLogic>
      <UpperPartContainer>
        <CategoryContainer>
          {categories.map((el) => <FooterLink key={el.id} props={el}/>)}
        </CategoryContainer>
        <Selecter props={selecterObject}/>
      </UpperPartContainer>
      <LowerPartContainer>
        <FlexCss>
          <Typo type={TypoType.TextFooter}>1025 Rue Saint-Jacques, Montréal, QC, H3C 1G8 &nbsp;|&nbsp; TEL (514)340-4711</Typo>
          <Typo type={TypoType.TextFooter}>Copyright &copy; 2023 Continum Convergence. All Rights Reserved</Typo>
        </FlexCss>
        <IconContainer>
          <FooterIcon  src={logoYoutube}/>
          <FooterIcon  src={logoInsta}/>
        </IconContainer>
      </LowerPartContainer>
    </FooterLogic>
  )
}

export default Footer;