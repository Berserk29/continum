import { Fragment } from "react";
import Header from "../../component/header/header.component";
import Table, { TableType } from "../../component/table/table.component";
import TextHeading from "../../component/textHeading/textHeading.component";
import { ContactContainer, TableContainer } from "./contactPage.style";

import phoneIcon from '../../assets/icon/icon_phone.png';
import mailIcon from '../../assets/icon/icon_mail.png';

const headingArray = ['Areas', 'Detailed Businesses', 'Manager', 'Contact'];

const contactArray = [
    {
        id: 1,
        areas: 'Smart Factory',
        details: ['Smart factory', 'Utility integrated control', '3D production / facility integrated control', 'Data platform'],
        manager: 'Olivier Trudeau',
        contact: ['438-5080-8477', 'oliviertrudeau@continum.com'],
        imageUrl: [phoneIcon, mailIcon],
    },
    {
        id: 2,
        areas: 'Factory Automation',
        details: ['Process control'],
        manager: 'Healim Cho',
        contact: ['438-5080-8467', 'healimcho@continum.com'],
        imageUrl: [phoneIcon, mailIcon],
    },
    {
        id: 3,
        areas: 'Green Energy',
        details: ['VPP-based power trading'],
        manager: 'Sonia Fortin',
        contact: ['438-5080-8480', 'soniafortin@continum.com'],
        imageUrl: [phoneIcon, mailIcon],
    },
    {
        id: 4,
        areas: 'Global O&M',
        details: ['Overseas'],
        manager: 'Stephane Trudeau',
        contact: ['438-5080-8482', 'stephanetrudeau@continum.com'],
        imageUrl: [phoneIcon, mailIcon],
    },
]


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