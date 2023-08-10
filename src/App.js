import { Route, Routes } from "react-router-dom";

import { headerArray } from "./App.data";

import Footer from "./routes/footer/footer.component";
import AboutPage from "./routes/aboutPage/aboutPage.component";
import HomePage from "./routes/homePage/homePage.component";
import BusinessPage from "./routes/businessPage/businessPage.component";
import ContactPage from "./routes/contactPage/contactPage.component";
import EsgPage from "./routes/esgPage/esgPage.component";
import MediaPage from "./routes/mediaPage/mediaPage.component";


function App() {
  return (
    <Routes>
            <Route path="/" element={<Footer/>}>
                <Route index element={<HomePage props={headerArray[0]}/>} />
                <Route path="about" element={<AboutPage props={headerArray[1]}/>} />
                <Route path="business" element={<BusinessPage props={headerArray[2]}/>} />
                <Route path="media" element={<MediaPage props={headerArray[3]}/>} />
                <Route path="esg" element={<EsgPage props={headerArray[4]}/>} />
                <Route path="contact" element={<ContactPage props={headerArray[5]}/>} />
            </Route>
    </Routes>
  );
}

export default App;
