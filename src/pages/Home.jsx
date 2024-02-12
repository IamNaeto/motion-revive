import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Withmotion from '../components/Withmotion';
import Twentyfour from "../components/Twentyfour";
import Structure from '../components/Structure';
import More from "../components/More";

const Home = () => {
    return ( 
        <main>
            <Header />
            <Hero />
            <Withmotion />
            <Twentyfour />
            <Features />
            <Structure />
            <More />
            <Footer />
        </main>
     );
}
 
export default Home;