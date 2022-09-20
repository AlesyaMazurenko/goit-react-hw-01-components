import TransactionItem from './TransactionItem';
import './TransactionHistory.css';
import propTypes from 'prop-types';

export default function TransactionHistory({ items }) {
    return (
        <table className='table'>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

            <tbody>
                {
                    items.map(item => (
                        <tr key={item.id}>
                            <TransactionItem 
                                type={item.type}
                                amount={item.amount}
                                currency={item.currency}
                            />
                        </tr>
                    ))
                } 
  </tbody>
</table>
    )
}

TransactionItem.propTypes = {
    type: propTypes.string,
    amount: propTypes.string,
    currency: propTypes.string,
}