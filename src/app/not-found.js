import Link from 'next/link'
import styles from './not-found/not-found.module.css'
import banner from './not-found/404.png'
import Image from 'next/image'
import Heading from '@/components/Heading'
import { ArrowBack } from '@/components/icons/ArrowBack'

export default function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <Image src={banner} alt='Imagem da página de erro 500' />

      <Heading>Ops! Página não encontrada.</Heading>
      <p className={styles.text}>
        Você pode voltar ao feed e continuar buscando projetos incríveis!
      </p>

      <Link href={'/'} className={styles.link}>
        Voltar ao feed
        <ArrowBack color='#81fe88' />
      </Link>
    </div>
  )
}
