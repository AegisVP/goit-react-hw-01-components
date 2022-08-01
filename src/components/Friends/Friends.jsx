import { Friend } from './Friend';
import css from './Friends.module.css';

const Friends = ({ friendsList = [] }) => (
	<ul className={css['friend-list']}>
		{friendsList.map(({ id, avatar, name, isOnline }) => (
			<Friend
				key={id}
				id={id}
				avatar={avatar}
				name={name}
				isOnline={isOnline}
			/>
		))}
	</ul>
);

export { Friends };
