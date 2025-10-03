
import { PracticeItem } from './types';

export const PINYIN_PRACTICE_ITEMS: PracticeItem[] = [
  { id: 'p1', text: 'bō', translation: 'Thanh mẫu "b"', audioSrc: '/audio/bo.mp3' },
  { id: 'p2', text: 'pō', translation: 'Thanh mẫu "p" (bật hơi)', audioSrc: '/audio/po.mp3' },
  { id: 'p3', text: 'mā', translation: 'Thanh điệu 1', audioSrc: '/audio/ma1.mp3' },
  { id: 'p4', text: 'má', translation: 'Thanh điệu 2', audioSrc: '/audio/ma2.mp3' },
  { id: 'p5', text: 'mǎ', translation: 'Thanh điệu 3', audioSrc: '/audio/ma3.mp3' },
  { id: 'p6', text: 'zhī', translation: 'Âm uốn lưỡi "zh"', audioSrc: '/audio/zhi.mp3' },
  { id: 'p7', text: 'chī', translation: 'Âm uốn lưỡi "ch" (bật hơi)', audioSrc: '/audio/chi.mp3' },
  { id: 'p8', text: 'ān', translation: 'Vận mẫu mũi trước "an"', audioSrc: '/audio/an.mp3' },
  { id: 'p9', text: 'āng', translation: 'Vận mẫu mũi sau "ang"', audioSrc: '/audio/ang.mp3' },
];

export const VOCABULARY_PRACTICE_ITEMS: PracticeItem[] = [
  { id: 'v1', text: '你好', pinyin: 'nǐ hǎo', translation: 'Xin chào', audioSrc: '/audio/nihao.mp3' },
  { id: 'v2', text: '谢谢', pinyin: 'xièxie', translation: 'Cảm ơn', audioSrc: '/audio/xiexie.mp3' },
  { id: 'v3', text: '不客气', pinyin: 'bú kèqi', translation: 'Đừng khách sáo', audioSrc: '/audio/bukeqi.mp3' },
  { id: 'v4', text: '图书馆', pinyin: 'túshūguǎn', translation: 'Thư viện', audioSrc: '/audio/tushuguan.mp3' },
  { id: 'v5', text: '吃饭', pinyin: 'chī fàn', translation: 'Ăn cơm', audioSrc: '/audio/chifan.mp3' },
];

export const SENTENCE_PRACTICE_ITEMS: PracticeItem[] = [
  { id: 's1', text: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', translation: 'Thời tiết hôm nay thế nào?', audioSrc: '/audio/sentence1.mp3' },
  { id: 's2', text: '我去商店买东西。', pinyin: 'Wǒ qù shāngdiàn mǎi dōngxi.', translation: 'Tôi đi cửa hàng mua đồ.', audioSrc: '/audio/sentence2.mp3' },
  { id: 's3', text: '你在哪儿学习汉语？', pinyin: 'Nǐ zài nǎr xuéxí Hànyǔ?', translation: 'Bạn học tiếng Hán ở đâu?', audioSrc: '/audio/sentence3.mp3' },
];
