import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowView, BtnView, ViewContainer, MovingArrowView } from "./viewBtn.style"

import arrowBtnImg from '../../assets/icon/button_arrow.png'

const ViewBtn = ({link}) => {
    const navigate = useNavigate()
    const [hoverState, setHoverState] = useState(false)
    const hoverHandlerOn = () => setHoverState(true);
    const hoverHandlerOff = () => setHoverState(false);

    const viewHandler = () => navigate(link)

    return (
        <ViewContainer>
            <BtnView 
              onClick={viewHandler}
              onMouseEnter={hoverHandlerOn}
              onMouseLeave={hoverHandlerOff}
              >View More
            </BtnView>
            {
              hoverState ? 
              <MovingArrowView src={arrowBtnImg}/>
              :
              <ArrowView src={arrowBtnImg}/>
            }
        </ViewContainer>
    )
}

export default ViewBtn;