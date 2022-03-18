import { useState } from "react";

function UserStatus() {
  const [isLoggedIn] = useState(false);
  const [userName] = useState("oviedo");

  //   return (
  //     <>
  //       <div>Bienvenido usuario</div>
  //       <div>Login</div>
  //     </>
  //   );
  //if / else
  //    if (isLoggedIn) {
  //     return <div>Bienvenido {userName}</div>;
  //   } else {
  //     return <div>Login</div>;
  //   }

  // if ternario
  //   return isLoggedIn ? <div>Bienvenido {userName}</div> : <div>Login</div>;

  // variable
  //   let status;

  //   if (isLoggedIn) {
  //     status = <div>Bienvenido {userName}</div>;
  //   } else {
  //     status = <div>Login</div>;
  //   }
  //   return status;

  // logic operator

  //   return (isLoggedIn && <div>Bienvenido {userName}</div>) || <div>Login</div>;

  // in line

  return (
    <div>
      {isLoggedIn ? <span>Bienvenido {userName}</span> : <span>Login</span>}
    </div>
  );
}

export default UserStatus;
