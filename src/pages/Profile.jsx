function Profile() {
  return (
    <div className="profile-container">

      <div className="profile-header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-content">

        <div className="profile-info">

          <div className="profile-image-wrapper">
            <img
              src="https://i.pravatar.cc/150?img=47"
              alt="profile"
              className="profile-image"
            />

            <div className="camera-icon">
              📷
            </div>
          </div>

          <div>
            <h3>Marry Doe</h3>
            <p>marrydoe@gmail.com</p>
          </div>

        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

      </div>

    </div>
  );
}

export default Profile;