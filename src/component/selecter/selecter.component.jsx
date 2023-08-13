import { useState } from "react"

import { Container, UpperSection, IconCss, DropSection, LowerSection, DropContainer } from "./selecter.style"

import Typo, {TypoType} from "../../component/typo/typo.component"
import plusIcon from '../../assets/icon/Icon_plus.png'
import arrowDown from '../../assets/icon/Icon_dropdown.png'

const Selecter = ({props}) => {
    const {linkName, typoType = 'Text5', placeHolder , isFooter, width , textColor = 'var(--color-secondary)'} = props;
    const [selecterChoice, setSelecterChoice] = useState(placeHolder);
    const [dropMenuOpen, setDropMenuOpen] = useState(false);
    const [clickOne, setClickOne] = useState(false)


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
                <IconCss src={isFooter ? plusIcon : arrowDown} alt="drop-section-icon" />
            </UpperSection>
            <LowerSection>
                <DropSection isOpen={dropMenuOpen} clickOne={clickOne} isFooter={isFooter}>
                    {modifiedArr?.map((el,i) => {
                        return (
                            <DropContainer onClick={() => clickHandler(el)} key={i} isFirst={i === 0} color={isFooter ? 'var(--color-050)' : 'var(--color-secondary)'}>
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