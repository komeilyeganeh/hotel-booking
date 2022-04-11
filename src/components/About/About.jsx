import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = () => {
    return <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row">
        <AboutText />
        <AboutImage />
    </div>
}

export default About;