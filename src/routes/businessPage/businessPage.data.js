import { delay } from 'framer-motion';
import iconBusiness1 from '../../assets/icon/Icon_ice.png';
import iconBusiness2 from '../../assets/icon/Icon_wind.png';
import cardImg1 from '../../assets/image/subpage_contents_04.jpg'
import cardImg2 from '../../assets/image/subpage_contents_05.jpg'


export const storyArray = [
    {
        id: 1,
        heading: "Satrec Initiative is developing SpaceEye-T",
        text: "The world's highest resolution optical satellite that will help us to solve real-world problems",
    },
    {
        id: 2,
        heading: 'Advance small SAR (Synthetic Aperture Radar) satellites',
        text: "Continum Systems is at the forefront of Canada’s innovation to advance small SAR (Synthetic Aperture Radar) satellites",
    },
]

export const infoCardArray = [
    {
        id: 1,
        imageUrl: iconBusiness1,
        heading: "Breaking ice feature \n with a LNG carrier",
        color: 'var(--color-050)',
        vertical: true,
        text: "Continum Ocean is the first company in the world to combine the breaking ice feature with a LNG carrier to chart Arctic shipping routes, the world's largest gas field, and to usher in the era of Arctic navigation for humankind.",
        delay: 0,
    },
    {
        id: 2,
        imageUrl: iconBusiness2,
        heading: 'Wind turbine \n installation vessels',
        color: 'var(--color-050)',
        vertical: true,
        text: "We strive for the future of the earth to producing sustainable eco-friendly energy with offshore wind turbine installation vessels (WTIV) equipped with the smart ship solution autonomous navigation system.",
        delay: 0.5,
    },
]

export const cardArray = [
    {
        id: 1,
        imageFirst: true,   
        imageUrl: cardImg1,
        heading: "Overpopulation, resource depletion, the era of new space",
        text: "Overpopulation, resource depletion, energy problems The era of new space is approaching where the private sector explores space resources to address any issues facing humankind and the planet.",
    },
    {
        id: 2,
        imageFirst: false,
        imageUrl: cardImg2,
        heading: "Infinite energy and mineral resources in the universe",
        text: "We research technologies for mining, utilization, and the transportation of space resources for sustainable humankind and the future of the planet.",
    },
]

