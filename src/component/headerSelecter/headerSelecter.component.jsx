import Selecter from "../selecter/selecter.component";
import Typo, { TypoType } from "../typo/typo.component";
import Circle from "../circle/circle.component";
import houseIcon from '../../assets/icon/icon_home_w.png'

import { Container, IconCss } from "./headerSelecter.style";

const HeaderSelecter = ({props}) => {
    const { heading } = props;

    return (
        <Container>
            <IconCss src={houseIcon} alt="icon" />
            <Circle activate={true} color='var(--color-050)' activeColor="var(--color-050)"/>
            <Typo type={TypoType.Text5}>{heading}</Typo>
            <Circle activate={true} color='var(--color-050)' activeColor="var(--color-050)"/>
            <Selecter props={props}/>
        </Container>
    )
}

export default HeaderSelecter;