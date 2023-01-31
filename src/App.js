import { Route, Routes } from "react-router-dom";
import Footer from "./routes/footer/footer.component";
import HomePage from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

// TODO the nav and footer... etc component need to be insert
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route path="/" element={<Footer/>}>
          <Route index element={<HomePage/>} />
          <Route path="categories" element={'Other Component Route'} />
      </Route>
      </Route>
    </Routes>
  );
}

export default App;
