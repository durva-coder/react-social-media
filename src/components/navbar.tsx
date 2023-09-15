import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const signUserOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        {!user ? (
          <Link to="/login"> Login </Link>
        ) : (
          <Link to="/createpost"> Create Post </Link>
        )}
      </div>

      <div className="user">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img
              src={user?.photoURL || ""}
              width="30"
              height="30"
              alt="User Profile Pic"
            />
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};
