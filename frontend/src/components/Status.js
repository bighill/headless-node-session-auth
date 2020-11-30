const Status = ({ isLoggedIn, isSocketConnected, user, socketResponse }) => {
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
        Logged in: <span>{isLoggedIn ? "Yes" : "No"}</span>
      </p>
      <p>
        User _id: <span>{user._id}</span>
      </p>
      <p>
        User email: <span>{user.email}</span>
      </p>
      <p>
        Socket Connect: <span>{isSocketConnected ? "Yes" : "No"}</span>
      </p>
      <p>
        Socket Response: <span>{socketResponse}</span>
      </p>
    </div>
  );
};

export default Status;
