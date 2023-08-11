import { Fragment, useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import Table , {TableType} from "../../component/table/table.component";
import Typo, { TypoType } from "../../component/typo/typo.component";
import Boilerplate from "../../component/boilerplate/boilerplate.component";

import { headingArray, headingMobile, mediaArr, mediaIconArr} from "./mediaPage.data";

import {
    ButtonContainer,
    GridContainer,
    PrContainer,
    CirclePage,
    MaxHeight,
    ArrowIcon,
    PlusIcon,
    FlexCenter,
    NumberPage,
} from "./mediaPage.style";

const MediaPage = ({props}) => {
  const [page, setPage] = useState(1);
  const [numPageArr, setNumPageArr] = useState([]);
  const [maxHeight , setMaxHeight] = useState(1015)
  const {arrowLeft, arrowRight, plusIcon} = mediaIconArr;
  const isTablet = useMediaQuery(mediaQuery.useTablet);
  const isMobile = useMediaQuery(mediaQuery.useMobile);
  const containerRef = useRef();

  useEffect(() => {
    setPage(1)
  }, [isTablet, isMobile]);

  useEffect(() => {
    const height = containerRef?.current?.offsetHeight
    setMaxHeight(height)
  },[])

  const PageType = { numberPage: isMobile ? 5 : 10 } ;

  const maxNumberPage =  Math.ceil(mediaArr.length / PageType.numberPage);
  const pageMin = (page) => (page - 1) * PageType.numberPage;
  const pageMax = (page) => page * PageType.numberPage;
  const handlerPageUp = () => { if(page < maxNumberPage) setPage( page + 1) };
  const handlerPageDown = () => { if(page > 1) setPage( page - 1) };
  const smallerDate = (el) => el.slice(2);

  // INFO Create an array having the number of page --> exemple [1,2,3]
  useEffect(() => {
    const numPage = []
    for (let i = 1; i <= maxNumberPage; i ++) {
      numPage.push(i)
    }
    setNumPageArr(numPage)
  }, [maxNumberPage])

  const tableMap = (el,i) => <Table key={i} type={TableType.greyHeading}>{el}</Table>;
  
  const contentMap = (el) => {
    return (
      <Fragment key={el.id}>
          <Table type={TableType.text} justify='center' textColor='var(--color-black-opa60)'>{el.id}</Table>
          <Table type={TableType.text} >{el.subject}</Table>
          <Table type={TableType.text} textColor='var(--color-black-opa60)'>{ isMobile ? smallerDate(el.date) : el.date}</Table>
          { !isMobile && <Table type={TableType.text}>{el.writer}</Table>}
      </Fragment>
    )
  };

    return (
      <Boilerplate props={props}>
            <PrContainer>
                <MaxHeight height={maxHeight}>
                  <FlexCenter>
                    <GridContainer ref={containerRef}>
                        {/* HEADING */}
                        { isMobile ? headingMobile.map((el,i) => tableMap(el,i)) : headingArray.map((el,i) => tableMap(el,i))}
                        {/* CONTENT */}
                        {mediaArr.slice( isTablet ? PageType : pageMin(page) , pageMax(page)).map(el => contentMap(el))}
                    </GridContainer>
                  </FlexCenter>
                </MaxHeight>
                {/* PAGE BUTTON OR LOAD BUTTON */}
                <ButtonContainer gap={isMobile ? 4 : isTablet && 6}>
                  { !isTablet &&
                    <Fragment>
                      <ArrowIcon src={arrowLeft} onClick={handlerPageDown} marginright={1}/>
                      {numPageArr.map((el) => page === el ? <CirclePage key={el}>{el}</CirclePage> : <NumberPage key={el}>{el}</NumberPage>)}
                      <ArrowIcon src={arrowRight} onClick={handlerPageUp} marginleft={1}/>                    
                    </Fragment>
                  }    
                  { isTablet && page !== maxNumberPage &&
                    <Fragment>
                      <Typo type={TypoType.Span}>Load more</Typo>
                      <CirclePage onClick={handlerPageUp} size={3.2} cursor={'pointer'}><PlusIcon src={plusIcon}/></CirclePage>
                    </Fragment>
                  } 
                </ButtonContainer>
            </PrContainer>
      </Boilerplate>
    );
}

export default MediaPage;