
import React from 'react';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Copyright className="w-5 h-5" />
            <span>{new Date().getFullYear()} OrderChat. All Rights Reserved.</span>
          </div>
          <div>
            <p>Business Address:</p>
            <p>OrderChat</p>
            <p>1130 Kings Cross, Brunswick, GA, 31525</p>
            <p>Phone: 303-941-2981</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
