
import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ProfilePage: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Hồ sơ cá nhân</h2>
      <Card className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src="https://picsum.photos/id/237/200/200"
                alt="User Avatar"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary"
              />
              <button className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 hover:bg-primary-hover">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">Biệt danh</label>
            <input
              type="text"
              id="nickname"
              defaultValue="Nguyễn Văn A"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">Cấp độ học tập</label>
            <select
              id="level"
              defaultValue="Sơ cấp 2"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option>Mới bắt đầu</option>
              <option>Sơ cấp 1</option>
              <option>Sơ cấp 2</option>
              <option>Trung cấp 1</option>
            </select>
          </div>
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">Tiếng mẹ đẻ</label>
            <input
              type="text"
              id="language"
              defaultValue="Tiếng Việt"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <Button size="lg">Lưu thay đổi</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ProfilePage;
