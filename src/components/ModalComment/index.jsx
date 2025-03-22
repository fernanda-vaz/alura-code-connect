'use client'

import { useRef } from 'react'
import { IconButton } from '../IconButton'
import { Chat } from '../icons/Chat'
import { Modal } from '../Modal'
import styles from './modalcomment.module.css'
import { SubmitButton } from '../SubmitButton'
import { Subheading } from '../Subheading'
import { TextArea } from '../TextArea'

export const ModalComment = ({ action }) => {
  const modalRef = useRef(null)
  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} onSubmit={() => modalRef.current.closeModal()}>
          <Subheading>Deixe seu comentário sobre o post:</Subheading>
          <TextArea
            required
            rows={8}
            name='text'
            placeholder='Digite aqui...'
          />
          <div className={styles.footer}>
            <SubmitButton>Comentar</SubmitButton>
          </div>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  )
}
