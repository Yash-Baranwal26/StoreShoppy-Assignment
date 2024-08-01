import './App.css';
import Sidebar from './Sidebar';
import { FaBell, FaSearch, FaUser } from 'react-icons/fa';
import { FaUniversity, FaAmazon, FaWallet, FaCheckCircle, FaDotCircle } from 'react-icons/fa';

function App() {
  const activities = [
    { date: '23 JUL', day: 'Tuesday', icon: <FaUser />, description: '1 contact created' },
    { date: '9 JUL', day: 'Tuesday', icon: <FaCheckCircle />, description: '₹300.00 credited into the account' },
    { date: '1 JUL', day: 'Monday', icon: <FaCheckCircle />, description: '1 payout worth ₹2,36,695.00 created' },
    { date: '24 JUN', day: 'Monday', icon: <FaCheckCircle />, description: 'Older activity description' },
  ];
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
      <div className="bg-gray-900 min-h-screen text-white">
      <header className="flex justify-end items-center p-4 bg-gray-900 shadow-md">
        <button className="bg-blue-600 px-4 py-2 rounded mr-4">+ PAYOUT</button>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <FaSearch className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <FaBell className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <FaUser className="w-6 h-6" />
          </button>
        </div>
      </header>


      <div className="max-w-3xl mx-auto p-8">
      <div className="mb-6">
    <div className="flex justify-between items-center">
        <div className="text-sm mb-2">
            <span className="font-bold">RazorpayX Lite</span>
            <span className="ml-2 text-gray-400">as of a few seconds ago</span>
        </div>
    </div>
    <div className="flex justify-between items-center mb-4">
        <div className="text-3xl font-bold border-r-2 border-white pr-40">
            <span className='text-xl font-light'>₹</span>100<span className='text-xl font-light'>.09</span>
        </div>
        <button className="text-blue-500 mr-40">+ Add balance</button>
    </div>
</div>
      <div className="flex items-center text-sm text-gray-400 border border-dotted border-gray-400 p-3">
    <span className="mr-2">🎉</span>
    <span>You're all caught up. There are no more items pending on you.</span>
</div>

<h2 className="text-lg font-bold mb-4">Onboarding updates (1)</h2>
      
{/* Onboarding updates */}
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <div className="flex items-center mb-2">
          <div className="bg-blue-500 p-4 rounded-lg">
            <FaUniversity className="text-white text-3xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold">Open your RazorpayX account.</h3>
            <p className="text-gray-400">Don't let bankache come in the way of your growth. Apply for your RazorpayX account with a few basic details.</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Start application →</button>
          <div className="ml-auto flex items-center text-gray-400">
            <span className="mr-2">0/4</span>
            <div className="bg-gray-600 h-2 w-32 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='w-full flex border-t-2 border-green-400 bg-slate-800 pb-4'>

        <div className='w-[30%]'>
            <h1 className=' text-white text-md mx-4 my-2'>
            Amazon Instant Settlements
            </h1>
            </div>

            <div className="w-[70%] mt-2 flex items-start">
    <span className="text-blue-500 mr-2 text-4xl ">&#8226;</span>
    <div className="text-sm">
        Let's get you started<br />
        Complete your application and get instant access to your amazon payouts
        <br />
        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
    </div>
</div>

      
    </div>

      <div className="w-full flex border-t-2 border-green-400 bg-slate-800 pb-4 mt-3">
        <div className="flex">
          <div className="w-1/3">
            <h1 className="text-white text-lg p-3">Creating payouts in Live mode</h1>
          </div>
          <div className="w-2/3">
            <div className="flex flex-col ml-4 mt-2 ">
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 w-4 h-4 mr-2" />
                <p className="text-gray-300">Add balance to create payouts in Live mode</p>
              </div>
              <div className="flex items-center mb-2">
                <FaDotCircle className="text-blue-500 w-4 h-4 mr-2" />
                <p className="text-gray-300">Create payout</p>
              </div>
              <p className="text-gray-400 mb-4">There are multiple ways in which you can create the first payout:</p>
              <div className="flex space-x-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-md">
                  MAKE A PAYOUT
                </button>
                <button className="bg-gray-700 hover:bg-gray-900 text-white text-xs px-4 py-2 rounded-md">
                  SHOW APPS FOR ME
                </button>
                <button className="bg-gray-700 hover:bg-gray-900 text-white text-xs px-4 py-2 rounded-md">
                  API PAYOUTS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* Insights Part */}
      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Insights</h2>
                <a href="#" className="text-blue-500">Detailed insights &rarr;</a>
            </div>
            <hr/>
            <div className="text-center mt-2">
                <div className="text-left mb-2">
          <div className="text-sm text-gray-400">Payout volume - last 30 days</div>
          <div className="text-xl font-bold"><span className='text-sm font-light'>₹</span>236,695<span className='text-sm font-light'>.00</span></div>
        </div>
                <div className="h-24 relative">
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gray-800"></div>
                    <svg className="absolute bottom-0 left-0 right-0 w-full h-full">
                        <polyline 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="2" 
                            points="0,100 50,10 100,100" 
                        />
                    </svg>
                </div>
            </div>
        </div>

        {/* Activity Feed */}
        <div className=" min-h-screen mt-3 items-center justify-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Activity Feed</h2>
          <button className="text-blue-500 hover:underline">Show filters</button>
        </div>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-900 p-4 rounded-md"
            >
              <div className=' border-r-2 border-white pr-40'>
                <div className="font-medium">{activity.date}</div>
                <div className="text-sm text-gray-400">{activity.day}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-sm">{activity.icon}</div>
                <div className="text-sm">{activity.description}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 w-full py-2 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600">
          Look for Older Activities
        </button>
      </div>
    </div>


      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
