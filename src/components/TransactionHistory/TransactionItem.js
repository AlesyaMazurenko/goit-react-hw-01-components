import './TransactionHistory.css'

export default function TransactionItem({ type, amount, currency }) {
    return (
        <>
            <td>{type}</td>
            <td>{ amount}</td>
            <td>{ currency}</td>
      </>
    )
};
