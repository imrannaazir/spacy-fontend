import JoinNow from '../components/Home/JoinNow';
import VideoSection from '../components/Home/VideoSection';
import Contacts from '../components/Home/Contacts';
import Slider from '../components/Home/Banner/Slider';
import Drones from '../components/Home/Drones';
import RocketsCategory from '../components/Home/RocketsCategory';
import FeaturedDrone from '../components/Home/FeaturedDrone';
import OurPartners from '../components/Home/Our Partners/OurPartners';
import FeaturedRocket from '../components/Home/FeaturedRocket';
const Home = () => {

    return (
        <>
            <Slider />
            <RocketsCategory />
            <FeaturedRocket />
            <Drones />
            <FeaturedDrone />
            <JoinNow />
            <OurPartners />
            <VideoSection />
            <Contacts />
        </>
    );
};

export default Home;