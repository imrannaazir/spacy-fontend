import Header from '../shared/Header';
import Footer from '../shared/Footer';
import JoinNow from './JoinNow';
import ExploreOurRockets from './ExploreOurRockets';
import VideoSection from './VideoSection';
import Partners from './Partners';
import Contacts from './Contacts';
import Slider from './Banner/Slider';
import Drones from './Drones';
import RocketsCategory from './RocketsCategory';
import FeaturedRocket from './FeturedRocket/FeaturedRocket';
import FeaturedDrone from './FeaturedDrone';
import OurPartners from './Our Partners/OurPartners';
import OurPartner from './Our Partners/OurPartner';
const Home = () => {

    return (
        <div id='home'>
            <div className='fixed top-0 z-50 w-[100%]'>
                <Header />
            </div>
            <div className=' absolute top-0 w-[100%] h-[100%]'>
                <Slider />
                <RocketsCategory />
                <FeaturedRocket />
                <Drones />
                <FeaturedDrone />
                <JoinNow />
                <OurPartners />
                <VideoSection />
                {/* <Partners /> */}
                <Contacts />

                <Footer />
            </div>
        </div>
    );
};

export default Home;