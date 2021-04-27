import Head from 'next/head'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

export default function Login() {

    const [email, setEmail] = useState('')

    const getEmail = () => {
        setEmail(event.target.value)
    }
    const { loginUser } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        loginUser(email)
    }
    return (
        <div>
            <Head>
                <title>Login</title>
                <meta name='description' content='Connectez-vous ici pour effectuer votre achat'/>
            </Head>

            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='email' 
                    value={email}
                    onChange={getEmail}
                    placeholder='Adresse email'
                    />
                <button type='submit'>Connecter</button>

            </form>

        </div>
    )
}