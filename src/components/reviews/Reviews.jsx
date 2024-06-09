import rightIcon from '../../assets/rightArrow.png';
import leftIcon from '../../assets/leftArrow.png';
// import { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './review.css';
// /** @type {import('tailwindcss').Config} */

const Reviews = () => {
  // const scrollRef = useRef(null);
  // const [currentSlide, setCurrentSlide]=useState(0);

  const settings={dots:true,
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:1
  };

  const data = [
    {
      id: 1,
      star:"https://img.icons8.com/?size=48&id=qdQpy48X3Rjv&format=png",
      desc:"Lorem ipsum dolor sit amet consectetur adipis hello welcome to the demo website and me intro you to this webs he he helo elit. Placeat magnam dolorem.",
      more: "Read more",
      profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpwe4gV2OYx9BiAF9gOcFNsP9MlSaWMGdu7LDDFurkFACMu3Fi_BrirlRTpojJT3oaHU&usqp=CAU",
      name: "Sarah Taylor",
      iconTick:"https://t3.ftcdn.net/jpg/05/43/29/02/360_F_543290296_snhXYYelZwXmXoo1sUoVMD54GXTPguWH.jpg",
      title: "Customer",
      icon: "https://png.pngtree.com/png-clipart/20200720/original/pngtree-river-logo-template-vector-icon-illustration-design-png-image_4781539.jpg",
      tagline:"C  O  M  P  A  N  Y",
      subtag:"TAGLINE GOES HERE"
    },
    {
      id: 2,
      star:"https://img.icons8.com/?size=48&id=qdQpy48X3Rjv&format=png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      more: "Read more",
      profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpwe4gV2OYx9BiAF9gOcFNsP9MlSaWMGdu7LDDFurkFACMu3Fi_BrirlRTpojJT3oaHU&usqp=CAU",
      name: "Emma Watson",
      iconTick:"https://t3.ftcdn.net/jpg/05/43/29/02/360_F_543290296_snhXYYelZwXmXoo1sUoVMD54GXTPguWH.jpg",
      title: "Customer",
      icon: "https://png.pngtree.com/png-clipart/20200720/original/pngtree-river-logo-template-vector-icon-illustration-design-png-image_4781539.jpg",
      tagline:"C  O  M  P  A  N  Y",
      subtag:"TAGLINE GOES HERE"
    },
    {
      id: 3,
      star:"https://img.icons8.com/?size=48&id=qdQpy48X3Rjv&format=png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      more: "Read more",
      profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpwe4gV2OYx9BiAF9gOcFNsP9MlSaWMGdu7LDDFurkFACMu3Fi_BrirlRTpojJT3oaHU&usqp=CAU",
      name: "Erica M.",
      iconTick:"https://t3.ftcdn.net/jpg/05/43/29/02/360_F_543290296_snhXYYelZwXmXoo1sUoVMD54GXTPguWH.jpg",
      title: "Customer",
      icon: "https://png.pngtree.com/png-clipart/20200720/original/pngtree-river-logo-template-vector-icon-illustration-design-png-image_4781539.jpg",
      tagline:"C  O  M  P  A  N  Y",
      subtag:"TAGLINE GOES HERE"
    },
    {
      id: 4,
      star:"https://img.icons8.com/?size=48&id=qdQpy48X3Rjv&format=png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      more: "Read more",
      profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpwe4gV2OYx9BiAF9gOcFNsP9MlSaWMGdu7LDDFurkFACMu3Fi_BrirlRTpojJT3oaHU&usqp=CAU",
      name: "Erica M.",
      iconTick:"https://t3.ftcdn.net/jpg/05/43/29/02/360_F_543290296_snhXYYelZwXmXoo1sUoVMD54GXTPguWH.jpg",
      title: "Customer",
      icon: "https://png.pngtree.com/png-clipart/20200720/original/pngtree-river-logo-template-vector-icon-illustration-design-png-image_4781539.jpg",
      tagline:"C  O  M  P  A  N  Y",
      subtag:"TAGLINE GOES HERE"
    },
  ]

  // const handleClick=(way)=>{
  //   way==="left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1: 2) : setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0)

  // }

  // const scroll = (direction) => {
  //   const { current } = scrollRef;
  //   if (direction === 'left') {
  //     current.scrollBy({ left: -300, behavior: 'smooth' });
  //   } else {
  //     current.scrollBy({ left: 300, behavior: 'smooth' });
  //   }
  // };

  return (
    <div className='reviews bg-yellow'>
      <span className='span'>Reviews</span>
      <h1>What our customer says</h1>
      <p className='reviews-p'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, vero fugit, libero possimus repellat laudantium architecto cum animi, beatae ad dolorem quis solut
      </p>
        {/* <img className='reviews-left' src={leftIcon} alt="" onClick={()=>handleClick("left")} /> */}
        <Slider {...settings}>
      <div className='reviews-zero'>
        {/* <div className='reviews-container'> */}
        {data.map((d)=>(
          <div key={d.id} className='reviews-one'>
            <div className='reviews-two'>
              {/* <img className='reviews-img' src={d.background} alt="" /> */}
              <div className='star-images'>
                <img src={d.star} alt='' />
                <img src={d.star} alt='' />
                <img src={d.star} alt='' />
                <img src={d.star} alt='' />
                <img src={d.star} alt='' />
              </div>
              <p className='reviews-para'>{d.desc}</p>
              <a href='/read'>{d.more}</a>
            </div>
            <div className='reviews-three'>
              <img src={d.profile} alt='' />
              <div className='reviews-four'>
                <div className='reviews-five'>
                  <h3>{d.name}</h3>
                  <img className='reviews-tick' src={d.iconTick} alt='' />
                </div>
                <span className='reviews-span'>{d.title}</span>
                <div className='reviews-six'>
                  <img className='reviews-com' src={d.icon} alt='' />
                  <div className='reviews-seven'>
                    <p className='reviews-paraone'>{d.tagline}</p>
                    <p className='reviews-paratwo'>{d.subtag}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>))}       
        {/* </div> */}
      </div>
        </Slider>
        {/* <img className='reviews-right' src={rightIcon} alt="" onClick={()=>handleClick()} /> */}
    </div>
  );
};

export default Reviews;

// style={{transform:`translateX(-${currentSlide*100}vw)`}}