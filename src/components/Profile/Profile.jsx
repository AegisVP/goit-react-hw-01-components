import css from './Profile.module.css';

const Profile = ({ avatarURL = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png', userName, userTag, location, followers = '-', views = '-', likes = '-' }) => (
  <div className={css['profile']}>
    <div className={css['description']}>
      <img src={avatarURL} alt="User avatar" className={css['avatar']} />
      <p className={css['name']}>{userName}</p>
      <p className={css['tag']}>{userTag}</p>
      <p className={css['location']}>{location}</p>
    </div>

    <ul className={css['stats']}>
      <li className={css['stat']}>
        <span className={css['label']}>Followers</span>
        <span className={css['quantity']}>{followers ? followers : '-'}</span>
      </li>
      <li className={css['stat']}>
        <span className={css['label']}>Views</span>
        <span className={css['quantity']}>{views ? views : '-'}</span>
      </li>
      <li className={css['stat']}>
        <span className={css['label']}>Likes</span>
        <span className={css['quantity']}>{likes ? likes : '-'}</span>
      </li>
    </ul>
  </div>
);

export { Profile };
