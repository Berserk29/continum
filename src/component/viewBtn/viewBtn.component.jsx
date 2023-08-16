import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Typo, {TypoType} from '../../component/typo/typo.component'
import Circle from "../circle/circle.component"

import { ViewContainer,} from "./viewBtn.style"


const ViewBtn = ({linkColor, link , animation, time}) => {
    const navigate = useNavigate()
    const [hoverState, setHoverState] = useState(false)
    
    const hoverHandler = (boolean) => setHoverState(boolean);
    const viewHandler = () => navigate(link)

    return (
        <ViewContainer animation={animation} time={time}>
              <div 
                onClick={viewHandler}
                onMouseEnter={() => hoverHandler(true)}
                onMouseLeave={() => hoverHandler(false)}
              >
                <Typo type={TypoType.Link} linkColor={linkColor}>View More</Typo>
              </div>
                <Circle activate={hoverState} color={linkColor}/>
        </ViewContainer>
    )
}

export default ViewBtn;