import { Fragment } from "react"
import { GreyHeadingContainer, WhiteCenterContainer, WhiteContainer, WhiteHeadingContainer } from "./table.style";

export const TableType = {
    greyHeading: 'greyHeading',
    whiteCenter: 'whiteCenter',
    white: 'white',
    whiteHeading: 'whiteHeading',
}

// TODO  Make it work with li on Contact Page!!

const Table = ({content, type = TableType.white, fullBorder = false}) => {
    const border = function () {
        if(!fullBorder) return;
        return {border: '1px solid var(--color-grey-light-2)'}
    }

    const containerType = function () {
        if(type === 'greyHeading') return <GreyHeadingContainer style={border()}>{content}</GreyHeadingContainer>;
        if(type === 'whiteHeading') return <WhiteHeadingContainer style={border()}>{content}</WhiteHeadingContainer>
        if(type === 'whiteCenter') return <WhiteCenterContainer style={border()}>{content}</WhiteCenterContainer>
        if(type === 'white') return <WhiteContainer style={border()}>{content}</WhiteContainer>
    }

    return (
        <Fragment>
            { containerType()}
        </Fragment>
    )
}

export default Table;