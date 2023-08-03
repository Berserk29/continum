import { Fragment } from "react";

import {upperCardArr, lowerCardArr} from "./esgPage.data";

import Header from "../../component/header/header.component";
import SectionHeading from "../../component/sectionHeading/sectionHeading.component";
import InfoCard from "../../component/infoCard/infoCard.component";

import { headingEsg01, headingEsg02, headingEsg03, headingEsg04 } from "../../component/sectionHeading/sectionHeading.data";

import { 
    EsgContainer,
    Section,
    UpperCardContainer,
    FlexCenter,
    TableContainer,
    LowerCardContainer
} from "./esgPage.style";

const EsgPage = ({header}) => {
    
    return (
        <Fragment>
            <Header header={header}/>
            <EsgContainer>

                <Section>
                    <SectionHeading props={headingEsg01}/>
                    <FlexCenter>
                        <UpperCardContainer>
                            {upperCardArr.map((el) => <InfoCard key={el.id} props={el}/>)}  
                        </UpperCardContainer>
                    </FlexCenter>
                </Section>

                <Section>
                    <SectionHeading props={headingEsg02}/>
                    <TableContainer>
                        {/* TODO BRING THE TABLE */}
                    </TableContainer>
                </Section>

                <Section>
                    <SectionHeading props={headingEsg03}/>
                    <FlexCenter>
                        <LowerCardContainer>
                            {lowerCardArr.map((el) => <InfoCard key={el.id} props={el}/>)}
                            {/* {upperCardArr.map((el) => <InfoCard key={el.id} props={el}/>)}   */}
                        </LowerCardContainer>
                    </FlexCenter>
                </Section>

                <SectionHeading props={headingEsg04}/>
                <div>
                    {/* TODO BRING THE DOWNLOAD SECTION */}
                </div>

            </EsgContainer>
        </Fragment>
    )
}

export default EsgPage;