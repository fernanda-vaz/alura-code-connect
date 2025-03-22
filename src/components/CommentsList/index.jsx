import { Comment } from '../Comment'
import { ModalReply } from '../ModalReply'
import { Replies } from '../Replies'
import styles from './commentslist.module.css'

export const CommentsList = ({ comments }) => {
  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => (
          <li>
            <Comment comment={comment} key={comment.id} />
            <ModalReply comment={comment} />
            <Replies comment={comment} />
          </li>
        ))}
      </ul>
    </section>
  )
}
