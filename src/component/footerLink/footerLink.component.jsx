import { FooterLinkCss, LinksContainer } from "./footerLink.style";
import { useNavigate } from "react-router-dom";

const FooterLink = ({linkName, path}) => {
    const navigate = useNavigate()
 
    const pathHandler = () => navigate(path)

    return (
        <LinksContainer>
            <FooterLinkCss onClick={pathHandler}>{linkName}</FooterLinkCss>
        </LinksContainer>
    )
}

export default FooterLink;