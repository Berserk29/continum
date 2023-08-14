
import aboutImage from '../src/assets/image/subpage_cover_01.jpg'
import businessImage from '../src/assets/image/subpage_cover_02.jpg'
import mediaImage from '../src/assets/image/subpage_cover_03.jpg'
import esgImage from '../src/assets/image/subpage_cover_04.jpg'
import contactImage from '../src/assets/image/subpage_cover_05.jpg'
import poster from '../src/assets/image/poster.jpg'

// TODO CHANGE THE POSTER BY AN JPG IMAGE

export const headerArray = [
    {
        imageUrl: poster,
    },
    {
        imageUrl: aboutImage,
        heading: 'Who we are',
        linkName: ['Company', 'History', 'Location'],
        placeHolder: 'Company',
    },
    {
        imageUrl: businessImage,
        heading: 'What we do',
        linkName: ['Sustainable tech', 'Product & service', 'Discover', 'Protect'],
        placeHolder: 'Sustainable tech',
    },
    {
        imageUrl: mediaImage,
        heading: 'Media',
        linkName: ['Newsroom', 'Library', 'Notice'],
        placeHolder: 'Newsroom',
    },
    {
        imageUrl: esgImage,
        heading: 'Esg',
        linkName: ['Environmental', 'Social', 'Governance'],
        placeHolder: 'Environmental',
    },
    {
        imageUrl: contactImage,
        heading: 'Contact',
        linkName: ['Contact Us', 'Location'],
        placeHolder: 'Contact Us',
    },
]