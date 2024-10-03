import HeroSection from "../components/HeroSection";
import UpcomingEvents from "../components/UpcomingEvents";
import TeamSection from "../components/TeamSection";
import Blog from "../components/Blog";
import ContactForm from "../components/ContactForm";
import Volunteers from "../components/Volunteers";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <UpcomingEvents />
            <TeamSection />
            <Volunteers />
            <Blog />
            <ContactForm />
        </>
    )
}

export default HomePage;