import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('tehri_user');
    const sessionExpiry = localStorage.getItem('tehri_session_expiry');
    
    if (storedUser && sessionExpiry) {
      const expiryTime = parseInt(sessionExpiry);
      if (Date.now() < expiryTime) {
        setUser(JSON.parse(storedUser));
      } else {
        localStorage.removeItem('tehri_user');
        localStorage.removeItem('tehri_session_expiry');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication logic
    if (email && password.length >= 6) {
      const mockUser: User = {
        id: '1',
        name: email.split('@')[0].replace(/[^a-zA-Z]/g, '').toLowerCase(),
        email
      };
      
      setUser(mockUser);
      
      // Set session to expire in 3 days
      const expiryTime = Date.now() + (3 * 24 * 60 * 60 * 1000);
      localStorage.setItem('tehri_user', JSON.stringify(mockUser));
      localStorage.setItem('tehri_session_expiry', expiryTime.toString());
      
      return true;
    }
    
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (name && email && password.length >= 6) {
      const mockUser: User = {
        id: '1',
        name,
        email
      };
      
      setUser(mockUser);
      
      const expiryTime = Date.now() + (3 * 24 * 60 * 60 * 1000);
      localStorage.setItem('tehri_user', JSON.stringify(mockUser));
      localStorage.setItem('tehri_session_expiry', expiryTime.toString());
      
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tehri_user');
    localStorage.removeItem('tehri_session_expiry');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};