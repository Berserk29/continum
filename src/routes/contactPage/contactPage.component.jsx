import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import Table, { TableType } from "../../component/table/table.component";
import Typo, {TypoType} from "../../component/typo/typo.component";
import Boilerplate from "../../component/boilerplate/boilerplate.component";

import { ContactContainer, FlexCenter, TableContainer, TypoContainer } from "./contactPage.style";
import { headingArray, headingArrayTablet, contactArray } from "./contactPage.data";

const ContactPage = ({props}) => {
    const isTablet = useMediaQuery(mediaQuery.useTablet);

    const tableMap = (el, i) => <Table key={i} type={TableType.greyHeading}>{el}</Table> ;

    const contentMap = (el) => {
        return (
            <Fragment key={el.id}>
                <Table type={TableType.text} bg={'var(--color-200)'}>{el.areas}</Table>
                { !isTablet ?
                    <Fragment>
                        <Table type={TableType.text} >{el.details}</Table>
                        <Table type={TableType.text} >{el.manager}</Table>
                        <Table type={TableType.listContainer}>{el.contact}</Table>
                    </Fragment> 
                    :
                    <Table heading={['Businesses','Manager', 'Contact']} type={TableType.subClass}>{[el.details, [el.manager], el.contact]}</Table>
                }
            </Fragment>
        )
    };

    return (
        <Boilerplate props={props}>
            <ContactContainer>
                <TypoContainer><Typo type={TypoType.Headline7} headingColor={'var(--color-secondary)'}>Contact Us</Typo></TypoContainer>
                <FlexCenter>
                    <TableContainer>
                        { isTablet ? headingArrayTablet.map((el,i) => tableMap(el,i) ) : headingArray.map((el,i) => tableMap(el, i))}
                        { contactArray.map(el => contentMap(el)) }
                    </TableContainer>
                </FlexCenter>
            </ContactContainer>
        </Boilerplate>
    );
}

export default ContactPage;