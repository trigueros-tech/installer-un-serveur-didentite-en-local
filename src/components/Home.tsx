import React, { useEffect, useState, FC } from "react";
import { userManager } from "../utils/authentication";
import { User } from "oidc-client-ts";

const UnknownHome = () => {
  return (
    <>
      <h1>Please authenticate</h1>
      <button onClick={() => userManager.signinRedirect()}>Sign in</button>
    </>
  );
};

const AuthenticatedHome: FC<{ user: User }> = ({ user }) => {
  return (
    <>
      <h1>Welcome {user.profile.preferred_username}</h1>
      <h2>here is your data:</h2>
      <p>{JSON.stringify(user)}</p>
      <button onClick={() => userManager.signoutRedirect()}>Sign out</button>
    </>
  );
};

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    userManager.getUser().then(setUser);
  }, []);

  return <>{user ? <AuthenticatedHome user={user} /> : <UnknownHome />}</>;
};

export default Home;
