import { CircleCss } from "./circle.style";

const Circle = ({activate = false, color = 'var(--color-white-opa60)'}) => {

    return <CircleCss active={activate} color={color}/>
}

export default Circle;