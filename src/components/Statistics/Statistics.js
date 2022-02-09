import PropTypes from 'prop-types';
import getRandomHexColor from '../../helpers/randomHexColor';
import s from './Statistics.module.css';

function Statistics({ stats, title }) {
  return (
  <section className={s.statistics}>
  {title && <h2 className={s.title}>Upload stats</h2>}
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
}),
),
};

export default Statistics;
