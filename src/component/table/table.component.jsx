import { Fragment } from "react"
import { 
    GreyHeadingContainer,
    WhiteCenterContainer,
    WhiteContainer,
    WhiteHeadingContainer,
    ListContainer,
    SubjectContainer,
    IconImg,
    WithDot,
    WithoutDot,
    SubClassContainer,
    SubContainer,
    SubClassHeading,
    SubClassLi,
} from "./table.style";

export const TableType = {
    greyHeading: 'greyHeading',
    whiteCenter: 'whiteCenter',
    white: 'white',
    whiteHeading: 'whiteHeading',
    listContainer: 'listContainer',
    subject: 'subject',
    subClass: 'subClass',
}

const Table = ({content, type = TableType.white, fullBorder = false, icon = false, heading}) => {
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

    const subClass = function() {
      return <SubClassContainer> 
        { heading.map((el,i) => {
          return (
            <SubContainer key={i}>
              <SubClassHeading>{el}</SubClassHeading>
              <ul>{content[i].map((el,i) => <SubClassLi key={i}>{el}</SubClassLi>)}</ul> 
            </SubContainer>
          )
        })}
      </SubClassContainer>
    }

    const containerType = function () {
        if(type === 'greyHeading') return <GreyHeadingContainer style={border()}>{content}</GreyHeadingContainer>;
        if(type === 'whiteHeading') return <WhiteHeadingContainer style={border()}>{content}</WhiteHeadingContainer>
        if(type === 'whiteCenter') return <WhiteCenterContainer style={border()}>{content}</WhiteCenterContainer>
        if(type === 'white') return <WhiteContainer style={border()}>{content}</WhiteContainer>
        if(type === 'listContainer') return <ListContainer style={border()}>{listContent()}</ListContainer>
        if(type === 'subject') return <SubjectContainer style={border()}>{content}</SubjectContainer>
        if(type === 'subClass') return <ListContainer style={border()}>{subClass()}</ListContainer>
    }

    return (
        <Fragment>
            { containerType()}
        </Fragment>
    )
}

export default Table;