import Boilerplate from "../../component/boilerplate/boilerplate.component";
import Carousel from "../../component/carousel/carousel.component";
import NewsSection from "../../component/newsSection/newsSection.component";
import Recruitment from "../../component/recruitment/recruitment.component";

const HomePage = ({props}) => {
    return (
        <Boilerplate props={props}>
            <Carousel/>
            <NewsSection/>
            <Recruitment/>
        </Boilerplate>
    );
}

export default HomePage;