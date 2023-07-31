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

// TODO THIS CARD WILL CHANGE

export const infoCardArray = [
    {
        id: 1,
        imageUrl: iconBusiness1,
        heading: "Breaking ice feature with a LNG carrier",
        bulletPoint: [`Maintain proper temperature`, `Maintain proper humidity`],
    },
    {
        id: 2,
        imageUrl: iconBusiness2,
        heading: 'Prevention of causes of fire accidents',
        bulletPoint: ['HVAC system monitoring', 'Enclosure leak and corrosion protection', 'Installation of fire detection systems'],
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

