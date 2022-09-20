
import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

import randomColor from './components/Statistics/randomColor';
 
export default function App() {
  return (
    <div>
    
        < Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          statsFoll={user.stats.followers}
          statsViews={user.stats.views}
          statsLike={user.stats.likes} />
      
      < Statistics key={data.id} title="Upload stats" stats={data} color={randomColor} />

      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
        </div>
  );
}





// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };