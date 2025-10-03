
import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PracticeItem, Assessment, Accuracy } from '../types';
import { usePronunciationApi } from '../hooks/usePronunciationApi';
import Button from './ui/Button';
import Card from './ui/Card';
import { MicIcon, PlayIcon, StopIcon } from './icons/Icon';

interface PronunciationAssessorProps {
  item: PracticeItem;
  onNext: () => void;
}

const AccuracyPill: React.FC<{ score: number }> = ({ score }) => {
  let color = 'bg-gray-400';
  let text = 'N/A';
  if (score >= 85) {
    color = 'bg-success'; text = 'Tốt';
  } else if (score >= 60) {
    color = 'bg-warning'; text = 'Khá';
  } else if (score > 0) {
    color = 'bg-danger'; text = 'Cần cải thiện';
  }
  return <span className={`text-white text-xs font-semibold px-2.5 py-1 rounded-full ${color}`}>{text}</span>;
};


const PronunciationAssessor: React.FC<PronunciationAssessorProps> = ({ item, onNext }) => {
  const [isRecording, setIsRecording] = useState(false);
  const { assessment, isLoading, error, assessPronunciation, resetAssessment } = usePronunciationApi();
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  useEffect(() => {
    resetAssessment();
  }, [item, resetAssessment]);

  const handleRecord = async () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
      // In a real app, you would send the audio blob for assessment.
      // Here, we just trigger the mock API.
      assessPronunciation(item.text);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.start();
        setIsRecording(true);
      } catch (err) {
        console.error("Error accessing microphone:", err);
        alert("Không thể truy cập microphone. Vui lòng cấp quyền để sử dụng tính năng này.");
      }
    }
  };

  const renderWordWithFeedback = (assessment: Assessment) => {
    const colorMap = {
      [Accuracy.Correct]: 'text-success border-success',
      [Accuracy.Inaccurate]: 'text-warning border-warning',
      [Accuracy.Wrong]: 'text-danger border-danger',
      [Accuracy.Omission]: 'text-gray-400 border-gray-400',
    };
    return (
      <div className="flex flex-wrap gap-2 text-2xl">
        {assessment.words.map((word, index) => (
          <span key={index} className={`pb-1 border-b-2 ${colorMap[word.accuracy]}`}>
            {word.word}
          </span>
        ))}
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <div className="text-center">
          <p className="text-5xl font-bold tracking-wider mb-2">{item.text}</p>
          {item.pinyin && <p className="text-2xl text-light-text mb-2">{item.pinyin}</p>}
          <p className="text-lg text-primary font-medium">{item.translation}</p>
        </div>
      </Card>

      <div className="flex justify-center items-center space-x-4">
        <Button variant="secondary" size="lg">
            <PlayIcon/> Nghe mẫu
        </Button>
        <button
            onClick={handleRecord}
            disabled={isLoading}
            className={`relative rounded-full w-24 h-24 flex items-center justify-center transition-all duration-300
            ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-primary text-white hover:bg-primary-hover'}
            ${isLoading ? 'bg-gray-400 cursor-not-allowed' : ''}`}
        >
            {isLoading ? <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div> : (isRecording ? <StopIcon className="w-10 h-10"/> : <MicIcon className="w-10 h-10"/>)}
        </button>
        <Button onClick={() => { onNext(); resetAssessment(); }} size="lg">Bài tiếp theo &rarr;</Button>
      </div>

      {isLoading && <p className="text-center text-light-text">Đang phân tích, vui lòng chờ...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      
      {assessment && (
        <Card className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Kết quả đánh giá</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <div className="flex items-center gap-4 mb-4">
                    <h4 className="text-xl font-semibold">Điểm tổng thể:</h4>
                    <span className="text-3xl font-bold text-primary">{assessment.overallScore}/100</span>
                    <AccuracyPill score={assessment.overallScore} />
                </div>
                <div className="space-y-2 text-light-text">
                    <p>Độ chính xác: <span className="font-semibold text-dark-text">{assessment.accuracyScore}%</span></p>
                    <p>Độ lưu loát: <span className="font-semibold text-dark-text">{assessment.fluencyScore}%</span></p>
                    <p>Độ hoàn chỉnh: <span className="font-semibold text-dark-text">{assessment.completenessScore}%</span></p>
                </div>

                <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-2">Phân tích chi tiết:</h4>
                    {renderWordWithFeedback(assessment)}
                </div>

                 <div className="mt-6 bg-primary-light p-4 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-primary">Đề xuất sửa lỗi:</h4>
                    <p className="text-dark-text">{assessment.feedback}</p>
                </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Biểu đồ thanh điệu:</h4>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={assessment.standardToneContour} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" label={{ value: 'Thời gian (ms)', position: 'insideBottom', offset: -5 }}/>
                  <YAxis label={{ value: 'Cao độ', angle: -90, position: 'insideLeft' }}/>
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" data={assessment.standardToneContour} dataKey="pitch" name="Chuẩn" stroke="#8884d8" strokeWidth={2} dot={false} />
                  <Line type="monotone" data={assessment.userToneContour} dataKey="pitch" name="Của bạn" stroke="#82ca9d" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default PronunciationAssessor;
