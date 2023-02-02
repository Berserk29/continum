import Carousel from "../../component/carousel/carousel.component";
import Header from "../../component/header/header.component";



const HomePage = ({header}) => {

    return (
        <div>
            <Header header={header}/>
            <Carousel/>
        </div>
    );
}

export default HomePage;