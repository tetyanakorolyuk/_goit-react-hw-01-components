import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistoryTable({ type, amount, currency }) {
  return (
  <tbody>
    <tr>
      <td className={s.type}>{type}</td>
      <td className={s.amount}>{amount}</td>
      <td className={s.currency}>{currency}</td>
    </tr>
  </tbody>
);
}

TransactionHistoryTable.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryTable;
