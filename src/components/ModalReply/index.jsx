'use client'

import styles from './modalreply.module.css'
import { useRef } from 'react'
import { Modal } from '../Modal'
import { SubmitButton } from '../SubmitButton'
import { TextArea } from '../TextArea'
import { replyComment } from '@/actions'
import { Comment } from '../Comment'

export const ModalReply = ({ comment, post }) => {
  const modalRef = useRef(null)
  const openModal = () => {
    modalRef.current.openModal()
  }
  const action = replyComment.bind(null, comment)

  return (
    <>
      <Modal ref={modalRef} onSubmit={() => modalRef.current.closeModal()}>
        <form action={action}>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider}></div>
          <TextArea
            required
            rows={8}
            name='text'
            placeholder='Digite aqui...'
          />
          <div className={styles.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button className={styles.btn} onClick={openModal}>
        Responder
      </button>
    </>
  )
}
