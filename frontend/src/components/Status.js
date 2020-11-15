export default ({ isLoggedIn, user }) => {
  return (
    <div className="block">
      <h2>Auth Status</h2>
      <p>
        <em>
          Simple auth details display here.
          <br />
        </em>
      </p>
      <p>
        Logged in: <span>{isLoggedIn}</span>
      </p>
      <p>
        User _id: <span>{user._id}</span>
      </p>
      <p>
        User email: <span>{user.email}</span>
      </p>
    </div>
  );
};
