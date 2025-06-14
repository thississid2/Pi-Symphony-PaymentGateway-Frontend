import { useLocation } from 'react-router-dom';
import PaymentOptions from '../components/PaymentOptions';

const Pay: React.FC = () => {
    const location = useLocation();
    const query: URLSearchParams = new URLSearchParams(location.search);
    const amount: string | null = query.get('amount');

    return (
        <div className="container">
            <h2>Pay ₹{amount}</h2>
            <PaymentOptions />
        </div>
    );
};

export default Pay;
