import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ username, tag, location, avatar, statsFoll, statsViews, statsLike }) => {
   // const = props;
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}//"https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                    className="avatarProf"
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location} </p>
            </div>

            <ul className="stats">
                <li className="stats-item">
                    <span className="label">Followers</span>
                    <span className="quantity">{statsFoll}</span>
                </li>
                <li className="stats-item">
                    <span className="label">Views</span>
                    <span className="quantity">{statsViews}</span>
                </li>
                <li className="stats-item">
                    <span className="label">Likes</span>
                    <span className="quantity">{statsLike}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    statsFoll: PropTypes.number,
    statsViews: PropTypes.number,
    statsLike: PropTypes.number
}
export default Profile;
