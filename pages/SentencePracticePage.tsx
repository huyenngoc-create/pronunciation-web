
import * as React from 'react';
import PronunciationAssessor from '../components/PronunciationAssessor';
import { SENTENCE_PRACTICE_ITEMS } from '../constants';

const SentencePracticePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SENTENCE_PRACTICE_ITEMS.length);
  };

  const currentItem = SENTENCE_PRACTICE_ITEMS[currentIndex];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Luyện đọc câu & Bài khóa</h2>
      <PronunciationAssessor key={currentItem.id} item={currentItem} onNext={handleNext} />
    </div>
  );
};

export default SentencePracticePage;
