import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export function useLogout() {
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return logout;
}
