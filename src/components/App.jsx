import { Profile } from './Profile/Profile';
import user from './Profile/user';

export const App = () => {
  return (
    <Profile
      key={user.username}
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats[0]}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    ></Profile>
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
