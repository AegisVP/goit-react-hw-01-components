import css from './Stats.module.css';

const Statistics = ({ statsList = [] }) => (
	<section className={css['statistics']}>
		<h2 className={css['title']}>Upload stats</h2>

		<ul className={css['stat-list']}>
			{statsList.map(({ id, label, percentage }) => (
				<Stat key={id} label={label} percentage={percentage} />
			))}
		</ul>
	</section>
);

const Stat = ({ label, percentage }) => (
	<li className={css['item']}>
		<span className={css['label']}>{label}</span>
		<span className={css['percentage']}>{percentage}%</span>
	</li>
);

export { Statistics };
