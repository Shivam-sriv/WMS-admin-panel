import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
 
  return (
  <>  
  <footer id="footer" class="footer">
    <div class="copyright">
      &copy;{new Date(). getFullYear() } Copyright <strong><a href='https://bfcsofttech.com/' target='_blank'>bfcsofttech</a></strong>. All Rights Reserved
    </div>
    
  </footer>
  </>
  );
}

export default Footer;