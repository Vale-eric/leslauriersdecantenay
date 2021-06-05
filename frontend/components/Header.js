import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import AuthContext from '../context/AuthContext'

import styles from '../styles/Header.module.css'


const Header = () => {

    const router = useRouter()
    const isHome = router.pathname === '/'

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    const { user } = useContext(AuthContext)
    return (
        <div className={styles.nav}>
            {!isHome && 
                <div className={styles.back}>
                    <a href='#' onClick={goBack}>{'<'}Retour</a>
                </div>
            }
        <div className={styles.titre}>
            <Link href='/'>
                <a>
                    <h1>Les Lauriers de Cantenay</h1>
                </a>
            </Link>
        </div>
        <div className={styles.auth}>
            {user ?(
                <Link href='/account'>
                    <a><img src='/user_avatar.png' alt={user.email}/></a>
                </Link>) : (
                <Link href='/login'>
                    <a>connexion</a>
                </Link>
            )}
        </div>
    </div>
    )
    
}
export default Header
