import Image from 'next/image'
import { Avatar } from '../Avatar'
import styles from './card.module.css'
import Link from 'next/link'

export const CardPost = ({ post }) => {
  return (
    <article className={styles.cardContainer}>
      <header className={styles.header}>
        <figure className={styles.imgContainer}>
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post de título: ${post.title}`}
            className={styles.img}
          />
        </figure>
      </header>
      <section className={styles.section}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.content}>{post.body}</p>
        <Link href={'#'} className={styles.link}>Ver detalhes</Link>
      </section>
      <footer className={styles.footer}>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  )
}
