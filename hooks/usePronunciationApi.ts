
import * as React from 'react';
import { Assessment, Accuracy, WordResult, ToneDataPoint } from '../types';

const generateRandomAssessment = (text: string): Assessment => {
  const words = text.split(/\s+/);
  let overallScore = 0;
  
  const wordResults: WordResult[] = words.map(word => {
    const accuracyScore = Math.random();
    let accuracy: Accuracy;
    if (accuracyScore > 0.8) accuracy = Accuracy.Correct;
    else if (accuracyScore > 0.4) accuracy = Accuracy.Inaccurate;
    else accuracy = Accuracy.Wrong;

    const wordScore = accuracy === Accuracy.Correct ? 100 : accuracy === Accuracy.Inaccurate ? 60 : 20;
    overallScore += wordScore;

    return {
      word,
      accuracy,
      phonemes: [], // Mock phoneme data if needed
    };
  });
  
  const standardToneContour: ToneDataPoint[] = Array.from({length: 20}, (_, i) => ({ time: i * 50, pitch: 100 + Math.sin(i * 0.5) * 20 + (Math.random() - 0.5) * 5 }));
  const userToneContour: ToneDataPoint[] = Array.from({length: 20}, (_, i) => ({ time: i * 50, pitch: 100 + Math.sin(i * 0.5 + Math.random() * 0.5) * 20 + (Math.random() - 0.5) * 15 }));

  return {
    overallScore: Math.round(overallScore / words.length),
    accuracyScore: Math.round(Math.random() * 20 + 75),
    fluencyScore: Math.round(Math.random() * 20 + 78),
    completenessScore: Math.round(Math.random() * 10 + 90),
    words: wordResults,
    feedback: "Thanh điệu thứ 3 của bạn chưa xuống đủ thấp. Hãy thử lại! Âm 'zh' cần uốn lưỡi nhiều hơn.",
    standardToneContour,
    userToneContour,
  };
};

export const usePronunciationApi = () => {
  const [assessment, setAssessment] = React.useState<Assessment | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const assessPronunciation = React.useCallback((text: string) => {
    setIsLoading(true);
    setError(null);
    setAssessment(null);
    
    // Simulate API call
    setTimeout(() => {
      try {
        const result = generateRandomAssessment(text);
        setAssessment(result);
      } catch (e) {
        setError('Không thể đánh giá phát âm.');
      } finally {
        setIsLoading(false);
      }
    }, 1500 + Math.random() * 1000);
  }, []);
  
  const resetAssessment = React.useCallback(() => {
    setAssessment(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return { assessment, isLoading, error, assessPronunciation, resetAssessment };
};
