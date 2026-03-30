import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppRouter from './AppRoutes/Routes.jsx';
import "./index.scss";

// Contexts import
import CollectionContextProvider from './State/CollectionsContext.jsx';
import GraphContextProvider from './State/GraphContext.jsx';
import ItemsContextProvider from './State/ItemsContext.jsx';

createRoot(document.getElementById('root')).render(
  <CollectionContextProvider>
    <GraphContextProvider>
      <ItemsContextProvider>
        <AppRouter>
          <App />
        </AppRouter>
      </ItemsContextProvider>
    </GraphContextProvider>
  </CollectionContextProvider>

)
