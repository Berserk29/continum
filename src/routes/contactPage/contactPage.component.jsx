import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import Header from "../../component/header/header.component";
import Table, { TableType } from "../../component/table/table.component";
import Typo, {TypoType} from "../../component/typo/typo.component";

import { ContactContainer, TableContainer, TypoContainer } from "./contactPage.style";
import { headingArray, headingArrayTablet, contactArray } from "./contactPage.data";

const ContactPage = ({header}) => {
    const isTablet = useMediaQuery(mediaQuery.useTablet);

    const tableMap = (el, i) => <Table content={el} key={i} type={TableType.greyHeading} fullBorder={true}/> ;

    const contentMap = (el) => {
        if(isTablet) {
            return (
            <Fragment key={el.id}>
                <Table content={el.areas} fullBorder={true} type={TableType.greyHeading}/>
                <Table heading={['Businesses','Manager', 'Contact']} content={[el.details, [el.manager], el.contact]} fullBorder={false} type={TableType.subClass}/> 
            </Fragment>
            )
        }
        return (
        <Fragment key={el.id}>
            <Table content={el.areas} fullBorder={true} type={TableType.whiteHeading}/>
            <Table content={el.details} fullBorder={true} type={TableType.listContainer}/>
            <Table content={el.manager} fullBorder={true} type={TableType.whiteCenter}/>
            <Table content={el.contact} fullBorder={true} type={TableType.listContainer} icon={el.imageUrl}/>
        </Fragment>
        )
    };

    return (
        <div>
            <Header header={header}/>
            <ContactContainer>
                <TypoContainer><Typo type={TypoType.Title3_B}>Contact Us</Typo></TypoContainer>
                <TableContainer>
                    {isTablet ? headingArrayTablet.map((el,i) => tableMap(el,i) ) : headingArray.map((el,i) => tableMap(el, i))}
                    { contactArray.map(el => contentMap(el)) }
                </TableContainer>
            </ContactContainer>
        </div>
    );
}

export default ContactPage;