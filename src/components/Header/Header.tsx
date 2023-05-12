import styles from './Header.module.css';
import logo from '../../assets/logo_welbex.svg';
import logoMobile from '../../assets/logo_welbex_mobile.svg';
import {ReactComponent as Telegram} from '../../assets/icons/telegram.svg';
import {ReactComponent as Viber} from '../../assets/icons/viber.svg';
import {ReactComponent as WhatsApp} from '../../assets/icons/whatsapp.svg';
import Container from '../Container/Container';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <a href='/'>
              <picture>
                <source srcSet={`${logoMobile} 1x`} media='(max-width: 768px)' />
                <img src={logo} alt='Welbex' />
              </picture>
            </a>
            <span>
              крупный интегратор CRM
              <br /> в Росcии и ещё 8 странах
            </span>
          </div>
          <nav className={styles.navigation}>
            <a href='#'>Услуги</a>
            <a href='#'>Виджеты</a>
            <a href='#'>Интеграции</a>
            <a href='#'>Кейсы</a>
            <a href='#'>Сертификаты</a>
          </nav>
          <div className={styles.phone}>
            <a href='tel:75555555555'>+7 555 555-55-55</a>
          </div>
          <div className={styles.messengers}>
            <button name='Telegram'>
              <Telegram className={styles.icon} />
            </button>
            <button name='Viber'>
              <Viber className={styles.icon} />
            </button>
            <button name='WhatsApp'>
              <WhatsApp className={styles.icon} />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
