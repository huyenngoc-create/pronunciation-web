
import React, { useState } from 'react';
import PronunciationAssessor from '../components/PronunciationAssessor';
import { VOCABULARY_PRACTICE_ITEMS } from '../constants';

const VocabularyPracticePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % VOCABULARY_PRACTICE_ITEMS.length);
  };

  const currentItem = VOCABULARY_PRACTICE_ITEMS[currentIndex];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Luyện tập Từ vựng</h2>
      <PronunciationAssessor key={currentItem.id} item={currentItem} onNext={handleNext} />
    </div>
  );
};

export default VocabularyPracticePage;
