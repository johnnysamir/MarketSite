import { Link } from "react-router-dom";

export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
    isEditMode,
    currentImageUrl,
    onLogout,
}) => {
    return (
        <div className="admin-form-container">
            <div className="admin-header">
                <h2 className="admin-form-title">
                    {isEditMode ? "Editar Producto" : "Cargar Nuevo Producto"}
                </h2>
                <div className="admin-header-actions">
                    <Link to="/admin" className="btn-logout" style={{ textDecoration: 'none', color: '#475569', background: '#f1f5f9', border: '1px solid #cbd5e1' }}>
                        Volver al Panel
                    </Link>
                    <button type="button" onClick={onLogout} className="btn-logout">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
            
            {errors.general && <div className="error-message general-error">{errors.general}</div>}

            <form onSubmit={onSubmit} className="admin-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre del Producto</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={onChange}
                        placeholder="Ej. Pincel Chato OneArt"
                        className={errors.name ? "input-error" : ""}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="price">Precio (ARS)</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                        placeholder="Ej. 1200"
                        className={errors.price ? "input-error" : ""}
                    />
                    {errors.price && <span className="error-text">{errors.price}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="category">Categoría</label>
                    <select
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={onChange}
                        className={errors.category ? "input-error" : ""}
                    >
                        <option value="">Seleccione una categoría</option>
                        <option value="dama">Dama</option>
                        <option value="hombre">Hombre</option>
                        <option value="infantil">Infantil</option>
                    </select>
                    {errors.category && <span className="error-text">{errors.category}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={onChange}
                        placeholder="Ej. Pincel chato de fibra sintética..."
                        rows="4"
                        className={errors.description ? "input-error" : ""}
                    />
                    {errors.description && <span className="error-text">{errors.description}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="image">
                        {isEditMode ? "Seleccionar nueva imagen (opcional)" : "Imagen del Producto"}
                    </label>
                    
                    {isEditMode && currentImageUrl && (
                        <div className="current-image-preview">
                            <span className="current-image-label">Imagen actual:</span>
                            <img
                                src={currentImageUrl}
                                alt="Miniatura actual"
                                className="admin-form-image-preview"
                            />
                        </div>
                    )}

                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={onFileChange}
                        accept="image/*"
                        className={errors.image ? "input-error" : ""}
                    />
                    {errors.image && <span className="error-text">{errors.image}</span>}
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                >
                    {loading
                        ? "Procesando..."
                        : isEditMode
                        ? "Guardar Cambios"
                        : "Crear Producto"}
                </button>
            </form>
        </div>
    );
};
