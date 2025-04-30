import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Store complete user data

  // Load user from cookies on initial mount
  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user cookie:", error);
        Cookies.remove("user");
      }
    }
  }, []);

  // Handle login and set cookie
  const login = (phone, uid, email, name, role) => {
    const userData = { phone, uid, email, name, role };
    Cookies.set("user", JSON.stringify(userData), {
      expires: 7,
      secure: true,
      sameSite: "Strict",
    });
    setUser(userData);
  };

  // Handle logout and remove cookie
  const logout = () => {
    Cookies.remove("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
