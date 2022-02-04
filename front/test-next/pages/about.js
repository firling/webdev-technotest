import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>About me</h1>

            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta metus aliquet, pellentesque tellus a, rhoncus enim. 
                Cras porttitor molestie erat. In volutpat tortor et nunc cursus, non auctor nisi lobortis. Curabitur id odio et mauris posuere congue. 
                Nullam eget porta purus, eget auctor dolor. Mauris eget justo maximus ipsum rutrum cursus. Donec ex odio, rutrum a vulputate a, rutrum nec tellus. 
                In hac habitasse platea dictumst. Cras et molestie magna. In hac habitasse platea dictumst.
            </p>

            <p className={styles.description}>
            Integer consequat sodales magna. Duis maximus venenatis varius. Pellentesque tortor erat, laoreet sed libero a, imperdiet volutpat libero. 
            Morbi justo magna, iaculis in ornare et, efficitur ac quam. Cras et risus risus.
            </p>
        </main>
    );
  }
  