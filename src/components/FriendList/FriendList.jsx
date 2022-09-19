import FriendItem from './FriensItem';
import propTypes from 'prop-types';
import './FriendList.css';

export default function FriendList({friends}) {
    return (
        <section className='friendlist'>
            <ul className='friend-list'> 
                {friends.map((friend) => (
                 <li>
                <FriendItem
                    key={friend.id}
                    userName={friend.name}
                    userAvatar={friend.avatar}
                    isOnline={friend.isOnline}
                    />
                </li>    
            ))}       
            </ul>
       </section>
   ) 
}

FriendList.propTypes = {
    friends: propTypes.array.isRequired,
}

