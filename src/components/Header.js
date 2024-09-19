import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-500 py-4 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="flex justify-center items-center space-x-3">
          <h1 className="text-2xl font-bold text-white">Healthcare Services Management</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
