import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import Header from "../../component/header/header.component";
import Table, { TableType } from "../../component/table/table.component";
import TextHeading from "../../component/textHeading/textHeading.component";

import { ContactContainer, TableContainer } from "./contactPage.style";

import { headingArray, headingArrayTablet, contactArray } from "./contactPage.data";

const ContactPage = ({header}) => {
const isTablet = useMediaQuery(mediaQuery.useTablet)

const tableMap = (el, i) => {
 return <Table content={el} key={i} type={TableType.greyHeading} fullBorder={true}/>
}

    return (
        <div>
            <Header header={header}/>
            <ContactContainer>
                <TextHeading title={'Contact Us'}/>
                <TableContainer>
                    {isTablet ? headingArrayTablet.map((el,i) => tableMap(el,i) ) : headingArray.map((el,i) => tableMap(el, i))}
                    { isTablet ? 
                    contactArray.map(el => {
                        return (
                            <Fragment key={el.id}>
                                <Table content={el.areas} fullBorder={true} type={TableType.greyHeading}/>
                                <Table heading={['Businesses','Manager', 'Contact']} content={[el.details, [el.manager], el.contact]} fullBorder={false} type={TableType.subClass}/> 
                            </Fragment>
                        )
                    })
                    :
                    contactArray.map(el => {
                        return (
                            <Fragment key={el.id}>
                                <Table content={el.areas} fullBorder={true} type={TableType.whiteHeading}/>
                                <Table content={el.details} fullBorder={true} type={TableType.listContainer}/>
                                <Table content={el.manager} fullBorder={true} type={TableType.whiteCenter}/>
                                <Table content={el.contact} fullBorder={true} type={TableType.listContainer} icon={el.imageUrl}/>
                            </Fragment>
                        )
                    })}
                </TableContainer>
            </ContactContainer>
        </div>
    );
}

export default ContactPage;