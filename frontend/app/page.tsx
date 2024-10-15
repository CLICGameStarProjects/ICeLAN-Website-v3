import LocationIcon from "@components/icons/LocationIcon";
import DateIcon from "@components/icons/DateIcon";
import PriceIcon from "@components/icons/PriceIcon";
import ImageJeux from "@public/jeux.svg";
import ImageBorne from "@public/borne.svg";
import QuickInfoItem from "@/components/QuickInfoItem";
import TrophyIcon from "@/components/icons/TrophyIcon";
import AboutInfoItem from "@/components/AboutInfoItem";
import ControllerIcon from "@/components/icons/ControllerIcon";
import FoodIcon from "@/components/icons/FoodIcon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img className="hero-img hero-img-1" src={ImageJeux.src} />
        <div className="hero-content">
          <h1>
            Bienvenue à ICeLAN!
            <span>5ème édition</span>
          </h1>
          <h2>Coming Soon !</h2>
          {/* <a className="button button-blue" href="https://forms.gle/wuC41UM9WMdoGNeB7" target="_blank">S'Inscrire</a> */}
          <ul className="quick-info">
            <QuickInfoItem Icon={DateIcon}>7-8 Décembre 2024</QuickInfoItem>
            <QuickInfoItem Icon={LocationIcon}>Bâtiment BC, EPFL</QuickInfoItem>
            <QuickInfoItem Icon={PriceIcon}>15 CHF</QuickInfoItem>
          </ul>
        </div>
        <img className="hero-img hero-img-2" src={ImageBorne.src} />
      </section>
      <section className="about">
        <h2>Qu'est-ce que c'est ?</h2>
        <p>
          ICeLAN est un week-end de tournois de jeux vidéo et de jeux de plateau
          à l'EPFL. L’événement s’axe principalement autour des tournois, se
          succédant tout au long du week-end, mais offre également aux
          participant·e·s des animations autour du jeu vidéo et du jeu tout
          court pour les divertir durant tout l’événement&#xA0;! L’inscription à
          l’événement offre aux participant·e·s l’accès à tous les{" "}
          <span className="highlight-green">tournois</span>, aux{" "}
          <span className="highlight-green">animations</span> sur tout le site,
          et des{" "}
          <span className="highlight-green">
            repas chauds, snacks et boissons
          </span>{" "}
          tout au long de l’événement.
        </p>
        <AboutInfoItem
          Icon={TrophyIcon}
          title="Tournois & Lots"
          description="ICeLAN, c'est de la compétition durant 
            de très nombreux tournois sur de très nombreux jeux 
            vidéo et jeux de société. Gagne de superbes lots 
            tout le long de l'événement."
        />
        <AboutInfoItem
          Icon={ControllerIcon}
          title="Diverses Animations"
          description="Plutôt envie de chiller ? ICeLAN, c'est 
            aussi des animations incroyables, que ce soit en ligne 
            ou hors ligne - il y en a pour tous les goûts."
        />
        <AboutInfoItem
          Icon={FoodIcon}
          title="Repas, Snacks et Boissons"
          description="Nous tenons à ce que ce weekend soit 
            entièrement un weekend de détente. Ainsi, de vrais 
            repas te sont offerts tout le long de l'événement, 
            et il y a possibilité de prendre des douches sur
            place. Juste, pas de dodo !"
        />
        <a
          className="button button-green-flip button-medium"
          href="/infos.html"
        >
          Plus d'Infos
        </a>
      </section>
      <section className="conatiner chiffres">
        <div className="block-compteur">
          <div className="compteur" id="participant-counter">
            100
          </div>
          <div className="titre-compteur">Participant·e·s</div>
        </div>
        <div className="block-compteur">
          <div className="compteur" id="staff-counter">
            40
          </div>
          <div className="titre-compteur">Staffs</div>
        </div>
        <div className="block-compteur">
          <div className="compteur" id="tournament-counter">
            20
          </div>
          <div className="titre-compteur">Tournois</div>
        </div>
        <div className="block-compteur">
          <div className="compteur" id="animation-counter">
            10
          </div>
          <div className="titre-compteur">Animations</div>
        </div>
      </section>

      {/* <section className="sponsors">
            <h2>Sponsors</h2>
            <div className="sponsors-block">
                <div className="sponsor-logo">
                    <img src="assets/img/partners/tonymate.svg">
                </div>
            </div>
        </section> */}

      <section className="orga">
        <h2>Merci à tous ceux qui rendent ICeLAN possible!</h2>
        <div className="orga-block">
          <div className="orga-logo">
            <img src="assets/img/partners/gamestar.svg" />
          </div>
          <div className="orga-logo">
            <img src="assets/img/partners/clic.png" />
          </div>
          <div className="orga-logo">
            <img src="assets/img/partners/polylan.png" />
          </div>
          <div className="orga-logo">
            <img src="assets/img/partners/ebou.png" />
          </div>
        </div>
      </section>
    </main>
  );
}
