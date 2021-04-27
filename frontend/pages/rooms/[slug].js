import Head from 'next/head'

import { fromImageToUrl, API_URL } from '../../utils/urls'

const Room = ({ room }) => {
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
            {room.images.map((roomOneImg, i) =>
                  <img key={i} src={fromImageToUrl(roomOneImg)}/>)}
            <h3>{room.titre}</h3>
            <p>Nombre de lit : {room.nombredelit}</p>

            <p>
                {room.description}
            </p>
        </div>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const room_res = await fetch(`${API_URL}/rooms/?slug=${slug}`)
    const found = await room_res.json()

    return {
        props: {
            room: found[0] // Because the Api response for filters is an array
        }
    }
}

export async function getStaticPaths() {
    // Retrieve all the possible paths
    const rooms_res = await fetch(`${API_URL}/rooms/`)
    const rooms = await rooms_res.json()
    // Return them to NextJS context
    return {
        paths: rooms.map(room =>({
            params: { slug: String(room.slug) }
        })),
        fallback: false // Tells to nextJs to show a 404 if the params not match
    }
}
export default Room
