import styles from './heading.module.css'

const Heading = ({ children }) => {
  return <h1 className={styles.heading}>{children}</h1>
}

export default Heading
