import { Fragment } from "react";
import { Heading } from "./footerLinkContainer.style";

import FooterLink from "../footerLink/footerLink.component";

const FooterLinkContainer = ({category}) => {

    return (
        <Fragment>
            <Heading>{category.title}</Heading>
            {category.linkName.map((el,i) => <FooterLink linkName={el} path={category.path} key={i}/>)}
        </Fragment>
    )
}

export default FooterLinkContainer;