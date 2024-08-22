import React from 'react';

interface FooterProps {
  text: string;
  links: { name: string; url: string }[];
}

const Footers: React.FC<FooterProps> = ({ text, links }) => {
  return (
    <footer className="bg-gray-100 p-4 text-center">
      <p className="mb-4">{text}</p>
      <ul className="flex justify-center space-x-4">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-blue-500 hover:underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footers;
