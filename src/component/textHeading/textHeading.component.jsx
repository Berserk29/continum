import { Fragment } from "react";
import { TextHeadingCss, TextHeadingStart } from "./textHeading.style";

const TextHeading = ({title , textCenter = true}) => {

    return(
        <Fragment>
            {
                textCenter ?
                <TextHeadingCss>{title}</TextHeadingCss>
                :
                <TextHeadingStart>{title}</TextHeadingStart>
            } 
        </Fragment>
    )
}

export default TextHeading;