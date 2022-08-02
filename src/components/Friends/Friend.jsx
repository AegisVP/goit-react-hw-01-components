import css from './Friends.module.css';

const Friend = ({ id, avatar, name, isOnline }) => (
  <li className={css['friend']}>
    <span className={`${css['status']} ${isOnline ? css['online'] : css['offline']}`}></span>
    <img className={css['avatar']} src={avatar} alt="User avatar" width="48" />
    <p className={css['name']}>{name}</p>
  </li>
);

export { Friend };
