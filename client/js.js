const url = "http://localhost:4444";
const doRegister = document.getElementById("do-register");
const doLogin = document.getElementById("do-login");
const doLogout = document.getElementById("do-logout");
const doEndpointTest = document.getElementById("do-endpoint-test");
const doEndpointUser = document.getElementById("do-endpoint-user");

const handleRegister = (ev) => {
  ev.preventDefault();

  const data = {
    email: doRegister.querySelector('input[type="email"]').value,
    password: doRegister.querySelector('input[type="password"]').value,
  };

  fetch(`${url}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.error);
};

const handleLogin = (ev) => {
  ev.preventDefault();

  const data = {
    email: doLogin.querySelector('input[type="email"]').value,
    password: doLogin.querySelector('input[type="password"]').value,
  };

  fetch(`${url}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.error);
};

const handleLogout = (ev) => {
  ev.preventDefault();

  fetch(`${url}/auth/logout`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.error);
};

const handleTest = (ev) => {
  ev.preventDefault();

  fetch(`${url}/api/test`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.error);
};

const handleUser = (ev) => {
  ev.preventDefault();

  fetch(`${url}/api/user`)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.error);
};

const init = () => {
  doRegister.addEventListener("submit", handleRegister);
  doLogin.addEventListener("submit", handleLogin);
  doLogout.addEventListener("submit", handleLogout);
  doEndpointTest.addEventListener("submit", handleTest);
  doEndpointUser.addEventListener("submit", handleUser);
};

window.onload = init();
