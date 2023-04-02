import { Fragment, useState } from "react";

import Header from "../../component/header/header.component";
import Table , {TableType} from "../../component/table/table.component";
import TextHeading from "../../component/textHeading/textHeading.component";

import { headingArray, PageType, PressArray, maxNumberPage, pageMax, pageMin } from "./prPage.data";

import {
    ButtonContainer,
    GridContainer,
    PrContainer,
    CirclePage,
    MaxHeight,
    ArrowIcon,
    ArrowHiddenIcon
} from "./prPage.style";

import arrowLeft from '../../assets/icon/arrow_left.png'
import arrowRight from '../../assets/icon/arrow_right.png'


const PrPage = ({header}) => {
    const [page, setPage] = useState(1)

    const handlerPageUp = function() {
        if(page < maxNumberPage())
        setPage( page + 1)
    }

    const handlerPageDown = function() {
        if(page > 1)
        setPage( page - 1)
    }

    return (
        <div>
            <Header header={header}/>
            <PrContainer>
                <TextHeading title={'Press Release'} />
                <MaxHeight style={{height: `${PageType.numberPage * 85}px`}}>
                    <GridContainer>
                        {headingArray.map((el,i) => <Table content={el} key={i} type={TableType.greyHeading}/>)}

                        { PressArray.slice(pageMin(page),pageMax(page)).map(el => {
                            return (
                                <Fragment key={el.id}>
                                    <Table content={el.id} type={TableType.whiteHeading}/>
                                    <Table content={el.subject} type={TableType.subject}/>
                                    <Table content={el.date} type={TableType.whiteCenter}/>
                                    <Table content={el.writer} type={TableType.whiteCenter}/>
                                </Fragment>
                            )
                        })}
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