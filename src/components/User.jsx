const User = ({ user }) => {
  return (
    <div>
      <h3>{user.username}</h3>
      <p>{user.name}</p>
      <div>
        <img src={user.avatar_url} alt="user profile" />
      </div>
    </div>
  )
}

export default User

// {
// "username": "tickle122",
// "name": "Tom Tickle",
// "avatar_url": "https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg"
// },
