import React from 'react';

function Faq() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#1e293b] text-white rounded-lg shadow-lg space-y-6">
      <h1 className="text-4xl font-bold text-yellow-400 text-center">Frequently Asked Questions</h1>

      <div>
        <h2 className="text-2xl font-semibold">❓ How do I place an order?</h2>
        <p>Just click "Add to Cart" and go to your cart to review and proceed!</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">📦 What is the return policy?</h2>
        <p>Returns are accepted within 7 days of delivery. Product must be unused and in original packaging.</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">🚚 How long does shipping take?</h2>
        <p>Standard delivery takes 3-5 business days.</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">💳 What payment methods are accepted?</h2>
        <p>We accept UPI, debit/credit cards, and net banking.</p>
      </div>
    </div>
  );
}

export default Faq;
