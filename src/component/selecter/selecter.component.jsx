import { useState } from "react"

import { Container, UpperSection, IconCss, DropSection, LowerSection } from "./selecter.style"

import Typo, {TypoType} from "../../component/typo/typo.component"
import plusIcon from '../../assets/icon/Icon_plus.png'
import arrowDown from '../../assets/icon/Icon_dropdown.png'

const Selecter = ({props}) => {
    const {linkName, typoType = 'Text5', placeHolder , isFooter, width , textColor = 'var(--color-secondary)'} = props;
    const [selecterChoice, setSelecterChoice] = useState(placeHolder);
    const [dropMenuOpen, setDropMenuOpen] = useState(false);
    const [clickOne, setClickOne] = useState(false)

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
                    {linkName?.map((el,i) => {
                        return (
                            selecterChoice !== el && 
                            <div onClick={() => clickHandler(el)} key={i}>
                                <Typo type={TypoType.FooterHeading} textColor={textColor}>{el}</Typo>
                            </div>
                        )
                    })}
                </DropSection>
            </LowerSection>
        </Container>
    )
}

export default Selecter;