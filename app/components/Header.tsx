import React from 'react';

interface HeaderProp {
  logo: string;
  title: string;
  login: string;
}

const Header: React.FC<HeaderProp> = ({ logo, title, login }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2 object-cover" />
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About us</li>
          <li className="hover:text-blue-600 cursor-pointer">Service</li>
        </ul>
      </nav>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">{login}</button>
    </div>
  );
};

export default Header;
