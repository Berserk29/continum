import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";
import { useNavigate } from "react-router-dom";

import { Heading, Link, FooterContainer } from "./footerLink.style";

const FooterLink = ({category}) => {
const isTablet = useMediaQuery(mediaQuery.useTablet);
const navigate = useNavigate()
const navigateHandler = () => navigate(category.path);


    return (
        <FooterContainer>
            { isTablet ?
                <Heading onClick={navigateHandler}>{category.title}</Heading>
                    : 
                <Heading>{category.title}</Heading>
            }
            { isTablet ? '' 
                : category.linkName.map((el,i) =>
                    <Link onClick={navigateHandler} key={i}>{el}</Link>
            )}
        </FooterContainer>
    )
}

export default FooterLink;