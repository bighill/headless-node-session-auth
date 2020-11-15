const Endpoint = (props) => {
  const handleEndpoint = (ev) => {
    fetch("/api/test")
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error);
  };

  return (
    <div className="block">
      <h2>Test API Endpoint</h2>
      <p>
        <em>
          This should return a 200 status if currently logged in.
          <br />
          Otherwise expect 401 status.
        </em>
      </p>
      <div>
        <div onClick={handleEndpoint} className="btn">
          API Endpoint
        </div>
      </div>
    </div>
  );
};

export default Endpoint;
