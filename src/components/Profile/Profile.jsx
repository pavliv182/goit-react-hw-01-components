import css from './Profile.module.css';

import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={stats}>
        <li>
          <span className={css.followers}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className={css.views}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className={css.likes}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Event.PropTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
