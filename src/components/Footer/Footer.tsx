import styles from './Footer.module.css';
import {ReactComponent as Telegram} from '../../assets/icons/telegram.svg';
import {ReactComponent as Viber} from '../../assets/icons/viber.svg';
import {ReactComponent as WhatsApp} from '../../assets/icons/whatsapp.svg';
import Container from '../Container/Container';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.topFooter}>
            <div>
              <p className={styles.title}>О компании</p>
              <ul className={styles.aboutList}>
                <li>
                  <a href='#'>Партнёрская программа</a>
                </li>
                <li>
                  <a href='#'>Вакансии</a>
                </li>
              </ul>
            </div>
            <div>
              <p className={styles.title}>Меню</p>
              <ul className={styles.menuList}>
                <li>
                  <a href='#'>Расчет стоиомсти</a>
                </li>
                <li>
                  <a href='#'>Услуги</a>
                </li>
                <li>
                  <a href='#'>Виджеты</a>
                </li>
                <li>
                  <a href='#'>Интеграции</a>
                </li>
                <li>
                  <a href='#'>Наши клиенты</a>
                </li>
                <li>
                  <a href='#'>Кейсы</a>
                </li>
                <li>
                  <a href='#'>Благодарственные письма</a>
                </li>
                <li>
                  <a href='#'>Блог на Youtube</a>
                </li>
                <li>
                  <a href='#'>Вакансии</a>
                </li>
                <li>
                  <a href='#'>Вопрос / Ответ</a>
                </li>
              </ul>
              <p></p>
            </div>
            <div>
              <p className={styles.contactsTitle}>Контакты</p>
              <ul className={styles.contactsList}>
                <li>
                  <a href='tel:75555555555'>+7 555 555 55 55</a>
                </li>
                <li className={styles.messengers}>
                  <button name='Telegram'>
                    <Telegram className={styles.icon} />
                  </button>
                  <button name='Viber'>
                    <Viber className={styles.icon} />
                  </button>
                  <button name='WhatsApp'>
                    <WhatsApp className={styles.icon} />
                  </button>
                </li>
                <li>
                  <a href='#'>Москва, Путевой проезд 3с1, к 902</a>
                </li>
              </ul>
              <p></p>
            </div>
          </div>
          <div className={styles.bottomFooter}>
            <div className={styles.copyright}>
              ©WELBEX {new Date().getFullYear()}. Все права защищены.
            </div>
            <div>
              <a href='#' className={styles.privacyPolicy}>
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
