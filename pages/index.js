import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p>

        <Link href="/ninjas">
          <a className={styles.btn}>See All Ninjas</a>
        </Link>
      
      </div>
    </>
  )
}
