const Logout = ({ handshake }) => {
  const handleLogout = (ev) => {
    fetch("/auth/logout")
      .then((res) => res.json())
      .then(console.log)
      .then(handshake)
      .catch(console.error);
  };

  return (
    <div className="block">
      <h2>User Logout</h2>
      <p>
        <em>
          This should always return a 200 status
          <br />
          regardless of current auth state.
        </em>
      </p>
      <div>
        <div onClick={handleLogout} className="btn">
          Logout
        </div>
      </div>
    </div>
  );
};

export default Logout;
