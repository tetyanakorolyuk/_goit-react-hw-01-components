import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ stats }) {
  return (
  <section className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>
  <ul className={s.list}>
    {stats.map(stat => (
      <li className={s.item} key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}%</span>
    </li>
    ))}
  </ul>
</section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
}),
),
};

export default Statistics;
