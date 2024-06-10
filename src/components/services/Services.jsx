import './services.css';
import recruitmentIcon from '../../assets/recruitment2.png';
import salesIcon from '../../assets/salesandmarketing.webp';
const Services = () => {

  return (
    <div className='service'>
      <span className='service-span'>Categories</span>
      <h1>Our services</h1>
      <p className='service-p'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, vero fugit, libero possimus repellat laudantium architecto cum animi, beatae ad dolorem quis solut
      </p>
      <div className="service-background-change">
      <div className="service-container">
        <div className="service-categories">
            <div className="service-one service-first active">
                <img className='service-one-img' src="https://img.icons8.com/?size=100&id=YShdsBhs1Ie1&format=png&color=000000" alt="" />
                <h4>Designers</h4>
            </div>
            <div className="service-one service-two">
                <img className='service-one-img' src="https://img.icons8.com/?size=80&id=T2lH42Zq8KRl&format=png" alt="" />
                <h4>Developers</h4>
            </div>
            <div className="service-one service-three">
                <img className='service-one-img' src="https://img.icons8.com/?size=100&id=POqM1oEjNhLO&format=png&color=000000" alt="" />
                <h4>RealEstate</h4>
            </div>
            <div className="service-one service-four">
                <img className='service-one-img' src="https://img.icons8.com/?size=80&id=zYO9W5vMBXao&format=png" alt="" />
                <h4>Recruitment</h4>
            </div>
            <div className="service-one service-five">
                <img className='service-one-img' src="https://img.icons8.com/?size=80&id=Hw71R8GQaWcd&format=png" alt="" />
                <h4>Marketing</h4>
            </div>
            <div className="service-one service-six">
                <img className='service-one-img' src="https://img.icons8.com/?size=80&id=eQk8aCcvRps7&format=png" alt="" />
                <h4>Hospitality</h4>
            </div>
        </div>
        <div className="service-details">
            <div className="service-left">
                <h3>Easily test & share a variety of marketing materials for your audiences</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil velit nulla, totam est necessitatibus laborum earum corporis praesentium, vitae enim voluptatem esse molestias odio alias omnis modi aspernatur. Ipsa.</p>
                <span className='service-details-span'>See Examples</span>
            </div>
            <div className="service-right">
                <img className='service-right-img' src="https://images.pexels.com/photos/185576/pexels-photo-185576.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img className='service-right-img service-image' src="https://th.bing.com/th/id/OIP.BVPYQale7lSIGVs9eGOHRwAAAA?pid=ImgDet&w=191&h=191&c=7" alt="" />
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services;
