import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WithMotion from "../components/Withmotion";
import TwentyFour from "../components/TwentyFour";
import Structure from '../components/Structure';
import More from "../components/More";
import BackToTop from "../components/BackToTop";

const Home = () => {
    return ( 
        <main>
            <Header />
            <Hero />
            <WithMotion />
            <TwentyFour />
            <Features />
            <Structure />
            <More />
            <Footer />
            <BackToTop targetId={top}/>
        </main>
     );
}
 
export default Home;