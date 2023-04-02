import phoneIcon from '../../assets/icon/icon_phone.png';
import mailIcon from '../../assets/icon/icon_mail.png';

export const headingArray = ['Areas', 'Detailed Businesses', 'Manager', 'Contact'];

export const contactArray = [
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