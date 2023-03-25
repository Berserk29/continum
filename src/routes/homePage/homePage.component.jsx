import Carousel from "../../component/carousel/carousel.component";
import Header from "../../component/header/header.component";
import NewsSection from "../../component/newsSection/newsSection.component";
import Recruitment from "../../component/recruitment/recruitment.component";


const HomePage = ({header}) => {
    return (
        <div>
            <Header header={header}/>
            <Carousel/>
            <NewsSection/>
            <Recruitment/>
        </div>
    );
}

export default HomePage;