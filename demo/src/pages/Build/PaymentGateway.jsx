import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Smartphone, CheckCircle } from "lucide-react";

const PaymentGateway = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  const [transactionId, setTransactionId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-red-500 font-semibold">Project not found.</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transactionId) {
      alert("Please enter the transaction ID after completing the payment.");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      alert("Payment submitted successfully! Your payment is being processed and you will receive confirmation via email within 48 hours.");
      navigate("/build");
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-[#daf0fa] via-[#bceaff] to-[#bceaff] dark:from-[#020b23] dark:via-[#001233] dark:to-[#0a1128]">
      <div className="max-w-xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-8 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            UPI Payment for {project.title}
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">{project.description}</p>
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-8 h-8 text-blue-600" />
            <span className="font-semibold text-blue-800 text-lg">₹{project.price}</span>
          </div>
          <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Scan the QR code below or pay to UPI ID: <span className="font-bold text-gray-900 dark:text-white">9676663136@axl</span>
          </div>
          <div className="flex justify-center mb-6">
            <img src="/QR1.jpg" alt="Payment QR Code" className="w-48 h-48 rounded shadow" />
          </div>
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Transaction ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="transactionId"
              value={transactionId}
              onChange={e => setTransactionId(e.target.value)}
              className="w-full px-4 py-3 mb-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter transaction ID after payment"
              required
            />
            <button
              type="submit"
              disabled={isProcessing || !transactionId}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Submit Payment
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
