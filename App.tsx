
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import PinyinPracticePage from './pages/PinyinPracticePage';
import VocabularyPracticePage from './pages/VocabularyPracticePage';
import SentencePracticePage from './pages/SentencePracticePage';
import ProfilePage from './pages/ProfilePage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'pinyin':
        return <PinyinPracticePage />;
      case 'vocabulary':
        return <VocabularyPracticePage />;
      case 'sentence':
        return <SentencePracticePage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-light-bg font-sans">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-light-bg p-6 md:p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
