import Selecter from "../selecter/selecter.component";
import Typo, { TypoType } from "../typo/typo.component";
import houseIcon from '../../assets/icon/icon_home_w.png'

import { Container } from "./headerSelecter.style";

const HeaderSelecter = ({props}) => {
    const {heading} = props;
    return (
        <Container>
            <img src={houseIcon} alt="icon" />
            <Typo type={TypoType.Text5}>{heading}</Typo>
            <Selecter props={props}/>
        </Container>
    )
}

export default HeaderSelecter;