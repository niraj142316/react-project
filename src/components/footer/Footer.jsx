import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-upper">
        <div className="footer-left">
            <h1>Publish to the web in seconds</h1>
        </div>
        <div className="footer-right">
            <p className='footer-right-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem non, veniam numquam deserunt. Pariatur laboriosam distinctio laborum unde quas!</p>
            <div className="footer-upload">
                <div className="footer-contact">
                    <input type="text" placeholder='Enter your work'/>
                    <button className='footer-submit-btn'>Submit</button>
                </div>
                <button className='footer-upload-btn'>Upload for free</button>
            </div>
        </div>
      </div>
      <div className="footer-lower">
        <div className="footer-lower-upper">
            <div className="footer-lower-left">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/faq">FAQs</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-lower-right">
                {/* <img className='footer-logo' src="https://th.bing.com/th/id/OIP.wB_ndwFSKJQXUcrkodpXJQHaHa?w=209&h=209&c=7&r=0&o=5&pid=1.7" alt="" /> */}
                <img className='footer-logo-i' src="https://img.icons8.com/?size=30&id=dz63urxyxSdO&format=png" alt="" />
                <img className='footer-logo-f' src="https://img.icons8.com/?size=32&id=at5z80CsOiPA&format=png" alt="" />
            </div>
        </div>
        <hr />
        <div className="footer-lower-lower">
            <p>Copyrights© 2023 All Rights Reserved</p>
            <div className="footer-lower-lower-right">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
