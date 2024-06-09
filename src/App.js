import './App.css';
import Navbar from './components/navbar/Navbar';
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
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Blog />
      <Featured />
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
