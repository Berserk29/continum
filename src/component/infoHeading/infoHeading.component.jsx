import React from "react";
import { TitleInfo } from "./infoHeading.style";

const InfoHeading = ({title, animate, variants}) => {
    return (
        <TitleInfo
            animate={animate}
            initial='hidden'
            variants={variants}
        >{title}
        </TitleInfo>
    )
}

export default InfoHeading;