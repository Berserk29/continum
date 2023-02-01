import { Route, Routes } from "react-router-dom";

import Footer from "./routes/footer/footer.component";
import AboutPage from "./routes/aboutPage/aboutPage.component";
import HomePage from "./routes/homePage/homePage.component";
import BusinessPage from "./routes/businessPage/businessPage.component";
import SustainabilityPage from "./routes/sustainabilityPage/sustainabilityPage.component";
import PrPage from "./routes/prPage/prPage.component";
import ContactPage from "./routes/contactPage/contactPage.component";

// TODO Put on Contest
import HomeImage from '../src/assets/home/main_bg_header.png'
import AboutImage from '../src/assets/about/aboutus_bg_01.png'
import BusinessImage from '../src/assets/business/business_bg_01.png'
import SubtainabilityImage from '../src/assets/sustainability/sustainability_bg_01.png'
import PrImage from '../src/assets/pr/pr_bg_01.png'
import ContactImage from '../src/assets/contact/contactus_bg_01.png'


const headerArray = [
    {
        url: HomeImage,
        main: 'Envisioning Tomorrow',
        sub: 'with smart technologies'
    },
    {
        url : AboutImage,
        main: 'About Us',
        
    },
    {
        url: BusinessImage,
        main: 'Business & Solutions',
    },
    {
        url: SubtainabilityImage,
        main: 'Sustainability'
    },
    {
        url: PrImage,
        main: 'PR'
    },
    {
        url: ContactImage,
        main: 'Contact Us'
    },
]


// TODO the nav and footer... etc component need to be insert
function App() {
  return (
    <Routes>
      <Route path="/" element={<Footer/>}>
          <Route index element={<HomePage header={headerArray[0]}/>} />
          <Route path="about" element={<AboutPage header={headerArray[1]}/>} />
          <Route path="business" element={<BusinessPage header={headerArray[2]}/>} />
          <Route path="sustainability" element={<SustainabilityPage header={headerArray[3]}/>} />
          <Route path="pr" element={<PrPage header={headerArray[4]}/>} />
          <Route path="contact" element={<ContactPage header={headerArray[5]}/>} />
      </Route>
    </Routes>
  );
}

export default App;
