import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import SectionHeading from "../../component/sectionHeading/sectionHeading.component";
import InfoCard from "../../component/infoCard/infoCard.component";
import Table, { TableType } from "../../component/table/table.component";
import ReportDownload from "../../component/reportDownload/reportDownload.component";
import Boilerplate from "../../component/boilerplate/boilerplate.component";

import {upperCardArr, lowerCardArr, headingArr, headingMobileArr ,esgTableArr, reportArr} from "./esgPage.data";
import { headingEsg01, headingEsg02, headingEsg03, headingEsg04 } from "../../component/sectionHeading/sectionHeading.data";

import { 
    EsgContainer,
    Section,
    UpperCardContainer,
    FlexCenter,
    TableContainer,
    LowerCardContainer,
    ReportGrid
} from "./esgPage.style";

const EsgPage = ({props}) => {
    const isMobile = useMediaQuery(mediaQuery.useMobile)

    const isTopNum = isMobile ? 1 : 2;
    const headingTable = (el,i) => <Table key={i} type={TableType.greyHeading}>{el}</Table>

    const content = (el) => {
        return (
            <Fragment key={el.id}>
                { !isMobile && <Table type={TableType.text}>{el.date}</Table>}
                <Table type={TableType.text}>{el.agenda}</Table>
                { !isMobile && <Table type={TableType.text} justify='center'>{el.rate}</Table>}
                { isMobile && <Table type={TableType.listContainer} justify='flex-end' columns={1} textColor='var(--color-black-opa60)'>{[el.date, el.rate]}</Table> }
            </Fragment>
        )
    }

    return (
        <Boilerplate props={props}>
            <EsgContainer>
                {/* SECTION 1 CARD*/}
                <Section>
                    <SectionHeading props={headingEsg01}/>
                    <FlexCenter>
                        <UpperCardContainer>
                            { upperCardArr.map((el) => <InfoCard key={el.id} props={el}/>) }
                        </UpperCardContainer>
                    </FlexCenter>
                </Section>
                {/* SECTION 2 TABLE */}
                <Section>
                    <SectionHeading props={headingEsg02}/>
                    <FlexCenter>
                        <TableContainer>
                            { !isMobile ? headingArr.map((el,i) => headingTable(el,i)) : headingMobileArr.map((el,i) => headingTable(el,i)) }
                            { esgTableArr.map(el => content(el)) }  
                        </TableContainer>
                    </FlexCenter>
                </Section>
                {/* SECTION 3 CARD*/}
                <Section>
                    <SectionHeading props={headingEsg03}/>
                    <FlexCenter>
                        <LowerCardContainer>
                            { lowerCardArr.map((el) => <InfoCard key={el.id} props={el}/>) }
                        </LowerCardContainer>
                    </FlexCenter>
                </Section>
                {/* SECTION 4 */}
                <SectionHeading props={headingEsg04}/>
                <FlexCenter>
                    <ReportGrid>
                        {reportArr.map((el) => <ReportDownload key={el.id} isTop={el.id <= isTopNum ? true : false} props={el}/> )}
                    </ReportGrid>
                </FlexCenter>
            </EsgContainer>
        </Boilerplate>
    )
}

export default EsgPage;