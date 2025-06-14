import { useState } from 'react';
import type { ChangeEvent } from 'react';

const PaymentOptions: React.FC = () => {
  const [method, setMethod] = useState<'card' | 'upi' | 'wallet'>('card');

  const handleMethodChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setMethod(e.target.value as 'card' | 'upi' | 'wallet');
  };

  return (
    <>
      <h3>Select Payment Method</h3>
      <select onChange={handleMethodChange} value={method}>
        <option value="card">Card</option>
        <option value="upi">UPI</option>
        <option value="wallet">Wallet</option>
      </select>

      {method === 'card' && (
        <div>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiry Date" />
          <input type="text" placeholder="CVV" />
        </div>
      )}

      {method === 'upi' && <input type="text" placeholder="Enter UPI ID" />}
      {method === 'wallet' && <input type="text" placeholder="Enter Wallet ID" />}

      <button>Pay Now</button>
    </>
  );
};

export default PaymentOptions;
