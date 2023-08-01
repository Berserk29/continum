import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";
import { useNavigate } from "react-router-dom";

import { Heading, Link, FooterContainer } from "./footerLink.style";

const FooterLink = ({category}) => {
const isMobile = useMediaQuery(mediaQuery.useMobile);
const navigate = useNavigate()
const navigateHandler = () => navigate(category.path);


    return (
        <FooterContainer>
            { isMobile ?
                <Heading onClick={navigateHandler}>{category.title}</Heading>
                    : 
                <Heading>{category.title}</Heading>
            }
            { isMobile ? '' 
                : category.linkName.map((el,i) =>
                    <Link onClick={navigateHandler} key={i}>{el}</Link>
            )}
        </FooterContainer>
    )
}

export default FooterLink;