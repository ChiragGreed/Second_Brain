import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppRouter from './Routes.jsx'
import "./index.scss";

// Contexts import
import CollectionContextProvider from './Features/Collections/State/CollectionsContext.jsx';
import GraphContextProvider from './Features/KnowledgeGraph/State/GraphContext.jsx';
import ItemsContextProvider from './Features/Items/State/ItemsContext.jsx';
import AuthContextProvider from './Features/Authentication/State/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <CollectionContextProvider>
      <GraphContextProvider>
        <ItemsContextProvider>
          <AppRouter>
            <App />
          </AppRouter>
        </ItemsContextProvider>
      </GraphContextProvider>
    </CollectionContextProvider>
  </AuthContextProvider>

)
