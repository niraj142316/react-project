import './slider.css'

const Sliders = ({id, name, profile, icon, iconTick, star, tagline, subtag, desc,title}) => {
  return (
    <div className='slider'>
      <div className='slider-one'>
        <div className='slider-two'>
          <div className='star-images'>
            <img
              src={star}
              alt=''
            />
            <img
              src={star} alt=''
            />
            <img
              src={star}
              alt=''
            />
            <img
              src={star}
              alt=''
            />
            <img
              src={star}
              alt=''
            />
          </div>
          <p className='slider-para'>
            {desc}
          </p>
          <a href='/read'>Read More</a>
        </div>
        <div className='slider-three'>
          <img
            src={profile}
            alt=''
          />
          <div className='slider-four'>
            <div className='slider-five'>
              <h3>{name}</h3>
              <img
                className='slider-tick'
                src='https://img.icons8.com/?size=100&id=r7FUj5zJZpgL&format=png&color=000000'
                alt=''
              />
            </div>
            <span className='slider-span'>Customer</span>
            <div className='slider-six'>
              <img
                className='slider-com'
                src={icon}
                alt=''
              />
              <div className='slider-seven'>
                <p className='slider-paraone'>{tagline}</p>
                <p className='slider-paratwo'>{subtag}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sliders
