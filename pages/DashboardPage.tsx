
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';

const progressData = [
  { name: 'T1', 'Điểm trung bình': 75 },
  { name: 'T2', 'Điểm trung bình': 78 },
  { name: 'T3', 'Điểm trung bình': 82 },
  { name: 'T4', 'Điểm trung bình': 80 },
  { name: 'T5', 'Điểm trung bình': 85 },
  { name: 'T6', 'Điểm trung bình': 88 },
];

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <h4 className="text-light-text font-medium">Điểm trung bình</h4>
          <p className="text-3xl font-bold text-primary">85/100</p>
        </Card>
        <Card>
          <h4 className="text-light-text font-medium">Buổi học tuần này</h4>
          <p className="text-3xl font-bold text-dark-text">5/7</p>
        </Card>
        <Card>
          <h4 className="text-light-text font-medium">Huy hiệu đạt được</h4>
          <p className="text-3xl font-bold text-dark-text">12</p>
        </Card>
        <Card>
          <h4 className="text-light-text font-medium">Chuỗi ngày học</h4>
          <p className="text-3xl font-bold text-success">🔥 15 ngày</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h3 className="text-xl font-bold mb-4">Tiến độ học tập</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Điểm trung bình" fill="#1d4ed8" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="text-xl font-bold mb-4">Lỗi thường gặp</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Thanh điệu 3 (mǎ)</p>
              <ProgressBar value={78} color="bg-danger" />
              <p className="text-right text-sm text-light-text">78% sai</p>
            </div>
            <div>
              <p className="font-semibold">Âm bật hơi (p, t, k)</p>
              <ProgressBar value={65} color="bg-warning" />
              <p className="text-right text-sm text-light-text">65% sai</p>
            </div>
            <div>
              <p className="font-semibold">Âm uốn lưỡi (zh, ch, sh)</p>
              <ProgressBar value={52} color="bg-yellow-500" />
              <p className="text-right text-sm text-light-text">52% sai</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
          <h3 className="text-xl font-bold mb-4">Bài tập đề xuất</h3>
          <div className="space-y-3">
            <div className="p-3 bg-primary-light rounded-lg flex justify-between items-center">
                <p className="font-semibold text-primary">Luyện tập biến điệu thanh ba</p>
                <button className="text-sm font-bold text-primary hover:underline">Bắt đầu</button>
            </div>
            <div className="p-3 bg-primary-light rounded-lg flex justify-between items-center">
                <p className="font-semibold text-primary">Phân biệt thanh mẫu 'b' và 'p'</p>
                <button className="text-sm font-bold text-primary hover:underline">Bắt đầu</button>
            </div>
          </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
