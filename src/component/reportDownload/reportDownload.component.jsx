import Typo, { TypoType } from "../typo/typo.component";
import icon from '../../assets/icon/Icon_download.png'

import { Container, IconCss } from "./reportDownload.style";

const ReportDownload = ({props, isTop}) => {
    const {text} = props
    
    return (
        <Container isTop={isTop}>
            <Typo type={TypoType.Text6}>{text}</Typo>
            <IconCss src={icon} alt="icon-download" />
        </Container>
    )
}

export default ReportDownload;