import { Component } from 'react'
import './navbar.css'

class Navbar extends Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render () {
    return (
      <div id='nav' className={this.state.clicked ? '#nav active' : '#nav'}>
        <div className='nav-hammer'>
          <h1>Buddy Host</h1>
          <div id='mobile' onClick={this.handleClick}>
            <i
              id='bar'
              className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
        </div>
        <div>
          <ul id='menu'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li>
              <a href='/'>Help</a>
            </li>
            <li>
              <a href='/'>Pricing</a>
            </li>
          </ul>
        </div>
        <div className='user'>
          <a className='login' href='/login'>
            Login
          </a>
          <a className='signup' href='/signup'>
            Sign up for free
          </a>
        </div>
      </div>
    )
  }
}

export default Navbar

// import { Component, useState } from 'react';
// import './navbar.css';

// class Navbar extends Component {
//   state= {clicked:false }
//   // const [activeLink, setActiveLink] = useState("Home");

//   render(){
//   return (
//     <div className='nav'>
//       <h1>Buddy Host</h1>
//       <div className="menu">
//         <ul>
//           {["Home", "Blog", "Help", "Pricing"].map((item) => (
//             <li key={item}>
//               <a
//                 href={`/${item.toLowerCase()}`}
//                 className={activeLink === item ? 'active' : ''}
//                 onClick={() => setActiveLink(item)}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div id="mobile">
//         <i id='bar' className={this.state.clicked? "fas fa-time":"fas fa-bars"}></i>
//       </div>
//       <div className="user">
//         <a className='login' href="/login">Login</a>
//         <a className='signup' href="/signup">Sign up for free</a>
//       </div>
//     </div>
//   );
// }};

// export default Navbar;

// import { useState } from 'react';
// import './navbar.css';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("Home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className='nav'>
//       <h1>Buddy Host</h1>
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>
//       <div className={`menu ${menuOpen ? 'open' : ''}`}>
//         <ul>
//           {["Home", "Blog", "Help", "Pricing"].map((item) => (
//             <li key={item}>
//               <a
//                 href={`/${item.toLowerCase()}`}
//                 className={activeLink === item ? 'active' : ''}
//                 onClick={() => {
//                   setActiveLink(item);
//                   setMenuOpen(false); // Close the menu on link click
//                 }}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="user">
//         <a className='login' href="/login">Login</a>
//         <a className='signup' href="/signup">Sign up for free</a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { useState } from 'react';
// import './navbar.css';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("Home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className='nav'>
//       <h1>Buddy Host</h1>
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>
//       <div className={`menu ${menuOpen ? 'open' : ''}`}>
//         <ul>
//           {["Home", "Blog", "Help", "Pricing"].map((item) => (
//             <li key={item}>
//               <a
//                 href={`/${item.toLowerCase()}`}
//                 className={activeLink === item ? 'active' : ''}
//                 onClick={() => {
//                   setActiveLink(item);
//                   setMenuOpen(false); // Close the menu on link click
//                 }}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="user">
//         <a className='login' href="/login">Login</a>
//         <a className='signup' href="/signup">Sign up for free</a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { useState } from 'react';
// import './navbar.css';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("Home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className='nav'>
//       <h1>Buddy Host</h1>
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? '✖' : '☰'}
//       </div>
//       <div className={`menu ${menuOpen ? 'open' : ''}`}>
//         <ul>
//           {["Home", "Blog", "Help", "Pricing"].map((item) => (
//             <li key={item}>
//               <a
//                 href={`/${item.toLowerCase()}`}
//                 className={activeLink === item ? 'active' : ''}
//                 onClick={() => {
//                   setActiveLink(item);
//                   setMenuOpen(false); // Close the menu on link click
//                 }}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="user">
//         <a className='login' href="/login">Login</a>
//         <a className='signup' href="/signup">Sign up for free</a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
