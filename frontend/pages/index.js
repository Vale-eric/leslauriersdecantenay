import Head from 'next/head'
import styles from '../styles/Home.module.css'

import rooms from '../rooms.json'
import { fromImageToUrl } from '../utils/urls'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {rooms.map(room => (
        <div key={room.titre} className={styles.room}>
          <div className={styles.room__Rows}>
            <div className={styles.room__ColImg}>
              {room.images.map((roomOneImg) =>
              <img src={fromImageToUrl(roomOneImg)}/>)}
            </div>
            <div className={styles.room__Col}>
              {room.titre} {room.description}
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}
