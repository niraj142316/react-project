import './App.css';
import Navbar from './components/navbar/Navbar';
import Reviews from './components/reviews/Reviews';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Sliders from './components/sliderContent/Sliders';
import {data, responsive} from './reviewData';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Featured from './components/featured/Featured';
import Services from './components/services/Services';
import Build from './components/build/Build';
import Graphic from './components/graphicFeature/Graphic';
import Pricing from './components/pricing/Pricing';
import Faqs from './components/faqs/Faqs';
import Footer from './components/footer/Footer';

function App() {

    const slider=data.map(item=>(
      <Sliders name={item.name} star={item.star} desc={item.desc} profile={item.profile} iconTick={item.iconTick} title={item.title} icon={item.icon} tagline={item.tagline} subtag={item.subtag} />
    ))


  return (
    <div className="App">
      <Navbar />
      <Home />
      <Blog />
      <Featured />
      <div className="carosel">
      <Reviews />
      <Carousel showDots={true} infinite={true} responsive={responsive}>
        {slider}
      </Carousel>
      </div>
      <Services />
      <Build />
      <Graphic />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
