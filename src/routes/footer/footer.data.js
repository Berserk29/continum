import {TypoType} from '../../component/typo/typo.component' 
import logoYoutube from '../../assets/icon/Icon_youtube.png'
import logoInsta from '../../assets/icon/Icon_instagram.png'

export const footerIcon = {
  logoYoutube,
  logoInsta
}

export const selecterObject = {
  linkName: ['Continum Corporation', 'Continum Systems', 'Continum Vision'],
  width: ['30.4rem', '100%'],
  typoType: TypoType.HeadlineFooter,
  placeHolder: 'See all affiliates',
  isFooter: true,
  textColor: 'var(--color-050)'
}


export const categories = [
    {
      id: 0,
      title: 'Who we are',
      path: '/about',
      linkName: ['Company', 'History', 'Location']
    },
    {
      id: 1,
      title: 'What we do',
      path: '/business',
      linkName: ['Sustainable tech', 'Product & service', 'Discover', 'Protect']
    },
    {
      id: 2,
      title: 'Media',
      path: '/media',
      linkName: ['Newsroom', 'Library', 'Notice']
    },
    {
      id: 3,
      title: 'Esg',
      path: '/esg',
      linkName: ['Environmental', 'Social', 'Governance']
    },
    {
      id: 4,
      title: 'Contact',
      path: '/contact',
      linkName: ['Contact Us', 'Location']
    },
  ]