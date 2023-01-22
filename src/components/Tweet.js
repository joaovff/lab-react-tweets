function Tweet(props) {
  return props.tweet.map((item) => {
    return (
      <div className="tweet">
        <img src={item.user.image} className="profile" alt="profile" />

        <div className="body">
          <div className="top">
            <span className="user">
              <span className="name">{item.user.name}</span>
              <span className="handle">{item.user.handle}</span>
            </span>

            <span className="timestamp">{item.timestamp}</span>
          </div>

          <p className="message">{item.message}</p>

          <div className="actions">
            <i className="far fa-comment"></i>
            <i className="fas fa-retweet"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-share"></i>
          </div>
        </div>

        <i className="fas fa-ellipsis-h"></i>
      </div>
    );
  });
}

export default Tweet;
