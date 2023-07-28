import { Fragment } from "react";

// import { ethicalArray, reportArray, reportTypeArray  } from "./esgPage.data";

import Header from "../../component/header/header.component";
import TextHeading from "../../component/textHeading/textHeading.component";

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
} from "./esgPage.style";

const EsgPage = ({header}) => {
    
    return (
        <Fragment>
            <Header header={header}/>
            <SubstainContainer>
                <div>
                 <TextHeading title={'Ethical management'}/>
                 <TextCss>Continum put ethical management based on integrity in all management activities as his top priority and seeks to ensure that all employees perform their duties transparently, fairly and rationally</TextCss>
                </div>
            </SubstainContainer>
            <FlexCenter>
            <Container>
                <TextHeading title={'Report type'} textCenter={ false }/>
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
                <TextHeading title={'How to report'} textCenter={ false }/>
            </Container>
            </FlexCenter>
        </Fragment>
    )
}

export default EsgPage;