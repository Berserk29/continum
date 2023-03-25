import React from "react";
import { TitleInfo } from "./infoHeading.style";

const InfoHeading = ({title, className = ''}, ref,) => {
    return (
        <TitleInfo ref={ref} className={className}>{title}</TitleInfo>
    )
}

// If it's a component --> we need to bring the props ref and forwardRef()
const forwardedInfoHeading = React.forwardRef(InfoHeading)

export default forwardedInfoHeading;