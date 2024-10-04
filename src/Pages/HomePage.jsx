import HeroSection from "../components/HeroSection";
// import UpcomingEvents from "../components/UpcomingEvents";
import TeamSection from "../components/TeamSection";
// import Blog from "../components/Blog";
import ContactForm from "../components/ContactForm";
// import Volunteers from "../components/Volunteers";
import Features from "../components/Features";


const HomePage = () => {
    return (
        <>
            <HeroSection />
            {/* <UpcomingEvents /> */}
            <Features />
            <TeamSection />
            {/* <Volunteers /> */}
            {/* <Blog /> */}
            <ContactForm />
        </>
    )
}

export default HomePage;