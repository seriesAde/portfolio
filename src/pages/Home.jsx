import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Hero />
            <TechStack />
            <About />
            <Experience />
            <Projects />
            <Footer />
        </div>
    );
}

export default Home;
