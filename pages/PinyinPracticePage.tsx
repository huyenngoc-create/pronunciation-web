
import React, { useState } from 'react';
import PronunciationAssessor from '../components/PronunciationAssessor';
import { PINYIN_PRACTICE_ITEMS } from '../constants';

const PinyinPracticePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PINYIN_PRACTICE_ITEMS.length);
  };

  const currentItem = PINYIN_PRACTICE_ITEMS[currentIndex];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Luyện tập Pinyin</h2>
      <PronunciationAssessor key={currentItem.id} item={currentItem} onNext={handleNext} />
    </div>
  );
};

export default PinyinPracticePage;
