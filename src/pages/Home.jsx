import React from 'react';
import {
  FaDollarSign,
  FaCube,
  FaArrowRight,
  FaUsers,
  FaSyncAlt,
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-base-content">ស្ថានភាពលក់ថ្ងៃនេះ</h1>
        <button className="btn btn-success btn-sm">
          <FaSyncAlt className="w-4 h-4 mr-1" />
          Reload
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1: Today Sale */}
        <div className="card bg-base-100 shadow">
          <div className="card-body flex flex-row justify-between items-center">
            <div>
              <p className="text-sm text-base-content/60">ចំនួនលក់ថ្ងៃនេះ</p>
              <h2 className="text-2xl font-bold">0$</h2>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaDollarSign className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Card 2: Stock In */}
        <div className="card bg-base-100 shadow">
          <div className="card-body flex flex-row justify-between items-center">
            <div>
              <p className="text-sm text-base-content/60">ចំនួនបញ្ចូល</p>
              <h2 className="text-2xl font-bold">0</h2>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaCube className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Card 3: Stock Out */}
        <div className="card bg-base-100 shadow">
          <div className="card-body flex flex-row justify-between items-center">
            <div>
              <p className="text-sm text-base-content/60">ចំនួននាំចេញ</p>
              <h2 className="text-2xl font-bold">4</h2>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaArrowRight className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Card 4: New Customers */}
        <div className="card bg-base-100 shadow">
          <div className="card-body flex flex-row justify-between items-center">
            <div>
              <p className="text-sm text-base-content/60">អតិថិជនថ្មី</p>
              <h2 className="text-2xl font-bold">3</h2>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaUsers className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
