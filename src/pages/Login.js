import React, { useContext, useState } from 'react'
import axios from 'axios';
import UserContext from '../context/userContext';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const context = useContext(UserContext);

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/login', { email, password })
            context.setIsLogin(true)
            context.setUser(res.data.user.firstName)
            setTimeout(() => history.push('/shopping'), 3000)
        } catch (err) {
            if (err.response) {
                setErrorLogin(true)
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return (
        <div>
            <div className="container mt-5 w-50">
                <form onSubmit={formSubmit}>
                    {context.isLogin && <div class="alert alert-success" role="alert">
                        Login success !
                    </div>}
                    {errorLogin && <div class="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>}
                    <div className="form-group">
                        <label>Email address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div >
    )
}

export default Login
