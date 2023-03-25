import { HeadingSection } from "./sectionHeading.style";

const SectionHeading = ({title, className = ''}) => {
    
    return(
        <HeadingSection className={className}>{title}</HeadingSection>
    )
}

export default SectionHeading;