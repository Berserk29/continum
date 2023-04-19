import { Fragment, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import Header from "../../component/header/header.component";
import Table , {TableType} from "../../component/table/table.component";
import TextHeading from "../../component/textHeading/textHeading.component";

import { headingArray, headingMobile, PressArray} from "./prPage.data";

import {
    ButtonContainer,
    GridContainer,
    PrContainer,
    CirclePage,
    MaxHeight,
    ArrowIcon,
    ArrowHiddenIcon,
} from "./prPage.style";

import arrowLeft from '../../assets/icon/arrow_left.png';
import arrowRight from '../../assets/icon/arrow_right.png';

const PrPage = ({header}) => {
  const [page, setPage] = useState(1);
  const isMobile = useMediaQuery(mediaQuery.useMobile);

  useEffect(() => {
    if(!isMobile) setPage(1)
  }, [isMobile]);

  const heightPage = isMobile ? 160 : 75 ;
  const PageType = { numberPage: isMobile ? 3 : 6 } ;

  const maxNumberPage = () => Math.ceil(PressArray.length / PageType.numberPage);
  const pageMin = (page) => (page - 1) * PageType.numberPage;
  const pageMax = (page) => page * PageType.numberPage;
  const handlerPageUp = () => { if(page < maxNumberPage()) setPage( page + 1) };
  const handlerPageDown = () => { if(page > 1) setPage( page - 1) };
  const smallerDate = (el) => el.slice(2);
  const tableMap = (el,i) => <Table content={el} key={i} type={TableType.greyHeading}/>;

  const contentMap = (el) => {
    if(isMobile) {
      return (
        <Fragment key={el.id}>
            <Table content={el.id} type={TableType.whiteHeading}/>
            <Table content={el.subject} type={TableType.subject}/>
            <Table heading={['Writer','Date']} content={[[el.writer], [smallerDate(el.date)]]} fullBorder={false} type={TableType.subClass}/> 
        </Fragment>
      )
    }
    return (
      <Fragment key={el.id}>
          <Table content={el.id} type={TableType.whiteHeading}/>
          <Table content={el.subject} type={TableType.subject}/>
          <Table content={el.date} type={TableType.whiteCenter}/>
          <Table content={el.writer} type={TableType.whiteCenter}/>
      </Fragment>
    )
  };

    return (
        <div>
            <Header header={header}/>
            <PrContainer>
                <TextHeading title={'Press Release'} textCenter={isMobile ? false : true} />
                <MaxHeight style={{height: `${PageType.numberPage * heightPage}px`}}>
                    <GridContainer>
                        {isMobile ? headingMobile.map((el,i) => tableMap(el,i)) : headingArray.map((el,i) => tableMap(el,i))}
                        { PressArray.slice(pageMin(page),pageMax(page)).map(el => contentMap(el))}
                    </GridContainer>
                </MaxHeight>
                <ButtonContainer>
                    { page <= 1 ? <ArrowHiddenIcon src={arrowLeft}/> : <ArrowIcon src={arrowLeft} onClick={handlerPageDown} /> }
                    <CirclePage>{page}</CirclePage>
                    { page === maxNumberPage() ? <ArrowHiddenIcon src={arrowRight}/> : <ArrowIcon src={arrowRight} onClick={handlerPageUp} />}                    
                </ButtonContainer>
            </PrContainer>
        </div>
    );
}

export default PrPage;