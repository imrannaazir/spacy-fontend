import Header from '../shared/Header';
import Footer from '../shared/Footer';
import JoinNow from './JoinNow';
import ExploreOurRockets from './ExploreOurRockets';
import Banner from './Banner';
import VideoSection from './VideoSection';
import Partners from './Partners';
import Contacts from './Contacts';
const Home = () => {

    return (
        <div id='home'>
            <div className='fixed top-0 z-50 w-[100%]'>
                <Header />
            </div>
            <div className=' absolute top-0 w-[100%] h-[100%]'>
                <Banner />
                <ExploreOurRockets />
                <JoinNow />
                <VideoSection />
                <Partners />
                <Contacts />
                <Footer />
            </div>
        </div>
    );
};

export default Home;