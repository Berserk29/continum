import { Fragment } from "react";
import { Heading } from "./footerLinkContainer.style";

import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";
import { useNavigate } from "react-router-dom";

import FooterLink from "../footerLink/footerLink.component";

const FooterLinkContainer = ({category}) => {
const isTablet = useMediaQuery(mediaQuery.useTablet);

const navigate = useNavigate()
const navigateHandler = () => navigate(category.path);

    return (
        <Fragment>
            { isTablet ? <Heading onClick={navigateHandler}>{category.title}</Heading> : <Heading>{category.title}</Heading>}
            { isTablet ? '' : category.linkName.map((el,i) => <FooterLink linkName={el} path={category.path} key={i}/>) }
        </Fragment>
    )
}

export default FooterLinkContainer;