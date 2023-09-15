import { useEffect, useRef } from "react";
import { Container } from "./homePage.styled";
import { homeDebounce } from "../../helper/helperFunction";

import Carousel from "../../component/carousel/carousel.component";
import Header from "../../component/header/header.component";
import NewsSection from "../../component/newsSection/newsSection.component";
import Recruitment from "../../component/recruitment/recruitment.component";
import Footer from "../footer/footer.component";


const HomePage = ({props}) => {
    const containerRef = useRef()

    useEffect(() => {
        const container = containerRef.current;
        const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        let containerScrollTop;
        let scrollDistance;
        let prevDeltaY = 0;
        
        // To focus the container do not forget to add tabIndex="0" on the element
        container.focus()
        
        const scrolling = () => {
            container.scrollTo({
                top: containerScrollTop + scrollDistance,
                behavior: 'smooth'
            });
        }
        const debounceScrolling = homeDebounce(scrolling, 200)

        const smoothScroll = event => {

            // Firefox && Safari bug when preventDefault
            if(!isFirefox && !isSafari) {
                event.preventDefault();
            }
            
            // To limit the amount of touchpad wheel event
            if(event.deltaY === prevDeltaY ) return;
            if(event.deltaY <= 29 && event.deltaY >= -29) return;
            
            containerScrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            scrollDistance = event.deltaY > 0 ? containerHeight : -containerHeight;
            prevDeltaY = event.deltaY

            debounceScrolling();
        };
        
        container.addEventListener('wheel', smoothScroll, { passive: false });        
        return () => {
            container.removeEventListener('wheel', smoothScroll);
        };
    }, [])



    return (
        <Container ref={containerRef} tabIndex="0">
            <Header props={props}/>
            <Carousel/>
            <NewsSection/>
            <Recruitment/>
            <Footer isHome={true}/>
        </Container>
    );
}

export default HomePage;