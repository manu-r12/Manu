import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '@/components/card'
import Footer from '@/components/footer/footer'



export default function Home() {
  return (
    <>
      <Head>
        <title>Manu</title>
        <meta name="description" content="Links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={styles.main}>
        <Card/>
        <div>
      <Footer classname={styles.footer}/>
      </div>
      </main>
  
    </>
  )
}
