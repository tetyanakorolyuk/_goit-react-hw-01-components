import TransactionHistoryTable from './TransactionHistoryTable';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
    <thead>
      <tr className={s.title}>
        <th className={s.type}>Type</th>
        <th className={s.amount}>Amount</th>
        <th className={s.currency}>Currency</th>
      </tr>
    </thead>
    {items.map(item => (
        <TransactionHistoryTable
        key={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency}
        />
    ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
}),
),
};

export default TransactionHistory;
