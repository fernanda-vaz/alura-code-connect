'use client'

import styles from './modal.module.css'
import { forwardRef, useImperativeHandle, useRef } from "react"

export const Modal = forwardRef(({ children }, ref) => {
    const dialogRef = useRef(null)

    const closeModal = () => {
        dialogRef.current.close()
    }

    const openModal = () => {
        dialogRef.current.showModal()
    }

    useImperativeHandle(ref, () => {
        return {
            closeModal,
            openModal,
        }
    })

    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <header className={styles.header}>
                <button onClick={closeModal}>
                    X
                </button>
            </header>
            {children}
        </dialog>
    )
})