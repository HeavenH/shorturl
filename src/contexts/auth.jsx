import React, { createContext, useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {

      const storagedUser = await AsyncStorage.getItem('@LogiqueAuth:user');
      const storagedToken = await AsyncStorage.getItem('@LogiqueAuth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      } else if (!storagedUser && !storagedToken) {
        setLoading(false);
      }
    }
    loadStorageData();
  }, [])

  async function singIn(data) {

    const { login, senha } = data;

    console.log(login, senha)

    const res = await api.post('auth/login', { login, senha });

    console.log(res.data.detalhesUsuario)

    const { token, detalhesUsuario } = res.data;

    console.log(token)

    setUser(detalhesUsuario);

    api.defaults.headers.Authorization = `${token}`;

    await AsyncStorage.setItem('@LogiqueAuth:user', JSON.stringify(detalhesUsuario));
    await AsyncStorage.setItem('@LogiqueAuth:token', token);

  }

  function singOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, loading, user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}