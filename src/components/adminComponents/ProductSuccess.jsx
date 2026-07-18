import { useParams, Link, useSearchParams } from "react-router-dom";

export const ProductSuccess = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const isEdit = searchParams.get("mode") === "edit";

    return (
        <div className="success-container">
            <div className="success-card">
                <div className="success-icon">✓</div>
                <h2 className="success-title">
                    {isEdit ? "¡Producto actualizado con éxito!" : "¡Producto cargado con éxito!"}
                </h2>
                <p className="success-message">
                    {isEdit
                        ? "El producto ha sido modificado y guardado exitosamente en la base de datos de Firestore."
                        : "El producto ha sido guardado exitosamente en la base de datos de Firestore."}
                </p>
                <div className="success-id-box">
                    <span className="success-id-label">ID del Producto:</span>
                    <code className="success-id-value">{id}</code>
                </div>
                <div className="success-actions">
                    {isEdit ? (
                        <>
                            <Link to="/admin" className="btn btn-primary">
                                Volver al Panel
                            </Link>
                            <Link to="/" className="btn btn-secondary">
                                Volver a la Tienda
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/admin/new" className="btn btn-primary">
                                Cargar otro producto
                            </Link>
                            <Link to="/admin" className="btn btn-secondary">
                                Volver al Panel
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
