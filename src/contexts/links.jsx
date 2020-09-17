import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

import { useAuth } from './auth';

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const { user } = useAuth();

  const [links, setFiles] = useState([]);

  useEffect(() => {
    
  console.log(user)
    async function loadStorageData() {
      try {
        const storagedLinks = await api.get(`/url/listar/3`)

        console.log(storagedLinks.data);
        setFiles(storagedLinks.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    loadStorageData();
  }, [user])

  return (
    <LinkContext.Provider value={{ links }}>
      {children}
    </LinkContext.Provider>
  );
};

export function useLink() {
  const context = useContext(LinkContext);

  return context;
}