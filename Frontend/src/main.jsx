import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppRouter from './AppRoutes/Routes.jsx';
import ItemsContextProvider from './state/itemsContext.jsx';
import CollectionContextProvider from './state/collectionsContext.jsx';
import "./index.scss";

createRoot(document.getElementById('root')).render(
  <CollectionContextProvider>
    <ItemsContextProvider>
      <AppRouter>
        <App />
      </AppRouter>
    </ItemsContextProvider>
  </CollectionContextProvider>

)
