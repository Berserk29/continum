import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowView, BtnView, ViewContainer, MovingArrowView, ArrowViewVisible, VisibleArrowView } from "./viewBtn.style"

import arrowBtnImg from '../../assets/icon/button_arrow.png'

const ViewBtn = ({link, displayOff = false, animation = false, time = false, color = 'var(--color-grey-light)', className = ''}) => {
    const navigate = useNavigate()
    const [hoverState, setHoverState] = useState(false)
    const hoverHandlerOn = () => setHoverState(true);
    const hoverHandlerOff = () => setHoverState(false);

    const viewHandler = () => navigate(link)

    const arrowLogic = () => {
      if(!displayOff){
        if(hoverState) return <MovingArrowView src={arrowBtnImg}/>
        return <ArrowView src={arrowBtnImg}/>
      };
      
      if(displayOff){
        if(hoverState) return <VisibleArrowView src={arrowBtnImg}/>
        return <ArrowViewVisible src={arrowBtnImg}/>
      };
    }

    return (
        <ViewContainer className={className}>
            <BtnView
              color={color} 
              onClick={viewHandler}
              onMouseEnter={hoverHandlerOn}
              onMouseLeave={hoverHandlerOff}
              animation={animation ? animation : ''}
              time={time ? time : ''}
              >View More
            </BtnView>
            {arrowLogic()}
        </ViewContainer>
    )
}

export default ViewBtn;

