import { useState } from 'react';
import './pricing.css';
import blueIcon from '../../assets/blueTick1.png';
import purpleIcon from '../../assets/purpleTick.png';
import purpleImg from '../../assets/purpleImg.png';
import goldIcon from '../../assets/goldTick.jpeg';
import blueImg from '../../assets/blueImg2.png';
import goldImg from '../../assets/goldImg2.jpg';

const Pricing = () => {
    const [plan, setPlan] = useState("monthly");

    return (
        <div className='price'>
            <span className='price-span'>Plans</span>
            <h1>Pricing Plan</h1>
            <p className='price-p'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, vero fugit, libero possimus repellat laudantium architecto cum animi, beatae ad dolorem quis solut
            </p>
            <div className="price-plans">
                <button 
                    onClick={() => setPlan("monthly")} 
                    className={`${plan === "monthly" ? "active" : ""}`}>
                    Monthly
                </button>
                <button 
                    onClick={() => setPlan("yearly")} 
                    className={`${plan === "yearly" ? "active" : ""}`}>
                    Yearly
                </button>
            </div>
            <div className="price-container">
                <div className="price-card">
                    <div className="price-upper">
                        <img src={purpleImg} alt="" />
                        <div className="price-sub-upper">
                            <h2 className='price-h2'>Tiny</h2>
                            <div className="price-sub-sub">
                                <h2 className='price-h2'>$5</h2>
                                <p>per month</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="price-lower">
                        <p className='price-lower-p1'>Billed $60 per year</p>
                        <p className='price-lower-p2'>Perfect for single professional link.</p>
                        <div className="price-sub-lower tiny-price-lower">
                            <div className="price-sub-l">
                                <img className='price-tick' src={purpleIcon} alt="" />
                                <p className='price-lower-p3'>1 active project</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={purpleIcon} alt="" />
                                <p className='price-lower-p3'>25 mb file uploads</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={purpleIcon} alt="" />
                                <p className='price-lower-p3'>10,000 visitors/<span>month</span></p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={purpleIcon} alt="" />
                                <p className='price-lower-p3'>Remove Tinny Host banner</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={purpleIcon} alt="" />
                                <p className='price-lower-p3'>Built - in analytics</p>
                            </div>
                        </div>
                        <button className='price-tiny-btn'>Get Tiny</button>
                    </div>
                </div>
                <div className="price-solo-card">
                    <h3 className='price-popular'>Most popular</h3>
                <div className="price-solo">
                    <div className="price-upper">
                        <img src={blueImg} alt="" />
                        <div className="price-sub-upper">
                            <h2 className='price-h2'>Solo</h2>
                            <div className="price-sub-sub">
                                <h2 className='price-h2'>$14</h2>
                                <p>per month</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="price-lower">
                        <p className='price-lower-p1'>Billed $156 per year</p>
                        <p className='price-lower-p2'>Great for individuals and small suites.</p>
                        <div className="price-sub-lower solo-price-lower">
                            <div className="price-sub-l">
                                <img className='price-tick' src={blueIcon} alt="" />
                                <p className='price-lower-p3'>5 active project</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={blueIcon} alt="" />
                                <p className='price-lower-p3'>75 mb file uploads</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={blueIcon} alt="" />
                                <p className='price-lower-p3'>100,000 visitors/month</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={blueIcon} alt="" />
                                <p className='price-lower-p3'>Remove Tinny Host banner</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={blueIcon} alt="" />
                                <p className='price-lower-p3'>Custom domains</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={blueIcon} alt="" />
                                <p className='price-lower-p3'>Built - in analytics</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={blueIcon} alt="" />
                                <p className='price-lower-p3'>Edit mode</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={blueIcon} alt="" />
                                <p className='price-lower-p3'>Password protection</p>
                            </div>
                        </div>
                        <button className='price-solo-btn'>Get Solo</button>
                    </div>
                </div>
                </div>
                <div className="price-card">
                    <div className="price-upper">
                        <img src={goldImg} alt="" />
                        <div className="price-sub-upper">
                            <h2 className='price-h2'>Pro</h2>
                            <div className="price-sub-sub">
                                <h2 className='price-h2'>$31</h2>
                                <p>per month</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="price-lower">
                        <p className='price-lower-p1'>Billed $372 per year</p>
                        <p className='price-lower-p2'>For freelancers, agencies & organizations.</p>
                        <div className="price-sub-lower price-pro-lower">
                            <div className="price-sub-l">
                                <img className='price-tick' src={goldIcon} alt="" />
                                <p className='price-lower-p3'>12 active project</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={goldIcon} alt="" />
                                <p className='price-lower-p3'>10,000 mb file uploads</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={goldIcon} alt="" />
                                <p className='price-lower-p3'>500,000 visitors/<span>month</span></p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={goldIcon} alt="" />
                                <p className='price-lower-p3'>Remove Tinny Host banner</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={goldIcon} alt="" />
                                <p className='price-lower-p3'>Custom domains</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={goldIcon} alt="" />
                                <p className='price-lower-p3'>Built - in analytics</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={goldIcon} alt="" />
                                <p className='price-lower-p3'>Edit mode</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={goldIcon} alt="" />
                                <p className='price-lower-p3'>Password protection</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={goldIcon} alt="" />
                                <p className='price-lower-p3'>Capture emails</p>
                            </div>
                            <div className="price-sub-l">
                                <img className='price-tick' src={goldIcon} alt="" />
                                <p className='price-lower-p3'>Add team members</p>
                            </div>
                        </div>
                        <button className='price-pro-btn'>Get Pro</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;

