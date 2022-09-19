import propTypes from 'prop-types';
import './Statistics.css';

export default function Statistics({ title, stats, color}) {
    return (
<section className='statistics'>
    <h2 className='title'>{title}</h2>

            <ul className='stat-list'>
                {stats.map(stat => (
                    <li className='item' key={stat.id} background-color={color}>
                        <span className='label'>{stat.label}</span>
                        <span className='percentage'>{stat.percentage }%</span>
                    </li>))}
  </ul>
 </section>

  )
}

Statistics.propTypes = {
    id: propTypes.string,
    title: propTypes.string,
    label: propTypes.string,
    percentage: propTypes.number,
}