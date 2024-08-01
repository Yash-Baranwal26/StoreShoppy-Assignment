import React from 'react'
import { FaHome, FaMoneyBill, FaReceipt, FaUserFriends, FaRegMoneyBillAlt, FaFileInvoiceDollar, FaFileSignature, FaPaperPlane, FaUserTie, FaChartBar } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="fixed h-screen bg-gray-800 text-white w-64">
      <div className="flex items-center justify-center h-20 border-b border-gray-800">
      <img className="logo" src="images/razorpayx-logo.png" />
      </div>
      <div className="p-4">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <FaHome className="text-lg" />
              <span className="ml-2">Home</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <FaMoneyBill className="text-lg" />
              <span className="ml-2">Payouts</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <FaReceipt className="text-lg" />
              <span className="ml-2">Account Statement</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <FaUserFriends className="text-lg" />
              <span className="ml-2">Contacts</span>
            </a>
          </li>
          <hr/>
          <li className="mb-4 mt-4">
            <a href="#" className="flex items-center">
              <FaRegMoneyBillAlt className="text-lg" />
              <span className="ml-2">Loans</span>
              <span className="ml-2 bg-green-700 text-xs px-2 py-1 rounded-xl">NEW</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <FaFileInvoiceDollar className="text-lg" />
              <span className="ml-2">Vendor Payments</span>
              <span className="ml-2 bg-green-700 text-xs px-2 py-1 rounded-xl">NEW</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <FaFileSignature className="text-lg" />
              <span className="ml-2">Tax Payments</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <FaPaperPlane className="text-lg" />
              <span className="ml-2">Payout Links</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <FaUserTie className="text-lg" />
              <span className="ml-2">Payroll</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <FaChartBar className="text-lg" />
              <span className="ml-2">Reports</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
