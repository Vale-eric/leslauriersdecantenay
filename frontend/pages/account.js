import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import Link from 'next/link'

import AuthContext from '../context/AuthContext'
import { API_URL } from '../utils/urls'

const useOrders = (user, getToken) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchOrders = async () => {
            if(user) {
                try{
                    setLoading(true)
                    const token = await getToken()
                    const orders_res = await fetch(`${API_URL}/orders`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    const data = await orders_res.json()
                    setOrders(data)
                } catch (err) {
                    setOrders([])
                }
                setLoading(false)
            }
        }
        fetchOrders()
    }, [user])

    return { orders , loading }
}

export default function Account() {

    const { user, logoutUser, getToken } = useContext(AuthContext)

    const { orders, loading } = useOrders(user, getToken)


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
            <h3>Vos achats :</h3>
            {loading && <p>chargements...</p>}
            {orders.map(order => (
                <div key={order.id}>
                  {new Date(order.created_at).toLocaleDateString()}  {order.room.titre} {order.total} € {order.status}
                </div>   
            ))}
            <hr />
            <p>Connexion établi par : {user.email} </p>
            <a href='#' onClick={logoutUser}>Deconnexion</a>
        </div>
    )

}