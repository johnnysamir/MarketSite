export const validateProduct = (product) => {
    const errors = {};

    if (!product.name || product.name.trim() === "") {
        errors.name = "El nombre es obligatorio";
    }

    if (!product.price || Number(product.price) <= 0) {
        errors.price = "El precio debe ser mayor a cero";
    }

    if (!product.description || product.description.trim() === "") {
        errors.description = "La descripción es obligatoria";
    }

    if (!product.category || product.category.trim() === "") {
        errors.category = "La categoría es obligatoria";
    }

    if (!product.image) {
        errors.image = "La imagen es obligatoria";
    }

    return errors;
};
