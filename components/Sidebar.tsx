
import * as React from 'react';
import { Page } from '../types';
import { DashboardIcon, PinyinIcon, VocabIcon, SentenceIcon, ProfileIcon, LogoutIcon } from './icons/Icon';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <li
    onClick={onClick}
    className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
      isActive ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-primary-light hover:text-primary'
    }`}
  >
    {icon}
    <span className="ml-3 font-medium">{label}</span>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'dashboard', label: 'Bảng điều khiển', icon: <DashboardIcon /> },
    { id: 'pinyin', label: 'Luyện Pinyin', icon: <PinyinIcon /> },
    { id: 'vocabulary', label: 'Luyện Từ vựng', icon: <VocabIcon /> },
    { id: 'sentence', label: 'Luyện Đọc câu', icon: <SentenceIcon /> },
    { id: 'profile', label: 'Hồ sơ', icon: <ProfileIcon /> },
  ];

  return (
    <aside className="w-64 bg-white flex-shrink-0 p-4 border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center p-4 mb-5">
          <h1 className="text-xl font-bold text-primary">AI Hanyu Coach</h1>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                isActive={currentPage === item.id}
                onClick={() => setCurrentPage(item.id as Page)}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div>
         <NavItem
            icon={<LogoutIcon />}
            label="Đăng xuất"
            isActive={false}
            onClick={() => { /* Handle logout */ }}
          />
      </div>
    </aside>
  );
};

export default Sidebar;
