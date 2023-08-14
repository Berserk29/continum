import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import mediaQuery from "../../helper/mediaQuery"

import { Container, UpperSection, IconCss, DropSection, LowerSection, DropContainer } from "./selecter.style"

import Typo, {TypoType} from "../../component/typo/typo.component"

import plusIcon from '../../assets/icon/Icon_plus.png'
import minusIcon from '../../assets/icon/minus.png'
import arrowDown from '../../assets/icon/Icon_dropdown.png'

const Selecter = ({props}) => {
    const {linkName, typoType = 'Text5', placeHolder , isFooter, width , textColor = 'var(--color-secondary)'} = props;
    const [selecterChoice, setSelecterChoice] = useState(placeHolder);
    const [dropMenuOpen, setDropMenuOpen] = useState(false);
    const [clickOne, setClickOne] = useState(false)
    const isTablet = useMediaQuery(mediaQuery.useTablet)


    // INFO TAKE THE SELECTERCHOICE IF IT'S IN THE ARRAY AND PUT IT AT THE BEGGINING
    const modifiedArr = linkName.filter(el => [selecterChoice].includes(el)).concat(linkName.filter(el => ![selecterChoice].includes(el))) 

    const clickHandler = (el) => {
        setSelecterChoice(el); 
        setDropMenuOpen(false);
    }
    
    const dropHandler = () => {
        if(!dropMenuOpen) {
            setClickOne(true)
            setDropMenuOpen(true)
        } 
        else setDropMenuOpen(false)
    };

    return (
        <Container width={width}>
            <UpperSection onClick={dropHandler}>
                <Typo type={TypoType[typoType]}>{selecterChoice}</Typo>
                <IconCss src={!isFooter ? arrowDown : dropMenuOpen ? minusIcon : plusIcon} alt="drop-section-icon" />
            </UpperSection>
            <LowerSection isFooter={isFooter}>
                <DropSection isOpen={dropMenuOpen} clickOne={clickOne} isFooter={isFooter}>
                    {modifiedArr?.map((el,i) => {
                        return (
                            <DropContainer 
                                key={i} 
                                onClick={() => clickHandler(el)}
                                isFirst={i === 0}
                                color={!isFooter ? 'var(--color-secondary)' : !isTablet ? 'var(--color-050)' : 'var(--color-white-opa60)' }
                            >
                                <Typo type={TypoType.HeadlineFooter} headingColor={textColor}>{el}</Typo>
                            </DropContainer>
                        )
                    })}
                </DropSection>
            </LowerSection>
        </Container>
    )
}

export default Selecter;