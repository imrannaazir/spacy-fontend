import Header from '../shared/Header';
import Footer from '../shared/Footer';
import JoinNow from './JoinNow';
import ExploreOurRockets from './ExploreOurRockets';
import Banner from './Banner';
import { Slide } from 'react-reveal';
import VideoSection from './VideoSection';
import Partners from './Partners';
const Home = () => {

    return (
        <div id='home'>
            <div className='fixed top-0 z-50 w-[100%]'>
                <Header />
            </div>
            <div className=' absolute top-0 w-[100%] h-[100%]'>
                <Banner />

                <ExploreOurRockets />

                {/* join section */}
                <JoinNow />

                <Slide right>
                    <VideoSection />
                </Slide>

                <Slide left>
                    <Partners />
                </Slide>

                <Footer />
            </div>
        </div>
    );
};

export default Home;