import { Fragment } from "react";
import Header from "../../component/header/header.component";
import Table, { TableType } from "../../component/table/table.component";
import TextHeading from "../../component/textHeading/textHeading.component";

import { ContactContainer, TableContainer } from "./contactPage.style";

import { headingArray, contactArray } from "./contactPage.data";

const ContactPage = ({header}) => {

    return (
        <div>
            <Header header={header}/>
            <ContactContainer>
                <TextHeading title={'Contact Us'}/>
                <TableContainer>
                    {headingArray.map((el,i) => <Table content={el} key={i} type={TableType.greyHeading} fullBorder={true}/>)}
                    {contactArray.map(el => {
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