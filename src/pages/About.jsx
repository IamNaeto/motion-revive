import AboutUs from "../components/AboutUs";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
    return (
        <main>
            <Header />
            <AboutUs />
            <Footer />
            <BackToTop targetId={top} />
        </main>
    );
}

export default About;