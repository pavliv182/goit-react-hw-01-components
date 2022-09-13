// import css from './FriendList.module.css';
// import friends from './FriendList/friends';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendList
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

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
