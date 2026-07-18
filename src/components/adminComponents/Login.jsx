import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./productContainer.css";

export const Login = () => {
    const navigate = useNavigate();
    const { login, user } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Si ya está logueado, redirigir al admin directamente
    useEffect(() => {
        if (user) {
            navigate("/admin", { replace: true });
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!email.trim() || !password.trim()) {
            setError("Por favor, completa todos los campos.");
            setLoading(false);
            return;
        }

        try {
            await login(email, password);
            navigate("/admin", { replace: true });
        } catch (err) {
            console.error("Login component error:", err);
            setError("Credenciales incorrectas. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-form-container" style={{ marginTop: "8rem" }}>
            <h2 className="admin-form-title">Iniciar Sesión (Admin)</h2>

            {error && <div className="error-message general-error">{error}</div>}

            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@admin.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                >
                    {loading ? "Iniciando sesión..." : "Ingresar"}
                </button>
            </form>
        </div>
    );
};
