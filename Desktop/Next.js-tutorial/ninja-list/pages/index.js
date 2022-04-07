import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus iste molestias quasi ex numquam dolorem ab. Cupiditate aliquid modi eligendi quas natus hic, excepturi eius voluptatum vero? Delectus, soluta?</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, maxime voluptate possimus provident tempora adipisci. Quos praesentium molestias vero accusamus vel corrupti consequuntur ipsum nulla beatae, tempore id in? Reprehenderit?</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
