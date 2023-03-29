import { HeadingSection } from "./sectionHeading.style";

const SectionHeading = ({title, color = 'var(--color-white)', animate, variants}) => {
    
    return(
        <HeadingSection 
            color={color} 
            animate={animate}
            initial='hidden'
            variants={variants}
        >{title}
        </HeadingSection>
    )
}

export default SectionHeading;