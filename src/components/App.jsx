import Profile from './Profile';
import user from './Profile/user';
import Statistics from './Statistics';
import data from './Statistics/data';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends';

export const App = () => {
  return (
    <>
      {/* <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      /> */}
      <Statistics stats={data} title={'Upload stats'} />
      {/* <FriendList friends={friends} /> */}
    </>
  );
};

// key={profile.username}
//       username={profile.username}
//       tag={profile.tag}
//       location={profile.location}
//       avatar={profile.avatar}
//       followers={profile.stats.followers}
//       views={profile.stats.views}
//       likes={profile.stats.likes}
