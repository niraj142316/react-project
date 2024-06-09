import { useState } from 'react';
import './faqs.css';
import plusImg from '../../assets/plusIcon.png';
import minusIcon from '../../assets/minus1.png';

const Faqs = () => {
  const [visible, setVisible] = useState(Array(4).fill(false));

  const toggleVisibility = (index) => {
    setVisible(prevVisible =>
      prevVisible.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className='faq'>
      <span className='faq-span'>FAQs</span>
      <h1>Frequently Asked Questions</h1>
      <p className='faq-service-p'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, vero fugit, libero possimus repellat laudantium architecto cum animi, beatae ad dolorem quis solut.
      </p>
      <div className="faq-card">
        {visible.map((isVisible, index) => (
          <div key={index} className={`${isVisible? "card-visible":"faq-card-items"}`}>
            <div className="faq-visible" onClick={() => toggleVisibility(index)}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <img src={isVisible ? minusIcon : plusImg} alt="" />
            </div>
            {isVisible && (
              <p className='faq-invisible card-visible'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia consequuntur deleniti reiciendis culpa magnam, ducimus laudantium quis labore ab voluptates laborum enim optio accusamus corporis fugiat quae libero id alias!
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
