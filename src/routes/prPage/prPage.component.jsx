import { Fragment, useState } from "react";

import Header from "../../component/header/header.component";
import Table , {TableType} from "../../component/table/table.component";
import TextHeading from "../../component/textHeading/textHeading.component";

import { ButtonContainer, GridContainer, PrContainer, CirclePage, MaxHeight, ArrowIcon, ArrowHiddenIcon } from "./prPage.style";

import arrowLeft from '../../assets/icon/arrow_left.png'
import arrowRight from '../../assets/icon/arrow_right.png'

const headingArray = ['No', 'Subject', 'Date', 'Writer'];

export const PageType = {
    numberPage: 6
}

const PressArray = [
    {
        id: 1,
        subject: 'Create a business environment that prioritizes safety',
        date: '2023-01-03',
        writer: 'Continum', 
    },
    {
        id: 2,
        subject: 'Efficient use of resources and energy',
        date: '2022-12-21',
        writer: 'Continum', 
    },
    {
        id: 3,
        subject: 'Monday, group of experts with 1gw O&M placed in Mtl ',
        date: '2022-12-19',
        writer: 'Stephane', 
    },
    {
        id: 4,
        subject: 'Establish relevant standards and internal regulations',
        date: '2022-12-10',
        writer: 'Continum', 
    },
    {
        id: 5,
        subject: 'New Hires',
        date: '2022-12-08',
        writer: 'Healim Cho', 
    },
    {
        id: 6,
        subject: 'Identify environmental requirement',
        date: '2022-12-03',
        writer: 'Olivier', 
    },
    {
        id: 7,
        subject: 'Create a business environment that prioritizes safety',
        date: '2022-12-01',
        writer: 'Continum', 
    },
    {
        id: 8,
        subject: 'Mergers and acquisitions',
        date: '2022-11-19',
        writer: 'John', 
    },
    {
        id: 9,
        subject: 'Product updates',
        date: '2022-11-15',
        writer: 'Olivier', 
    },
    {
        id: 10,
        subject: 'Campaingn Launches',
        date: '2022-11-10',
        writer: 'Continum', 
    },
    {
        id: 11,
        subject: 'Create a business environment that prioritizes safety',
        date: '2022-10-28',
        writer: 'Healim Cho', 
    },
    {
        id: 12,
        subject: 'New Partnerships to announce!',
        date: '2022-10-12',
        writer: 'Samuel', 
    },
    {
        id: 13,
        subject: 'Establish relevant standards and internal regulations',
        date: '2022-10-03',
        writer: 'Healim Cho', 
    },
    {
        id: 14,
        subject: 'Awards and recognitions',
        date: '2022-09-26',
        writer: 'Mickael', 
    },
]

const maxNumberPage = function () {
    return Math.ceil(PressArray.length / PageType.numberPage)
}

const pageMin = (page) => (page - 1) * PageType.numberPage;
const pageMax = (page) => page * PageType.numberPage;

// Start
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