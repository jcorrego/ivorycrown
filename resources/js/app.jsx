import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../css/app.css";

// ============ ORNAMENTS (original SVG decorations) ============

const PearlMark = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 40 30" fill="none" stroke={color} strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
    <circle cx="20" cy="14" r="7.5" fill="none"/>
    <circle cx="10" cy="18" r="4.5" fill="none"/>
    <circle cx="30" cy="18" r="4.5" fill="none"/>
    <path d="M16 11 Q20 7, 24 11"/>
    <path d="M17 15 Q20 18, 23 15"/>
    <path d="M5 25 Q20 28, 35 25"/>
    <circle cx="20" cy="14" r="1.4" fill={color}/>
  </svg>
);

const Divider = ({ width = 320 }) => (
  <svg width={width} height="22" viewBox="0 0 320 22" fill="none" stroke="currentColor" strokeWidth="0.9" style={{ display: "block" }}>
    <line x1="0" y1="11" x2="120" y2="11"/>
    <line x1="200" y1="11" x2="320" y2="11"/>
    <path d="M130 11 L160 4 L190 11 L160 18 Z" fill="none"/>
    <circle cx="160" cy="11" r="2" fill="currentColor"/>
    <circle cx="125" cy="11" r="1.4" fill="currentColor"/>
    <circle cx="195" cy="11" r="1.4" fill="currentColor"/>
  </svg>
);

const CornerFlourish = ({ flip = false }) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.9"
    style={{ transform: flip ? "scaleX(-1)" : "none" }}>
    <path d="M2 2 Q 30 2, 30 30 Q 30 50, 50 50 Q 70 50, 78 78"/>
    <path d="M2 12 Q 24 12, 24 34"/>
    <circle cx="30" cy="30" r="2" fill="currentColor"/>
    <circle cx="50" cy="50" r="2" fill="currentColor"/>
    <path d="M14 2 L20 8 L14 14 L8 8 Z" fill="none"/>
  </svg>
);

const HorseShoe = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M6 5 Q 6 22, 14 24 Q 22 22, 22 5"/>
    <circle cx="6" cy="5" r="1" fill="currentColor"/>
    <circle cx="22" cy="5" r="1" fill="currentColor"/>
    <circle cx="8" cy="20" r="0.8" fill="currentColor"/>
    <circle cx="20" cy="20" r="0.8" fill="currentColor"/>
  </svg>
);

const Star4 = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z"/>
  </svg>
);

const Sparkle = ({ size = 10, style }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="currentColor" style={style}>
    <path d="M5 0 L5.8 4.2 L10 5 L5.8 5.8 L5 10 L4.2 5.8 L0 5 L4.2 4.2 Z"/>
  </svg>
);

// ============ NAVIGATION ============

function Nav({ activeSection }) {
  const items = [
    { id: "inicio", label: "Inicio" },
    { id: "quienes", label: "Quiénes Somos" },
    { id: "actividades", label: "Actividades" },
    { id: "info", label: "Información" },
    { id: "unete", label: "Únete" },
  ];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#inicio" className="nav__brand">
          <div className="nav__logo">
            <img src="assets/logo.jpg" alt="Opal Pearls" className="nav__logo-img"/>
          </div>
          <div className="nav__brand-text">
            <div className="nav__brand-name">Opal Pearls</div>
            <div className="nav__brand-sub">Lightning Star · Club Ecuestre</div>
          </div>
        </a>
        <ul className="nav__links">
          {items.map(it => (
            <li key={it.id}>
              <a href={`#${it.id}`} className={activeSection === it.id ? "nav__link nav__link--active" : "nav__link"}>
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#unete" className="nav__cta">Quiero unirme</a>
      </div>
    </nav>
  );
}

// ============ HERO ============

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__pattern" aria-hidden="true"></div>
      <div className="hero__corner hero__corner--tl"><CornerFlourish/></div>
      <div className="hero__corner hero__corner--tr"><CornerFlourish flip/></div>
      <div className="hero__corner hero__corner--bl" style={{ transform: "scaleY(-1)" }}><CornerFlourish/></div>
      <div className="hero__corner hero__corner--br" style={{ transform: "scale(-1,-1)" }}><CornerFlourish/></div>

      <div className="hero__inner">
        <div className="hero__logo">
          <div className="hero__logo-frame">
            <div className="hero__logo-inner">
              <img src="assets/logo.jpg" alt="Opal Pearls" className="hero__logo-img"/>
            </div>
          </div>
        </div>
        <div className="hero__eyebrow">
          <span className="hero__sparkle"><Sparkle size={9}/></span>
          Servidor Lightning Star · Desde la primavera
          <span className="hero__sparkle"><Sparkle size={9}/></span>
        </div>
        <h1 className="hero__title">
          <span className="hero__title-line">Opal</span>
          <span className="hero__title-line">Pearls</span>
        </h1>
        <div className="hero__divider"><Divider width={420}/></div>
        <p className="hero__lede">
          Un club tranquilo para quienes disfrutan de los detalles bonitos,<br/>
          los paseos sin prisa y las amistades de Jorvik.
        </p>
        <div className="hero__cta-row">
          <a href="#unete" className="btn btn--primary">
            <span>Quiero unirme</span>
            <span className="btn__shine" aria-hidden="true"></span>
          </a>
          <a href="#quienes" className="btn btn--ghost">Conocernos</a>
        </div>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <div className="hero__meta-num">VI</div>
            <div className="hero__meta-label">Días de Clase</div>
          </div>
          <span className="hero__meta-sep"><Star4 size={10}/></span>
          <div className="hero__meta-item">
            <div className="hero__meta-num">∞</div>
            <div className="hero__meta-label">Buena Compañía</div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Desliza</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="1" y="1" width="12" height="20" rx="6"/>
          <line x1="7" y1="6" x2="7" y2="11"/>
        </svg>
      </div>
    </section>
  );
}

// ============ QUIENES SOMOS ============

function Quienes() {
  const pillars = [
    {
      glyph: <PearlMark size={36}/>,
      title: "Amistad",
      body: "Más que un club de juego: somos un grupo de amigas que se acompaña en las cabalgatas, las carreras y las charlas largas en Discord."
    },
    {
      glyph: <HorseShoe size={32}/>,
      title: "Estilo",
      body: "Cuidamos los detalles: atuendos a juego, caballos bien presentados y fotografías con encanto. Cada salida tiene su pequeño momento bonito."
    },
    {
      glyph: <Star4 size={26}/>,
      title: "Aventura",
      body: "Exploramos rincones poco transitados de Jorvik, hacemos misiones en grupo y preparamos algo especial cada estación."
    },
  ];

  return (
    <section id="quienes" className="section section--cream">
      <SectionHeader eyebrow="Capítulo I" title="Quiénes Somos" subtitle="Un club ecuestre con alma cottage"/>

      <div className="quienes__grid">
        <div className="quienes__story">
          <p className="quienes__lede">
            <span className="quienes__dropcap">E</span>mpezamos una tarde de primavera, cuando unas cuantas jugadoras de Lightning Star buscábamos un sitio sin prisas para montar y charlar. Queríamos un club pequeño y cuidado, casi familiar.
          </p>
          <p>
            En <em>Opal Pearls</em> nos lo tomamos con calma: cada paseo tiene su historia, cada amistad tiene su tiempo y cada miembro encuentra su sitio. Nos vemos en establos cubiertos de hiedra, hacemos meriendas junto al fuego y recorremos los senderos antiguos de Jorvik.
          </p>
          <p>
            Si te gustan los atardeceres dorados, las flores silvestres y la idea de un club pequeño donde se acuerdan de tu nombre — quizá tu lugar esté aquí.
          </p>
          <div className="quienes__sign">
            <Divider width={240}/>
            <span className="quienes__sign-text">— Las fundadoras</span>
          </div>
        </div>

        <aside className="quienes__card">
          <div className="quienes__card-frame">
            <div className="quienes__card-inner">
              <div className="quienes__card-crest"><PearlMark size={44} color="var(--gold)"/></div>
              <div className="quienes__card-title">Datos del club</div>
              <div className="quienes__card-divider"><Divider width={200}/></div>
              <dl className="quienes__heraldry">
                <div><dt>Servidor</dt><dd>Lightning Star</dd></div>
                <div><dt>Idioma</dt><dd>Español</dd></div>
                <div><dt>Estética</dt><dd>Cottage Perlado</dd></div>
                <div><dt>Colores</dt><dd>Ópalo · Rosa Perla · Verde Musgo</dd></div>
                <div><dt>Animal</dt><dd>El caballo blanco</dd></div>
                <div><dt>Flor</dt><dd>Rosa silvestre</dd></div>
                <div><dt>Lema</dt><dd><em>«Brillo suave, amistad eterna»</em></dd></div>
              </dl>
            </div>
          </div>
        </aside>
      </div>

      <div className="pillars">
        {pillars.map((p, i) => (
          <article key={i} className="pillar">
            <div className="pillar__glyph" style={{ color: "var(--gold)" }}>{p.glyph}</div>
            <h3 className="pillar__title">{p.title}</h3>
            <div className="pillar__rule"></div>
            <p className="pillar__body">{p.body}</p>
            <div className="pillar__num">{["I","II","III"][i]}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ============ ACTIVIDADES Y EVENTOS ============

const CLASS_TIME = "17:30 h";

// Cada día tiene dos opciones; se hace una de las dos y se anuncia en Discord.
const WEEK = [
  { day: "Lun", weekday: "Lunes", options: ["Doma", "Actividad"] },
  { day: "Mar", weekday: "Martes", options: ["Ruta", "Western"] },
  { day: "Mié", weekday: "Miércoles", options: ["Doma", "Salto"] },
  { day: "Jue", weekday: "Jueves", options: ["Salto", "Doma"] },
  { day: "Vie", weekday: "Viernes", options: ["Western", "Ruta"] },
  { day: "Sáb", weekday: "Sábado", options: ["Coreografía", "Coreografía"] },
];

function Actividades() {
  const disciplines = [
    {
      name: "Doma",
      uniform: "Uniforme principal",
      desc: "Figuras y transiciones en el picadero. Apta para todos los niveles: se aprende sobre la marcha.",
    },
    {
      name: "Ruta",
      uniform: "Uniforme principal",
      desc: "Paseo largo por Jorvik, cambiando de zona cada vez. Siempre en grupo, sin prisa, parando para hacer fotos.",
    },
    {
      name: "Coreografía",
      uniform: "Uniforme principal",
      desc: "Ensayamos figuras en grupo para los eventos del club. Es la clase más divertida, y la que mejor queda en vídeo.",
    },
    {
      name: "Salto",
      uniform: "Uniforme de salto",
      desc: "Clase de salto en pista. Mientras no tengas el uniforme de salto, vienes con el principal.",
    },
    {
      name: "Western",
      uniform: "Uniforme western",
      desc: "Clase de monta western. Mientras no tengas el uniforme western, vienes con el principal.",
    },
    {
      name: "Actividad",
      uniform: "Uniforme principal",
      desc: "Una actividad distinta del club. Qué toca se cuenta en el anuncio del día.",
    },
  ];
  const daysFor = (name) => WEEK.filter(d => d.options.includes(name)).map(d => d.day).join(" · ");
  const tones = ["moss", "gold", "cream"];

  const traditions = [
    { season: "Primavera", title: "Carrera de Observación", note: "Recorrido por Jorvik resolviendo pistas y encontrando objetos escondidos en el camino." },
    { season: "Verano", title: "Impostor entre Nosotras", note: "Una jugadora hace de impostora durante el evento. Hay que descubrirla antes de que termine." },
    { season: "Otoño", title: "Escondite a Caballo", note: "El clásico escondite, en versión ecuestre, por los bosques y praderas del mapa." },
    { season: "Invierno", title: "Jugadora del Año", note: "Concurso para elegir a la miembro destacada del año, con varias categorías y entrega de premios." },
  ];

  return (
    <section id="actividades" className="section section--moss">
      <SectionHeader light eyebrow="Capítulo II" title="Actividades y Eventos" subtitle="Nuestro calendario semanal"/>

      <div className="cal__intro">
        <p>
          Hay clase de <strong>lunes a sábado, a las 17:30 h</strong>. Cada día tiene dos disciplinas posibles y se hace una de las dos. Cada estación, además, preparamos un evento especial para celebrarla.
        </p>
      </div>

      <div className="week">
        {WEEK.map(d => {
          const [first, second] = d.options;
          return (
            <article key={d.day} className="week__day">
              <div className="week__name">{d.day}</div>
              <div className="week__meta">{d.weekday}</div>
              <div className="week__time">{CLASS_TIME}</div>
              <div className="week__rule"></div>
              {first === second ? (
                <div className="week__opt">
                  <div className="week__opt-label">Siempre</div>
                  <div className="week__opt-name">{first}</div>
                </div>
              ) : (
                <>
                  <div className="week__opt">
                    <div className="week__opt-label">Opción I</div>
                    <div className="week__opt-name">{first}</div>
                  </div>
                  <div className="week__or">o</div>
                  <div className="week__opt">
                    <div className="week__opt-label">Opción II</div>
                    <div className="week__opt-name">{second}</div>
                  </div>
                </>
              )}
            </article>
          );
        })}
      </div>

      <ul className="cal__rules">
        <li><span className="cal__rules-icon"><Sparkle size={9}/></span>La clase del día se anuncia en <strong>#anuncios</strong>.</li>
        <li><span className="cal__rules-icon"><Sparkle size={9}/></span>Si no se anuncia ninguna, ese día es libre.</li>
        <li><span className="cal__rules-icon"><Sparkle size={9}/></span>Si no puedes venir, justifícalo en <strong>#asistencia</strong>.</li>
      </ul>

      <div className="cal__head">
        <Divider width={280}/>
        <h3 className="cal__head-title">Las disciplinas</h3>
        <p className="cal__head-sub">Qué hacemos en cada clase</p>
      </div>

      <div className="cal__grid">
        {disciplines.map((d, i) => (
          <article key={d.name} className={`evt evt--${tones[i % tones.length]}`}>
            <div className="evt__meta">
              <span className="evt__tag">{d.uniform}</span>
              <span className="evt__time">{daysFor(d.name)}</span>
            </div>
            <h3 className="evt__title">{d.name}</h3>
            <p className="evt__desc">{d.desc}</p>
            <div className="evt__corner"><Sparkle size={10}/></div>
          </article>
        ))}
      </div>

      <div className="seasons">
        <div className="seasons__head">
          <Divider width={280}/>
          <h3 className="seasons__title">Eventos de Temporada</h3>
          <p className="seasons__sub">Una celebración especial cada estación</p>
        </div>
        <div className="seasons__grid">
          {traditions.map((t, i) => (
            <div key={i} className="season">
              <div className="season__season">{t.season}</div>
              <div className="season__sparkle"><Sparkle size={9}/></div>
              <div className="season__title">{t.title}</div>
              <div className="season__note">{t.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ UNETE AL CLUB ============

const JOIN_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfnJx2U0VjNfQxOS44GoX2rmg_IjSdocuztGJKZb2VxnrjZsw/viewform";
const DISCORD_URL = "https://discord.gg/g7H8k9Ycr";

function Unete() {
  const openNormas = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-normas"));
  };

  return (
    <section id="unete" className="section section--cream">
      <SectionHeader eyebrow="Capítulo IV" title="Únete al Club" subtitle="Preséntate y nos conocemos"/>

      <div className="form-wrap">
        <div className="form-side">
          <div className="form-side__inner">
            <PearlMark size={48} color="var(--gold)"/>
            <h3 className="form-side__title">¿Qué buscamos?</h3>
            <ul className="form-side__list">
              <li><span className="form-side__bullet"><Star4 size={10}/></span>Estar en el servidor Lightning Star</li>
              <li><span className="form-side__bullet"><Star4 size={10}/></span>Trato amable y ganas de hacer grupo</li>
              <li><span className="form-side__bullet"><Star4 size={10}/></span>Asistir al menos a un evento al mes</li>
              <li><span className="form-side__bullet"><Star4 size={10}/></span>Tener Discord (aunque sea solo para leer)</li>
              <li><span className="form-side__bullet"><Star4 size={10}/></span>Cuidar el ambiente del club</li>
            </ul>
            <div className="form-side__divider"><Divider width={220}/></div>
            <p className="form-side__quote">
              <em>«Aceptamos pocas solicitudes al mes para cuidar el ambiente. Mejor poco y bien.»</em>
            </p>
            <div className="form-side__sign">— El equipo del club</div>
          </div>
        </div>

        <div className="form join">
          <div className="form__seal">
            <PearlMark size={32} color="var(--gold)"/>
          </div>
          <h3 className="form__title">Preséntate</h3>
          <p className="form__sub">Tres pasos y estás dentro</p>

          <ol className="join__steps">
            <li className="join__step">
              <span className="join__num">I</span>
              <div>
                <div className="join__step-title">Lee las normas</div>
                <p className="join__step-text">
                  Échale un vistazo a las <a href="#" onClick={openNormas} className="field__link">normas del club</a> para saber cómo cuidamos el buen ambiente.
                </p>
              </div>
            </li>
            <li className="join__step">
              <span className="join__num">II</span>
              <div>
                <div className="join__step-title">Entra en nuestro Discord</div>
                <p className="join__step-text">
                  Ahí avisamos de los eventos y te escribiremos. <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="field__link">Únete al servidor del club</a>.
                </p>
              </div>
            </li>
            <li className="join__step">
              <span className="join__num">III</span>
              <div>
                <div className="join__step-title">Rellena la solicitud</div>
                <p className="join__step-text">
                  Cuéntanos quién eres, cómo se llama tu personaje y por qué te gustaría unirte a Opal Pearls.
                </p>
              </div>
            </li>
          </ol>

          <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--block">
            <span>Abrir el formulario de solicitud</span>
            <span className="btn__shine" aria-hidden="true"></span>
          </a>
          <div className="form__foot">
            Se abre en Google Forms. Te responderemos en unos tres días.
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__crest">
          <div className="footer__logo-frame">
            <img src="assets/logo.jpg" alt="Opal Pearls" className="footer__logo-img"/>
          </div>
        </div>
        <div className="footer__name">Opal Pearls</div>
        <div className="footer__motto"><em>«Brillo suave, amistad eterna»</em></div>
        <div className="footer__tag">Lightning Star · Club Ecuestre · MMXXVI</div>
        <Divider width={240}/>
        <div className="footer__links">
          <a href="#quienes">Quiénes Somos</a>
          <span>·</span>
          <a href="#actividades">Actividades</a>
          <span>·</span>
          <a href="#unete">Únete</a>
          <span>·</span>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord</a>
          <span>·</span>
          <a href="#" onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-normas")); }}>Normas</a>
        </div>
        <div className="footer__fine">
          Hecho con cariño por el equipo del club. Web no oficial — sin relación con el juego.
        </div>
      </div>
    </footer>
  );
}

// ============ SECTION HEADER ============

function SectionHeader({ eyebrow, title, subtitle, light }) {
  return (
    <header className={`sect-h ${light ? "sect-h--light" : ""}`}>
      <div className="sect-h__eyebrow">{eyebrow}</div>
      <h2 className="sect-h__title">{title}</h2>
      <div className="sect-h__divider"><Divider width={300}/></div>
      <div className="sect-h__sub">{subtitle}</div>
    </header>
  );
}

// ============ INFORMACION DEL CLUB ============

// Cada pieza: [prenda, nombre del artículo en el juego, precio]. Precio null = sin precio en la lista del club.
const UNIFORMS = [
  {
    eye: "Uniforme principal",
    title: "Doma",
    img: "assets/uniform-doma.jpg",
    alt: "Uniforme de doma de Opal Pearls — jersey de punto blanco, sombrero de copa negro y caballo blanco con manta de doma",
    uses: "Doma · Coreografías · Rutas · Fotos oficiales · Otras actividades",
    deadline: "1–2 meses",
    horse: [
      ["Silla de verano", "Sakura", "165 sc"],
      ["Rozal negro", "Belle Glamour", "90 sc · 9000 js"],
      ["Manta de doma de exhibición negra", "Belle Glamour", "99 sc · 9900 js"],
      ["Protectores para patas negros", "Belle Glamour", "20 sc · 2000 js"],
      ["Flor para la cola", "Amazona", "30 sc · 3000 js"],
      ["Flor para melena", "Amazona", "30 sc · 3000 js"],
    ],
    rider: [
      ["Botas de jinete", "Mezcla en Pera", "90 sc · 9000 js"],
      ["Jersey de punto blanco", "Encanto Escandinavo", "100 sc · 9900 js"],
      ["Sombrero de copa negro", "Belle Glamour", "80 sc · 8000 js"],
      ["Pantalones de equitación", "Mezcla en Café", "80 sc · 8000 js"],
      ["Guantes blancos (de preferencia)", null, null],
    ],
  },
  {
    eye: "Uniforme de salto",
    title: "Salto",
    img: "assets/uniform-salto.jpg",
    alt: "Uniforme de salto de Opal Pearls — chaqueta marrón, pantalón blanco, casco y caballo blanco con vendas rosas",
    uses: "Clases de salto",
    deadline: "2 meses extra",
    horse: [
      ["Riendas de diseñador rosadas", null, "41 sc · 3800 js"],
      ["Manta de salto", "Clase Mundial", "90 sc · 9000 js"],
      ["Silla de salto", "Alumna de la Plaga", null],
      ["Brida con medallón negra", "Belle Glamour", "90 sc · 9000 js"],
      ["Protectores", "Dama Floral", "45 sc · 4500 js"],
      ["Flor para la cola", "Amazona", "30 sc · 3000 js"],
      ["Flor para melena", "Amazona", "30 sc · 3000 js"],
    ],
    rider: [
      ["Chaqueta", "Amazona", "80 sc · 8000 js"],
      ["Pantalones", "Al Sol", "45 sc · 4500 js"],
      ["Botas de jinete", "Mezcla en Pera", "90 sc · 9000 js"],
      ["Guantes blancos (de preferencia)", null, null],
      ["Casco", "Mezcla en Pera", "80 sc · 8000 js"],
    ],
  },
  {
    eye: "Uniforme western",
    title: "Western",
    img: "assets/uniform-western.jpg",
    alt: "Uniforme western de Opal Pearls — jersey crema, sombrero vaquero blanco y caballo blanco con silla western",
    uses: "Clases de western",
    deadline: "2 meses extra",
    horse: [
      ["Manta", "Dama Floral", "85 sc · 8500 js"],
      ["Silla marrón claro", "Montaña Rocosa", "115 sc · 9900 js"],
      ["Brida del lejano oeste", "Magnolia", "80 sc · 8000 js"],
      ["Protectores", "Dama Floral", "45 sc · 4500 js"],
      ["Flor para la cola", "Amazona", "30 sc · 3000 js"],
      ["Flor para melena", "Amazona", "30 sc · 3000 js"],
    ],
    rider: [
      ["Top con media cremallera", "Mezcla en Café", "70 sc · 7000 js"],
      ["Pantalones", "Al Sol", "45 sc · 4500 js"],
      ["Botas", "Inconformista", "55 sc · 5500 js"],
      ["Guantes blancos (de preferencia)", null, null],
      ["Sombrero del lejano oeste", "Adelaide", "80 sc · 8000 js"],
    ],
  },
];

function KitList({ icon, label, items }) {
  return (
    <div className="uni__kit">
      <div className="info__kit-head">{icon}<span>{label}</span></div>
      <ul className="uni__list">
        {items.map(([piece, name, price], i) => (
          <li key={i}>
            <span className="uni__piece">{piece}{name && <> <em>{name}</em></>}</span>
            {price && <span className="uni__price">{price}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Info() {
  return (
    <section id="info" className="section section--cream info-sec">
      <SectionHeader eyebrow="Capítulo III" title="Información del Club" subtitle="Nuestra estética"/>

      <div className="info__intro">
        <p>
          Opal Pearls se reconoce por su <em>caballo</em> y sus <em>uniformes</em>: uno principal para la doma, las coreografías, las rutas y las fotos oficiales, y dos más para las clases de salto y de western.
        </p>
      </div>

      {/* Caballo */}
      <article className="info__card info__card--wide">
        <figure className="info__horse">
          <div className="info__horse-frame">
            <div className="info__horse-inner info__horse-inner--horse">
              <img src="assets/horse-official.png" alt="Dutch Warmblood capa 7 — caballo oficial de Opal Pearls" className="info__horse-img"/>
            </div>
          </div>
        </figure>
        <div className="info__wide-body">
          <div className="info__eye">El caballo del club</div>
          <h3 className="info__title"><em>Dutch Warmblood</em><br/>Capa <span className="info__numeral">VII</span></h3>
          <div className="info__rule"></div>
          <p className="info__lede">
            Un cremello luminoso de crines plateadas. Lo lucimos en los eventos importantes, siempre con crines trenzadas y un pequeño detalle a tono con la estación.
          </p>
          <dl className="info__facts">
            <div className="info__fact"><dt>Raza</dt><dd>Dutch Warmblood</dd></div>
            <div className="info__fact"><dt>Capa</dt><dd>Nº 7 · Cremello</dd></div>
            <div className="info__fact"><dt>Crines</dt><dd>Trenzadas</dd></div>
            <div className="info__fact"><dt>Detalle</dt><dd>Flores Amazona</dd></div>
          </dl>
        </div>
      </article>

      {/* Uniformes */}
      <div className="uni-head">
        <Divider width={280}/>
        <h3 className="uni-head__title">Los uniformes</h3>
        <p className="uni-head__sub">Uno principal y dos para las clases</p>
      </div>

      <div className="uni-grid">
        {UNIFORMS.map((u, i) => (
          <article key={u.title} className="info__card uni">
            <div className="info__num">{["I", "II", "III"][i]}</div>
            <div className="uni__side">
              <div className="info__eye">{u.eye}</div>
              <h3 className="info__title">{u.title}</h3>
              <div className="info__rule"></div>
              <figure className="info__horse">
                <div className="info__horse-frame">
                  <div className="info__horse-inner info__horse-inner--uniform">
                    <img src={u.img} alt={u.alt} className="uni__img" loading="lazy"/>
                  </div>
                </div>
              </figure>
            </div>
            <div className="uni__body">
              <dl className="uni__meta">
                <div><dt>Se usa en</dt><dd>{u.uses}</dd></div>
                <div><dt>Plazo</dt><dd>{u.deadline}</dd></div>
              </dl>
              <KitList icon={<HorseShoe size={16}/>} label="Caballo" items={u.horse}/>
              <KitList icon={<PearlMark size={16} color="currentColor"/>} label="Personaje" items={u.rider}/>
            </div>
          </article>
        ))}
      </div>

      <p className="uni-legend">Precios en star coins (sc) y jorvik shillings (js)</p>

      <div className="info__note-row">
        <span className="info__note-icon"><Sparkle size={10}/></span>
        <p>
          El uniforme principal hay que conseguirlo en un plazo de 1–2 meses. El de salto y el de western tienen 2 meses extra porque no son principales; mientras no los tengas, usa el principal. Fuera de las actividades del club puedes montar y vestir lo que prefieras.
        </p>
      </div>
    </section>
  );
}

// ============ NORMAS MODAL ============

function NormasModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const reglas = [
    "Respeto absoluto entre todos los miembros",
    "Cero tolerancia a insultos, acoso, discriminación o drama",
    "Lenguaje adecuado, sin contenido +18 o NSFW",
    "Nada de spam, flood ni publicidad sin permiso",
    "Usa cada canal para su finalidad",
    "Mantén un ambiente tranquilo y amable",
    "Escucha y respeta al staff y sus decisiones",
    "En eventos y cabalgatas, sigue las indicaciones",
  ];

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="normas-title" onClick={onClose}>
      <div className="modal__backdrop"></div>
      <div className="modal__panel" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M2 2 L12 12 M12 2 L2 12"/>
          </svg>
        </button>

        <div className="modal__inner">
          <div className="modal__seal">
            <PearlMark size={42} color="var(--gold)"/>
          </div>
          <div className="modal__eye">Capítulo V · Normas del Club</div>
          <h2 id="normas-title" className="modal__title">Normas del club</h2>
          <Divider width={260}/>

          <p className="modal__lede">
            Este es un espacio seguro, respetuoso y tranquilo para disfrutar <em>Star Stable Online</em> juntas.
          </p>
          <p className="modal__sub">
            Al formar parte del club aceptas cumplir las siguientes reglas:
          </p>

          <ul className="modal__rules">
            {reglas.map((r, i) => (
              <li key={i}>
                <span className="modal__rule-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="modal__rule-text">{r}</span>
              </li>
            ))}
          </ul>

          <div className="modal__section">
            <div className="modal__section-eye">Inactividad</div>
            <p>
              En caso de no poder asistir a algún evento, se recomienda avisar al club. Si hay una cantidad recurrente de faltas sin aviso, existe la posibilidad de la expulsión.
            </p>
          </div>

          <div className="modal__sign">
            <Divider width={200}/>
            <p className="modal__sign-text"><em>Gracias por formar parte de Opal Pearls.</em></p>
          </div>

          <button className="btn btn--primary modal__btn" onClick={onClose}>
            <span>Entendido</span>
            <span className="btn__shine" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ============ APP ============

function App() {
  const [active, setActive] = useState("inicio");
  const [normasOpen, setNormasOpen] = useState(false);
  useEffect(() => {
    const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";
    const payload = JSON.stringify({
      _token: csrf,
      path: window.location.pathname + window.location.search,
      referrer: document.referrer || null,
      screen: `${window.screen.width}x${window.screen.height}`,
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      if (navigator.sendBeacon("/analytics/page-view", blob)) return;
    }

    fetch("/analytics/page-view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-CSRF-TOKEN": csrf,
      },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  }, []);
  useEffect(() => {
    const onOpen = () => setNormasOpen(true);
    window.addEventListener("open-normas", onOpen);
    return () => window.removeEventListener("open-normas", onOpen);
  }, []);
  useEffect(() => {
    const sections = ["inicio", "quienes", "actividades", "info", "unete"];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = "inicio";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <Nav activeSection={active}/>
      <Hero/>
      <Quienes/>
      <Actividades/>
      <Info/>
      <Unete/>
      <Footer/>
      <NormasModal open={normasOpen} onClose={() => setNormasOpen(false)}/>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
