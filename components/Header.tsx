
import React from 'react';
import { ProfileIcon } from './icons/Icon';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-dark-text">Chào mừng trở lại!</h2>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold">Nguyễn Văn A</p>
          <p className="text-sm text-light-text">Cấp độ: Sơ cấp 2</p>
        </div>
        <img
          src="https://picsum.photos/id/237/200/200"
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-primary"
        />
      </div>
    </header>
  );
};

export default Header;
