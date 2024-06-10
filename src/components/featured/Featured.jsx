import './featured.css'
import Dropdown from '../Dropdown/Dropdown'
import DropdownItem from '../dropdownItems/DropdownItem'
import fileIcon from '../../assets/file.png'
import congratulationsIcon from '../../assets/congratulations.png'
import crossIcon from '../../assets/cross.png'
import rightIcon from '../../assets/right1.jpeg'
import { useState } from 'react'

const Featured = () => {
  const [textButton, setTextButton] = useState('Choosefile')
  const [textButtonSecond, setTextButtonSecond] = useState('Choosefile')
  const items = ['Choosefile', 'Options2', 'Options3', 'Options4', 'Options5']
  return (
    <div className='feature'>
      <span className='feature-span'>How it works</span>
      <h1>Featured on</h1>
      <p className='feature-paragraph'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, vero
        fugit, libero possimus repellat laudantium
      </p>
      <div className='feature-cards'>
        <div className='feature-upload-card'>
          <div className='feature-card'>
            <div className='feature-btn-dropdown'>
              <input type='text' placeholder='Link - name' />
              <Dropdown
                buttonText={textButton}
                content={
                  <>
                    {items.map(item => (
                      <DropdownItem
                        key={item}
                        onClick={() => {
                          setTextButton(item)
                        }}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </>
                }
              />
            </div>
            <div className='feature-container'>
              <img className='feature-firstImg' src={fileIcon} alt='' />
              <p className='feature-para'>Drag and drop file here</p>
              <button className='feature-btn-sub'>Upload File</button>
            </div>
          </div>
          <div className='feature-card-item'>
            <h2 className='feature-h2'>Upload</h2>
            <p className='feature-p'>
              Drag & drop an HTML, ZIP or PDF into the upload box
            </p>
            <div className='feature-group'>
              <p>Learn More</p>
              <img className='feature-upload' src={rightIcon} alt='' />
            </div>
          </div>
        </div>
        <div className='feature-upload-card feature-customize-card'>
          <div className='feature-card'>
            <div className='feature-btn-dropdown'>
              <input type='text' placeholder='File - name' />
              <Dropdown
                buttonText={textButtonSecond}
                content={
                  <>
                    {items.map(item => (
                      <DropdownItem
                        key={item}
                        onClick={() => {
                          setTextButtonSecond(item)
                        }}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </>
                }
              />
            </div>
            <div className='feature-container'>
              <div className='feature-btn-dropdown feature-input'>
                <input type='text' placeholder='Demo 1' />
                <img className='feature-inputImg' src={crossIcon} alt='' />
              </div>
              <div className='feature-btn'>
                <button className='feature-mid'>Upload File</button>
                <button className='feature-mid-sub'>Upload</button>
              </div>
            </div>
          </div>
          <div className='feature-card-item'>
            <h2 className='feature-h2'>Customise</h2>
            <p className='feature-p'>Type in a link-name or leave it a blank</p>
            <div className='feature-group'>
              <p>Learn More</p>
              <img className='feature-customise' src={rightIcon} alt='' />
            </div>
          </div>
        </div>
        <div className='feature-upload-card feature-publish-card'>
          <div className='feature-card'>
            <div className='feature-btn-dropdown feature-url-cross'>
              <span className='feature-url'>URL</span>
              <div className='feature-input-sec'>
                <input type='text' placeholder='www.url.com' />
                <img className='feature-inputImg' src={crossIcon} alt='' />
              </div>
            </div>
            <div className='feature-container'>
              <img
                className='feature-lastImg feature-firstImg'
                src={congratulationsIcon}
                alt=''
              />
              <h3>Congratulations!</h3>
              <p className='feature-paraLast'>Your file is ready to publish</p>
            </div>
          </div>
          <div className='feature-card-item'>
            <h2 className='feature-h2'>Publish</h2>
            <p className='feature-p'>
              Hit the Upload button to get a shareable link
            </p>
            <div className='feature-group'>
              <p>Learn More</p>
              <img className='feature-publish' src={rightIcon} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
