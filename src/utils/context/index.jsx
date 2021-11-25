import { createContext, useState } from 'react';

/**
 * Create context to switch data sources :
 * data comes either from the mocks or the API
 */

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
