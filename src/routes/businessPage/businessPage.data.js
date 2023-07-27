import iconBusiness1 from '../../assets/business/business_icon_01.png';
import iconBusiness2 from '../../assets/business/business_icon_02.png';
import iconRelated5 from '../../assets/business/business_icon_05.png';
import iconRelated6 from '../../assets/business/business_icon_06.png';

// String.fromCharCode --> UTF-16 Encoding  !
const plusMinus = String.fromCharCode(0x00B1);
const celcius = String.fromCharCode(0x2103);

export const storyArray = [
    {
        id: 1,
        heading: "Satrec Initiative is developing SpaceEye-T",
        text: "The world's highest resolution optical satellite that will help us to solve real-world problems",
        time: '2022.12.07'
    },
    {
        id: 2,
        heading: 'Advance small SAR (Synthetic Aperture Radar) satellites',
        text: "Continum Systems is at the forefront of Canada’s innovation to advance small SAR (Synthetic Aperture Radar) satellites",
        time: '2022.12.05'
    },
]

export const bessArray = [
    {
        id: 1,
        imageUrl: iconBusiness1,
        heading: "Breaking ice feature with a LNG carrier",
        bulletPoint: [`Maintain proper temperature (23${plusMinus}5${celcius})`, `Maintain proper humidity (48${plusMinus}5%)`],
    },
    {
        id: 2,
        imageUrl: iconBusiness2,
        heading: 'Prevention of causes of fire accidents',
        bulletPoint: ['HVAC system monitoring', 'Enclosure leak and corrosion protection', 'Installation of fire detection systems'],
    },
]

export const relatedArray = [
    {
        id: 1,
        imageUrl: iconRelated5,
        heading: 'VPP-based Power Trading',
        text: 'Power trading service for KPX power market and RE100 customers based on renewable energy collective resource (VPP)',
    },
    {
        id: 2,
        imageUrl: iconRelated6,
        heading: 'Global O&M',
        text: "The best O&M service in the global solar market with Hanwha Group's solar and ESS business capabilities and IT technologies",
    },
]

