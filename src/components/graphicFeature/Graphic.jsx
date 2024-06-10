import './graphic.css';
import analyticsIcon from '../../assets/analytics.jpeg';
import analyticsImg from '../../assets/analyticsImg2.png';
import editImg from '../../assets/editImg2.jpeg';
import editIcon from '../../assets/edit2.png';
import passwordImg from '../../assets/passwordImg.jpg'
import passwordIcon from '../../assets/password1.png';
import qrIcon from '../../assets/qrImg.jpeg';
import qrImg from '../../assets/password2.jpeg';

const Graphic = () => {
  return (
    <div className='graphic'>
      <span className='graphic-span'>Features</span>
      <h1>Graphic Features</h1>
      <p className='graphic-p'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, vero fugit, libero possimus repellat laudantium architecto cum animi, beatae ad dolorem quis solut
      </p>

      <div className="graphic-container">
        <div className="graphic-first-container">
            <div className="graphic-upper">
                <img className='graphic-profile' src={analyticsIcon} alt="" />
                <div className="graphic-texts">
                    <h3 className='graphic-first-head'>Analytics</h3>
                    <p className='graphic-first-head'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat voluptas accusantium sit aspernatur quae deserunt delectus beatae, tempore dolorem nulla nihil ipsum? Fugit suscipit totam perferendis sequi magni vero!</p>
                </div>
            </div>
            <div className="graphic-lower">
                <img src={analyticsImg} alt="" />
            </div>
        </div>
        <div className="graphic-first-container graphic-second">
            <div className="graphic-upper">
                <img className='graphic-profile' src={editIcon} alt="" />
                <div className="graphic-texts">
                    <h3>Edit Mode</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat voluptas accusantium sit aspernatur quae deserunt delectus beatae, tempore dolorem nulla nihil ipsum? Fugit suscipit totam perferendis sequi magni vero!</p>
                </div>
            </div>
            <div className="graphic-lower">
                <img src={editImg} alt="" />
            </div>
        </div>
        <div className="graphic-first-container graphic-third">
            <div className="graphic-upper">
                <img className='graphic-profile' src={passwordIcon} alt="" />
                <div className="graphic-texts">
                    <h3>Password Protect</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat voluptas accusantium sit aspernatur quae deserunt delectus beatae, tempore dolorem nulla nihil ipsum? Fugit suscipit totam perferendis sequi magni vero!</p>
                </div>
            </div>
            <div className="graphic-lower">
                <img src={passwordImg} alt="" />
            </div>
        </div>
        <div className="graphic-first-container graphic-forth">
            <div className="graphic-upper">
                <img className='graphic-profile' src={qrImg} alt="" />
                <div className="graphic-texts">
                    <h3>QR Codes</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat voluptas accusantium sit aspernatur quae deserunt delectus beatae, tempore dolorem nulla nihil ipsum? Fugit suscipit totam perferendis sequi magni vero!</p>
                </div>
            </div>
            <div className="graphic-lower">
                <img src={qrIcon} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Graphic
