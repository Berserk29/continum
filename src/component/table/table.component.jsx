import { Fragment } from "react"
import { 
    GreyHeadingContainer,
    WhiteCenterContainer,
    WhiteContainer,
    WhiteHeadingContainer,
    ListContainer,
    IconImg,
    WithDot,
    WithoutDot,
} from "./table.style";

export const TableType = {
    greyHeading: 'greyHeading',
    whiteCenter: 'whiteCenter',
    white: 'white',
    whiteHeading: 'whiteHeading',
    listContainer: 'listContainer'
}

const Table = ({content, type = TableType.white, fullBorder = false, icon = false}) => {
    const border = function () {
        if(!fullBorder) return;
        return {border: '1px solid var(--color-grey-light-2)'}
    }

    const isIconArray = function (i) {
        if(Array.isArray(icon)) return icon[i]
        return icon
    }

    const listContent = function() {
        if(!icon) return <ul>{content.map((el,i) => <WithDot key={i}>{el}</WithDot>)}</ul>
        return <ul>{content.map((el,i) => <WithoutDot key={i}><IconImg src={isIconArray(i)}/>{el}</WithoutDot>)}</ul> 
    }

    const containerType = function () {
        if(type === 'greyHeading') return <GreyHeadingContainer style={border()}>{content}</GreyHeadingContainer>;
        if(type === 'whiteHeading') return <WhiteHeadingContainer style={border()}>{content}</WhiteHeadingContainer>
        if(type === 'whiteCenter') return <WhiteCenterContainer style={border()}>{content}</WhiteCenterContainer>
        if(type === 'white') return <WhiteContainer style={border()}>{content}</WhiteContainer>
        if(type === 'listContainer') return <ListContainer style={border()}>{listContent()}</ListContainer>
    }

    return (
        <Fragment>
            { containerType()}
        </Fragment>
    )
}

export default Table;