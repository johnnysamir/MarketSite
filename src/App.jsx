import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Products } from './components/Nav/Products';
import { CartView } from './components/Cart/CartView';
import { AdminDashboardContainer } from './components/adminComponents/AdminDashboardContainer';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer';
import { ProductSuccess } from './components/adminComponents/ProductSuccess';
import { PublicLayout } from './components/PublicLayout';
import { ProtectedRoute } from './components/adminComponents/ProtectedRoute';
import { Login } from './components/adminComponents/Login';

function App() {
  return (
    <Routes>
      {/* Rutas Públicas con Header y Footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="category/:category" element={<ItemListContainer />} />
        <Route path="product/:id" element={<ItemDetailContainer />} />
        <Route path="products" element={<Products />} />
        <Route path="carrito" element={<CartView />} />
      </Route>

      {/* Rutas de Administrador (Sin Header ni Footer) */}
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="admin" element={<AdminDashboardContainer />} />
        <Route path="admin/new" element={<ProductFormContainer />} />
        <Route path="admin/edit/:id" element={<ProductFormContainer />} />
        <Route path="success/:id" element={<ProductSuccess />} />
      </Route>
    </Routes>
  );
}

export default App;
