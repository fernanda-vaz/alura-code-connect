import Image from 'next/image'
import { Avatar } from '../Avatar'
import styles from './card.module.css'
import Link from 'next/link'
import { incrementLikes, postComment } from '@/actions'
import { LikeButton } from './LikeButton'
import { ModalComment } from '../ModalComment'

export const CardPost = ({ post, highlight }) => {
  const submitLike = incrementLikes.bind(null, post)
  const submitComment = postComment.bind(null, post)

  return (
    <article
      className={styles.cardContainer}
      style={{ width: highlight ? 993 : 486 }}
    >
      <header className={styles.header}>
        <figure style={{ height: highlight ? 300 : 133 }}>
          <Image
            src={post.cover}
            fill
            alt={`Capa do post de título: ${post.title}`}
            className={styles.img}
          />
        </figure>
      </header>
      <section className={styles.section}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.content}>{post.body}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Ver detalhes
        </Link>
      </section>
      <footer className={styles.footer}>
        <div className={styles.actions}>
          <form action={submitLike}>
            <LikeButton />
            <p>{post.likes}</p>
          </form>
          <div>
            <ModalComment action={submitComment} />
            <p>{post.comments.length}</p>
          </div>
        </div>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  )
}
