import './styles/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import {invoke} from "@tauri-apps/api/core";
import {LoginResponse} from "../../entity";


export const Login = ({ onLogin }: { onLogin: () => void }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () =>{
        try{
            const result : LoginResponse = await invoke<LoginResponse>('login',{username,password})
            localStorage.setItem('token',result.token)
            localStorage.setItem('refreshToken',result.refreshToken)
            onLogin();
            navigate('/');
        } catch (error) {
            console.error('Error al iniciar sesión:', error)
            setError('Usuario o contraseña incorrectos - '+error)
        }
    }


    return (
        <div className="login-container">
            <h2 className="login-title">Iniciar Sesión</h2>
            <input
                className="login-input"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="login-input"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button" onClick={handleLogin}>
                Entrar
            </button>
            {error && <p className="login-error">{error}</p>}
        </div>
    )
}