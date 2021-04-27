import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Header.module.css'



export default () => {

    const router = useRouter()
    const isHome = router.pathname === '/'

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }
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
    </div>
    )
    
}