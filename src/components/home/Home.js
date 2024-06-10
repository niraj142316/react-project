import './home.css';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../dropdownItems/DropdownItem';
import { useState } from 'react';
import htmlIcon from '../../assets/html.png';
import zipIcon from '../../assets/zip.png';
import pdfIcon from '../../assets/pdf.png';
import zipImg from '../../assets/zip2.png';
import pdfImg from '../../assets/pdf2.png';

const Home = () => {
  const [textButton, setTextButton] = useState('BuddyHost');
  const items = ["BuddyHost","BuddyHost", "Options2", "Options3", "Options4", "Options5"];

  const handleItemClick = (item) => {
    setTextButton(item);
  };

  return (
    <div className='home'>
      <h1>The simplest way to host & share your web project</h1>
      <div className='home-card'>
        <div className='home-btn-dropdown'>
          <input type='text' placeholder='Link-name' />
          <Dropdown buttonText={textButton} content={items.map((item) => (
            <DropdownItem key={item} onClick={() => handleItemClick(item)}>
              {item}
            </DropdownItem>
          ))} />
        </div>
        <div className="home-elements">
          <div className="home-elements-item home-html-item">
            <img src={htmlIcon} alt="" />
            <span className='html'>HTML</span>
          </div>
          <hr />
          <div className="home-elements-item">
            <img src={zipIcon} alt="" />
            <span>ZIP</span>
          </div>
          <hr />
          <div className="home-elements-item">
            <img src={pdfIcon} alt="" />
            <span>PDF</span>
          </div>
          <hr />
          <div className="home-elements-item">
            <img src="" alt="" />
            <span>Examples</span>
          </div>
        </div>
        <div className="home-container">
          <div className="home-images">
            <img className='home-htmlImg' src={htmlIcon} alt="" />
            <img src={zipImg} alt="" className='home-zipImg' />
            <img src={pdfImg} alt="" className='home-pdfImg' />
          </div>
          <div className="home-para"></div>
          <p>Drag and drop zip or single file here</p>
          <button>Upload File</button>
          <p>or use an example</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
