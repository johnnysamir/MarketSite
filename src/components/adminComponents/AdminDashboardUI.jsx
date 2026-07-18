import { Link } from "react-router-dom";
import "./productContainer.css";

export const AdminDashboardUI = ({ products, loading, error, onDelete, onLogout }) => {
    return (
        <div className="admin-container">
            <header className="admin-header">
                <h1 className="admin-title">Panel de Control</h1>
                <div className="admin-header-actions">
                    <Link to="/admin/new" className="btn btn-primary">
                        + Cargar Producto
                    </Link>
                    <button onClick={onLogout} className="btn btn-logout">
                        Cerrar Sesión
                    </button>
                </div>
            </header>

            {loading ? (
                <div className="admin-loading">Cargando productos...</div>
            ) : error ? (
                <div className="admin-error">{error}</div>
            ) : products.length === 0 ? (
                <div className="admin-empty">No hay productos cargados en la tienda.</div>
            ) : (
                <div className="table-responsive">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="admin-product-thumbnail"
                                        />
                                    </td>
                                    <td className="font-semibold">{product.name}</td>
                                    <td className="capitalize">{product.category}</td>
                                    <td className="font-mono">${product.price.toLocaleString()}</td>
                                    <td>
                                        <div className="admin-actions-cell">
                                            <Link
                                                to={`/admin/edit/${product.id}`}
                                                className="btn btn-action btn-edit"
                                            >
                                                Editar
                                            </Link>
                                            <button
                                                onClick={() => onDelete(product.id)}
                                                className="btn btn-action btn-delete"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
