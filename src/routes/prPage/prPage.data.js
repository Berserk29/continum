export const headingArray = ['No', 'Subject', 'Date', 'Writer'];

export const PageType = {
    numberPage: 6
}

export const PressArray = [
    {
        id: 1,
        subject: 'Create a business environment that prioritizes safety',
        date: '2023-01-03',
        writer: 'Continum', 
    },
    {
        id: 2,
        subject: 'Efficient use of resources and energy',
        date: '2022-12-21',
        writer: 'Continum', 
    },
    {
        id: 3,
        subject: 'Monday, group of experts with 1gw O&M placed in Mtl ',
        date: '2022-12-19',
        writer: 'Stephane', 
    },
    {
        id: 4,
        subject: 'Establish relevant standards and internal regulations',
        date: '2022-12-10',
        writer: 'Continum', 
    },
    {
        id: 5,
        subject: 'New Hires',
        date: '2022-12-08',
        writer: 'Healim Cho', 
    },
    {
        id: 6,
        subject: 'Identify environmental requirement',
        date: '2022-12-03',
        writer: 'Olivier', 
    },
    {
        id: 7,
        subject: 'Mergers and acquisitions',
        date: '2022-11-19',
        writer: 'John', 
    },
    {
        id: 8,
        subject: 'Create a business environment that prioritizes safety',
        date: '2022-12-01',
        writer: 'Continum', 
    },
    {
        id: 9,
        subject: 'Product updates',
        date: '2022-11-15',
        writer: 'Olivier', 
    },
    {
        id: 10,
        subject: 'Campaingn Launches',
        date: '2022-11-10',
        writer: 'Continum', 
    },
    {
        id: 11,
        subject: 'Create a business environment that prioritizes safety',
        date: '2022-10-28',
        writer: 'Healim Cho', 
    },
    {
        id: 12,
        subject: 'New Partnerships to announce!',
        date: '2022-10-12',
        writer: 'Samuel', 
    },
    {
        id: 13,
        subject: 'Establish relevant standards and internal regulations',
        date: '2022-10-03',
        writer: 'Healim Cho', 
    },
    {
        id: 14,
        subject: 'Awards and recognitions',
        date: '2022-09-26',
        writer: 'Mickael', 
    },
]

export const maxNumberPage = function () {
    return Math.ceil(PressArray.length / PageType.numberPage)
}

export const pageMin = (page) => (page - 1) * PageType.numberPage;
export const pageMax = (page) => page * PageType.numberPage;