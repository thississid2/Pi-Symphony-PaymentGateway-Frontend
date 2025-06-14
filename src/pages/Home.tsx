import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { ChangeEvent } from 'react';

const Home: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const navigate = useNavigate();

  const handleProceed = (): void => {
    if (!amount || isNaN(Number(amount))) {
      alert('Please enter a valid amount');
      return;
    }
    navigate(`/pay?amount=${amount}`);
  };

  return (
    <div className="container">
      <h1>Enter Amount</h1>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
      />
      <button onClick={handleProceed}>Proceed to Pay</button>
    </div>
  );
};

export default Home;
