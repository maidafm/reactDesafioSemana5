import React, { useState } from 'react';
import '../assets/css/RegisterPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensajeError, setMensajeError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            alert
            return;
        }

        setMensajeError(null);
        alert('Autenticación exitosa');
        
        setEmail('');
        setPassword('');
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                {mensajeError ? <p>{mensajeError}</p> : null}

                <h2>Formulario de Registro</h2>

                <div>
                    <h4>Email</h4>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <h4>Contraseña</h4>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" type='submit'>Enviar</button>
            </form>
        </div>
    );
};

export default LoginPage;