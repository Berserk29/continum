import { MarkerContainer, TextContainer } from "./market.style";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import Circle from '../circle/circle.component'
import Typo, { TypoType } from "../typo/typo.component";

const Marker = ({props}) => {
    const { textArr, color} = props;
    const isTablet = useMediaQuery(mediaQuery.useTablet)
    
    const Logic = ({props}) => (
            !props ? <Circle color={color} activate={false}/>
            : <TextContainer><Circle activate={true}/> <Typo type={TypoType.Text3} textColor='var(--color-primary)'>{props}</Typo> </TextContainer>
    )

    return (
        <>
        { !isTablet && 
            <MarkerContainer>
                {textArr.map((el,i) => <Logic key={i} props={el} /> )}
            </MarkerContainer>
        }
        </>
    )
}

export default Marker;