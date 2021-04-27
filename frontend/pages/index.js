import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { fromImageToUrl, API_URL } from '../utils/urls'

export default function Home( { rooms } ) {
  return (
    <div>
      <Head>
        <title>Les Laurier de Cantenay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {rooms.map(room => (
        <div key={room.titre} className={styles.room}>
          <Link href={`/rooms/${room.slug}`}>
            <a>
              <div className={styles.room__Rows}>
                <div className={styles.room__ColImg}>
                  <img src={fromImageToUrl(room.images[0])}/>
                </div>
                <div className={styles.room__Col}>
                  {room.titre} {room.description}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}

    </div>
  )
}

export async function getStaticProps() {
  // Fetch the rooms
    const room_res = await fetch(`${API_URL}/rooms/`)
    const rooms = await room_res.json()

  //Return the rooms as props
    return {
      props: {
        rooms
      }
    }
}