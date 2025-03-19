'use client'

import { useEffect } from 'react'
import styles from './error/error.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowBack } from '@/components/icons/ArrowBack'
import banner from './error/500.png'
import Heading from '@/components/Heading'

export default function Error({ error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className={styles.errorContainer}>
      <Image src={banner} alt='Imagem da página de erro 500' />

      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className={styles.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>

      <Link href={'/'} className={styles.link}>
        Voltar ao feed 
        <ArrowBack color='#81fe88'/>
      </Link>
    </div>
  )
}
