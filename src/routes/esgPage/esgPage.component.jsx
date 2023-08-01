import { Fragment } from "react";

// import { ethicalArray, reportArray, reportTypeArray  } from "./esgPage.data";

import Header from "../../component/header/header.component";
import SectionHeading from "../../component/sectionHeading/sectionHeading.component";

import { headingEsg01 } from "../../component/sectionHeading/sectionHeading.data";

import { 
    EsgContainer,
    FlexCenter,
    TableContainer,
} from "./esgPage.style";

const EsgPage = ({header}) => {
    
    return (
        <Fragment>
            <Header header={header}/>
            <EsgContainer>
                <SectionHeading props={headingEsg01}/>
            </EsgContainer>
        </Fragment>
    )
}

export default EsgPage;