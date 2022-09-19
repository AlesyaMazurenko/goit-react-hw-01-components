import './FriendList.css';
import propTypes from 'prop-types';

export default function FriendItem({isOnline, userAvatar, userName  }) {
    return (
        <div className='wrapper'>
            <span className={isOnline ? 'active' : 'non-active' }></span>
            <img className='avatar' src={userAvatar} alt="User avatar" width="48" />
            <p className='name'>{userName}</p> 
        </div>
    )
}

FriendItem.propTypes = {
    isOnline: propTypes.bool,
    userAvatar: propTypes.string,
    userName: propTypes.string,
}


 