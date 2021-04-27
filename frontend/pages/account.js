import Head from 'next/head'
import { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'

export default function Account() {

    const {user, logoutUser } = useContext(AuthContext)

    if (!user) {
        return (
            <div>
                <p>Merci de vous connecter ou de vous enregistrer</p>
                <Link href='/'><a>retour à la page d'accueil</a></Link>
            </div>
        )
    }
    return (
        <div>
            <Head>
                <title>Mon compte</title>
                <meta name='description' content='The account page, view your order and logout'/>
            </Head>
            <h2>Mon compte</h2>
            <a href='#' onClick={logoutUser}>Deconnexion</a>
        </div>
    )

}