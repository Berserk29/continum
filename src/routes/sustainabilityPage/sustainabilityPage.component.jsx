import { Fragment } from "react";

import { ethicalArray, reportArray, reportTypeArray  } from "./sustainabilityPage.data";

import Header from "../../component/header/header.component";
import TextHeading from "../../component/textHeading/textHeading.component";
import InfoCard from "../../component/infoCard/infoCard.component";
import Table, { TableType } from "../../component/table/table.component";

import { 
    EthicalContainer,
    Container,
    HowToReportContainer,
    SubstainContainer,
    TextCss,
    BulletLi,
    FlexCenter,
    BulletContainer,
    TableContainer,
} from "./sustainabilityPage.style";

const SustainabilityPage = ({header}) => {
    
    return (
        <Fragment>
            <Header header={header}/>
            <SubstainContainer>
                <div>
                 <TextHeading title={'Ethical management'}/>
                 <TextCss>Continum put ethical management based on integrity in all management activities as his top priority and seeks to ensure that all employees perform their duties transparently, fairly and rationally</TextCss>
                </div>
                <FlexCenter>
                <EthicalContainer>
                    {ethicalArray.map(el => <InfoCard key={el.id} props={el} border={true}/>)}
                </EthicalContainer>
                </FlexCenter>
            </SubstainContainer>
            <FlexCenter>
            <Container>
                <TextHeading title={'Report type'} textCenter={ false }/>
                <TableContainer>
                    { reportTypeArray.map(el => (
                        <Fragment key={el.id}>
                            <Table content={el.heading} type={TableType.greyHeading}/>
                            <Table content={el.text}/>
                        </Fragment>
                    ))}
                </TableContainer>
            </Container>
            </FlexCenter>
            <FlexCenter>
            <Container>
                <TextHeading title={'Operation of reporting'} textCenter={ false }/>
                <BulletContainer>
                    <BulletLi>Priority is given to prompt and accurate handling of reports in violation of compliance management. The processing result will be notified by phone or e-mail as soon as possible.</BulletLi>
                    <BulletLi>The informant's identity, reported matters, and confidentiality of the informant are thoroughly protected, and reporting is made in principle by real name.</BulletLi>
                </BulletContainer>
            </Container>
            </FlexCenter>
            <FlexCenter>
            <Container>
                <TextHeading title={'How to report'} textCenter={ false}/>
                <HowToReportContainer>
                    {reportArray.map(el => <InfoCard key={el.id} props={el} border={true} colorWhite={true}/>)}
                </HowToReportContainer>
            </Container>
            </FlexCenter>
        </Fragment>
    )
}

export default SustainabilityPage;