import { createContext, useState } from 'react';

export const SourceContext = createContext();

export const SourceProvider = ({ children }) => {
   const [source, setSource] = useState('mock');
   const switchSource = () => {
      setSource(source === 'mock' ? 'api' : 'mock');
   };

   return (
      <SourceContext.Provider value={{ source, switchSource }}>
         {children}
      </SourceContext.Provider>
   );
};
