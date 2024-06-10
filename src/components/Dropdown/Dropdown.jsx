// import { useEffect, useRef, useState } from 'react';
// import DropdownButton from '../dropdownButton/DropdownButton';
// import DropdownContent from '../dropdownContent/DropdownContent';
// import DropdownItem from '../dropdownItems/DropdownItem';
// import './dropdown.css';

// const Dropdown = ({buttonText,content}) => {
//     const [open, setOpen]=useState(false);

//     const dropdownRef = useRef();
//     const buttonRef =useRef();
//     const contentRef=useRef();

//     const toggleDropdown=()=>{
//        setOpen((open)=>!open); 
//     }

//     useEffect(()=>{
//         const handler=(event)=>{
//             if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
//                 setOpen(false);
//             }
//         } 
//         document.addEventListener("click",handler);

//         return ()=>{
//             document.removeEventListener("click",handler);
//         }
//     }, [dropdownRef]);

//   return (
//     <div className='dropdown' ref={dropdownRef} >
//         <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
//             {buttonText}
//         </DropdownButton>
//         <DropdownContent ref={contentRef} open={open} >
//             {content}
//         </DropdownContent>
//     </div>
//   )
// }

// export default Dropdown;

// import { useEffect, useRef, useState, React } from 'react';
// import DropdownButton from '../dropdownButton/DropdownButton';
// import DropdownContent from '../dropdownContent/DropdownContent';
// import './dropdown.css';

// const Dropdown = ({ buttonText, content }) => {
//   const [open, setOpen] = useState(false);

//   const dropdownRef = useRef();
//   const buttonRef = useRef();
//   const contentRef = useRef();

//   const toggleDropdown = () => {
//     setOpen((open) => !open);
//   }

//   useEffect(() => {
//     const handler = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     }

//     if (open) {
//       document.addEventListener("click", handler);
//     }

//     return () => {
//       document.removeEventListener("click", handler);
//     }
//   }, [open]);

//   const handleContentClick = (callback) => {
//     callback();
//     setOpen(false);
//     document.removeEventListener("click", () => setOpen(false));
//   };

//   return (
//     <div className='dropdown' ref={dropdownRef}>
//       <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
//         {buttonText}
//       </DropdownButton>
//       <DropdownContent ref={contentRef} open={open}>
//         {React.Children.map(content, (child) =>
//           React.cloneElement(child, {
//             onClick: () => handleContentClick(child.props.onClick),
//           })
//         )}
//       </DropdownContent>
//     </div>
//   );
// }

// export default Dropdown;

// import React,{ useEffect, useRef, useState } from 'react';
// import DropdownButton from '../dropdownButton/DropdownButton';
// import DropdownContent from '../dropdownContent/DropdownContent';
// import './dropdown.css';

// const Dropdown = ({ buttonText, content }) => {
//   const [open, setOpen] = useState(false);

//   const dropdownRef = useRef();
//   const buttonRef = useRef();
//   const contentRef = useRef();

//   const toggleDropdown = () => {
//     setOpen((open) => !open);
//   }

//   useEffect(() => {
//     const handler = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     }

//     if (open) {
//       document.addEventListener("click", handler);
//     }

//     return () => {
//       document.removeEventListener("click", handler);
//     }
//   }, [open]);

//   const handleContentClick = (callback) => {
//     callback();
//     setOpen(false);
//     document.removeEventListener("click", () => setOpen(false));
//   };

//   return (
//     <div className='dropdown' ref={dropdownRef}>
//       <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
//         {buttonText}
//       </DropdownButton>
//       <DropdownContent ref={contentRef} open={open}>
//         {React.Children.toArray(content).map((child) =>
//           React.cloneElement(child, {
//             onClick: () => handleContentClick(child.props.onClick),
//           })
//         )}
//       </DropdownContent>
//     </div>
//   );
// }

// export default Dropdown;


import React, { useEffect, useRef, useState } from 'react';
import DropdownButton from '../dropdownButton/DropdownButton';
import DropdownContent from '../dropdownContent/DropdownContent';
import './dropdown.css';

const Dropdown = ({ buttonText, content }) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();
  const buttonRef = useRef();
  const contentRef = useRef();

  const toggleDropdown = () => {
    setOpen((open) => !open);
  }

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("click", handler);
    }

    return () => {
      document.removeEventListener("click", handler);
    }
  }, [open]);

  const handleContentClick = (callback) => {
    callback();
    setOpen(false);
  };

  return (
    <div className='dropdown' ref={dropdownRef}>
      <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
        {buttonText}
      </DropdownButton>
      <DropdownContent ref={contentRef} open={open}>
        {React.Children.toArray(content).map((child) =>
          React.cloneElement(child, {
            onClick: () => handleContentClick(child.props.onClick),
          })
        )}
      </DropdownContent>
    </div>
  );
}

export default Dropdown;
