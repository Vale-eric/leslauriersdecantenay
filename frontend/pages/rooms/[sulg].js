import Head from 'next/head'

import rooms from '../../rooms.json'
import { fromImageToUrl } from '../../utils/urls'
const room = rooms[0]

const Room = () => {
    return (
        <div>
            <Head>
                {room.meta_title &&
                <title>{room.meta_title}</title>
                }
                {room.meta_description &&
                    <meta name="description" content={room.meta_description}/>
                
                }

            </Head>
            <h3>{room.titre}</h3>
            <img src={fromImageToUrl(room.images[0])}/>
            <h3>{room.titre}</h3>
            <p>Nombre de lit : {room.nombredelit}</p>

            <p>
                {room.description}
            </p>
        </div>
    )
}
export default Room
