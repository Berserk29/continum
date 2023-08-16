import { Fragment } from "react"

import { 
    Container,
    GreyHeadingContainer,
    ListContainer,
    WithoutDot,
    SubClassContainer,
    SubContainer,
} from "./table.style";

import Typo, { TypoType } from "../typo/typo.component";

export const TableType = {
    greyHeading: 'greyHeading',
    listContainer: 'listContainer',
    subClass: 'subClass',
    text: 'text'
}

const Table = ({children, type , heading, justify, bg, textColor, columns}) => {

  const subClass = () => {
    return (
      <SubClassContainer> 
        { heading.map((el,i) => (
            <SubContainer key={i}>
              <Typo type={TypoType.HeadlineTable}>{el}</Typo >
              <ul>
                {children[i].map((el,i) => el !== 'Tel.' && el !== 'Mail.' && <WithoutDot key={i}><Typo type={TypoType.TextTable}>{el}</Typo></WithoutDot>)}
              </ul> 
            </SubContainer>
        ))}
      </SubClassContainer>
    ) 
  }

  const containerType = () => {
      if(type === 'greyHeading') return <GreyHeadingContainer><Typo type={TypoType.HeadlineTable}>{children}</Typo></GreyHeadingContainer>;
      if(type === 'text') return <Container justify={justify} bg={bg}><Typo type={TypoType.TextTable} textColor={textColor}>{typeof children !== "object" ? children : children.join(' / ')}</Typo></Container>
      if(type === 'subClass') return <Container >{subClass()}</Container>
      if(type === 'listContainer') return <ListContainer justify={justify} columns={columns}>{children.map((el,i) => <Typo key={i} textColor={textColor}type={TypoType.TextTable}>{el}</Typo>)}</ListContainer>
  }

  return (
      <Fragment>
          { containerType() }
      </Fragment>
  )
}

export default Table;