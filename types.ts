
export type Page = 'dashboard' | 'pinyin' | 'vocabulary' | 'sentence' | 'profile';

export enum Accuracy {
  Correct = 'Correct',
  Inaccurate = 'Inaccurate',
  Wrong = 'Wrong',
  Omission = 'Omission'
}

export interface WordResult {
  word: string;
  accuracy: Accuracy;
  phonemes: { phoneme: string; accuracy: Accuracy }[];
}

export interface ToneDataPoint {
  time: number;
  pitch: number;
}

export interface Assessment {
  overallScore: number;
  accuracyScore: number;
  fluencyScore: number;
  completenessScore: number;
  words: WordResult[];
  feedback: string;
  standardToneContour: ToneDataPoint[];
  userToneContour: ToneDataPoint[];
}

export interface PracticeItem {
  id: string;
  text: string;
  pinyin?: string;
  translation: string;
  audioSrc: string; // URL to standard pronunciation audio
}
