import Button from '../Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>
          Зарабатывайте больше <span>с WELBEX</span>
        </h1>
        <p className={styles.subtitle}>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={styles.features}>
        <p className={styles.featuresTitle}>
          Вместе с <span>бесплатной консультацией</span> мы дарим:
        </p>

        <ul className={styles.featuresList}>
          <li>
            <h2>Виджеты</h2>
            <p>30 готовых решений</p>
          </li>
          <li>
            <h2>Dashboard</h2>
            <p>с показателями вашего бизнеса</p>
          </li>
          <li>
            <h2>Skype Аудит</h2>
            <p>отдела продажи CRM системы</p>
          </li>
          <li>
            <h2>35 дней</h2>
            <p>использования CRM</p>
          </li>
        </ul>
        <ul className={styles.mobileFeaturesList}>
          <li>Skype аудит</li>
          <li>30 виджетов</li>
          <li>Dashboard</li>
          <li>Месяц аmoCRM</li>
        </ul>
        <Button className={styles.button}>Получить консультацию</Button>
      </div>
    </section>
  );
}
