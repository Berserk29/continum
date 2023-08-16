import { CircleCss } from "./circle.style";

const Circle = ({activate = false, color = 'var(--color-white-opa60)', activeColor = 'var(--color-primary)'}) => {
    
    return <CircleCss active={activate} color={color} activeColor={activeColor}/>
}

export default Circle;