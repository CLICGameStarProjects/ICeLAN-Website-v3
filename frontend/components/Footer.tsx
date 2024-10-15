import DiscordIcon from "./icons/DiscordIcon";
import InstagramIcon from "./icons/InstagramIcon";
import MailIcon from "./icons/MailIcon";
import TelegramIcon from "./icons/TelegramIcon";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-col">
          <div className="button-wrapper">
            <p>Les places sont limitées alors n'hésite pas !</p>
            <a
              className="button button-medium button-blue-flip"
              href="https://forms.gle/wuC41UM9WMdoGNeB7"
              target="_blank"
            >
              S'inscrire
            </a>
          </div>
          <br />
          <p>ⓒ Game* 2023</p>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <div className="social-links">
              <SocialLink href="mailto:gamestar.clic@epfl.ch" Icon={MailIcon}>
                gamestar.clic@epfl.ch
              </SocialLink>
              <SocialLink href="https://t.me/CLICGameStar" Icon={TelegramIcon}>
                @CLICGameStar
              </SocialLink>
              <SocialLink
                href="https://instagram.com/CLICGameStar"
                Icon={InstagramIcon}
              >
                @CLICGameStar
              </SocialLink>
              <SocialLink
                href="https://discord.gg/tMaKxY8V4M"
                Icon={DiscordIcon}
              >
                Discord ICeLAN
              </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
