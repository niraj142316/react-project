import './dropdownContent.css';
import { forwardRef } from 'react';

const DropdownContent = forwardRef((props,ref) => {

    const {children, open} = props;

  return (
    <div className={`dropdown-content ${open ? "content-open": null}`} ref={ref}>
      {children}
    </div>
  )
});

export default DropdownContent;
