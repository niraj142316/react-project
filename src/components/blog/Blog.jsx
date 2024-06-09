import './blog.css';
import nestle from '../../assets/nestle.png';
import square from '../../assets/square.png';

const Blog = () => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        <h1>Cognizant</h1>
        <h1>VEED.IO</h1>
        <img className='square' src={square} alt="square" />
        <img src={nestle} alt="nestle" />
        <h1>Cognizant</h1>
        <h1>VEED.IO</h1>
        <img className='square' src={square} alt="square" />
        <img src={nestle} alt="nestle" />
        <h1>Cognizant</h1>
        <h1>VEED.IO</h1>
        <img className='square' src={square} alt="square" />
        <img src={nestle} alt="nestle" />
        <h1>Cognizant</h1>
        <h1>VEED.IO</h1>
        <img className='square' src={square} alt="square" />
        <img src={nestle} alt="nestle" />
      </div>
    </div>
  )
}

export default Blog;
