import Footer from "../../routes/footer/footer.component"
import Header from "../../component/header/header.component"

const Boilerplate = ({children, props}) => {
    return (
        <div>
            <Header props={props}/>
            {children}
            <Footer />
        </div>
    )
}

export default Boilerplate;