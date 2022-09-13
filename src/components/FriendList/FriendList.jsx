import PropTypes from 'prop-types';

import css from './FriendList.module.css';

const FriendList = ({ data }) => {
  return (
    <ul>
      {data.map(friend => (
        <li key={friend.id} className={css.item}>
          <span
            className={`${css.status} ${friend.isOnline ? css.online : false}`}
          ></span>
          <img
            className={css.avatar}
            width="45"
            src={friend.avatar}
            alt="userAvatar"
          />
          <span className={css.name}>{friend.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

Event.PropTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
