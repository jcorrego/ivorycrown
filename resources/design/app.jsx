const { useState, useEffect, useRef } = React;

// ============ ORNAMENTS (original SVG decorations) ============

const Crown = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 40 30" fill="none" stroke={color} strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
    <path d="M4 24 L6 10 L12 18 L20 6 L28 18 L34 10 L36 24 Z" fill="none"/>
    <line x1="4" y1="27" x2="36" y2="27"/>
    <circle cx="6" cy="9" r="1.2" fill={color}/>
    <circle cx="20" cy="5" r="1.4" fill={color}/>
    <circle cx="34" cy="9" r="1.2" fill={color}/>
    <circle cx="20" cy="22" r="1.5" fill="none"/>
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
            <img src="assets/logo.jpg" alt="Ivory Crown" className="nav__logo-img"/>
          </div>
          <div className="nav__brand-text">
            <div className="nav__brand-name">Ivory Crown</div>
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
              <img src="assets/logo.jpg" alt="Ivory Crown" className="hero__logo-img"/>
            </div>
          </div>
        </div>
        <div className="hero__eyebrow">
          <span className="hero__sparkle"><Sparkle size={9}/></span>
          Servidor Lightning Star · Desde la primavera
          <span className="hero__sparkle"><Sparkle size={9}/></span>
        </div>
        <h1 className="hero__title">
          <span className="hero__title-line">Ivory</span>
          <span className="hero__title-amp">&</span>
          <span className="hero__title-line">Crown</span>
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
            <div className="hero__meta-num">III</div>
            <div className="hero__meta-label">Eventos a la Semana</div>
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
      glyph: <Crown size={36}/>,
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
            En <em>Ivory Crown</em> nos lo tomamos con calma: cada paseo tiene su historia, cada amistad tiene su tiempo y cada miembro encuentra su sitio. Nos vemos en establos cubiertos de hiedra, hacemos meriendas junto al fuego y recorremos los senderos antiguos de Jorvik.
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
              <div className="quienes__card-crest"><Crown size={44} color="var(--gold)"/></div>
              <div className="quienes__card-title">Datos del club</div>
              <div className="quienes__card-divider"><Divider width={200}/></div>
              <dl className="quienes__heraldry">
                <div><dt>Servidor</dt><dd>Lightning Star</dd></div>
                <div><dt>Idioma</dt><dd>Español</dd></div>
                <div><dt>Estética</dt><dd>Cottage Royal</dd></div>
                <div><dt>Colores</dt><dd>Marfil · Verde Musgo · Oro Viejo</dd></div>
                <div><dt>Animal</dt><dd>El caballo blanco</dd></div>
                <div><dt>Flor</dt><dd>Rosa silvestre</dd></div>
                <div><dt>Lema</dt><dd><em>«Fuerza suave, corona eterna»</em></dd></div>
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

function Actividades() {
  const events = [
    {
      dayShort: "Lun", weekday: "Lunes", time: "20:00 h",
      tag: "Doma",
      title: "Doma Clásica",
      desc: "Una hora de doma en el picadero. Practicamos figuras y transiciones a buen ritmo. Apto para todos los niveles — se aprende sobre la marcha.",
      tone: "moss"
    },
    {
      dayShort: "Mié", weekday: "Miércoles", time: "20:30 h",
      tag: "Coreografía",
      title: "Coreografía a Caballo",
      desc: "Ensayamos figuras grupales para los eventos del club. Es la actividad más divertida — y la que mejor queda en vídeo.",
      tone: "gold"
    },
    {
      dayShort: "Sáb", weekday: "Sábado", time: "18:00 h",
      tag: "Ruta",
      title: "Ruta del Fin de Semana",
      desc: "Paseo largo por Jorvik. Cambiamos de zona cada semana — siempre en grupo, sin prisa, parando para hacer fotos.",
      tone: "cream"
    },
  ];

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
          Nos reunimos <strong>tres veces por semana</strong> para entrenar, ensayar y dar paseos largos. Cada estación, además, preparamos un evento especial para celebrarla.
        </p>
      </div>

      <div className="cal__grid">
        {events.map((e, i) => (
          <article key={i} className={`evt evt--${e.tone}`}>
            <div className="evt__date">
              <div className="evt__day">{e.dayShort}</div>
              <div className="evt__month">Semanal</div>
            </div>
            <div className="evt__divider"></div>
            <div className="evt__body">
              <div className="evt__meta">
                <span className="evt__tag">{e.tag}</span>
                <span className="evt__time">{e.weekday} · {e.time}</span>
              </div>
              <h3 className="evt__title">{e.title}</h3>
              <p className="evt__desc">{e.desc}</p>
              <a className="evt__link" href="#unete">
                Apuntarse
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M0 5 L12 5 M8 1 L12 5 L8 9"/></svg>
              </a>
            </div>
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

// ============ UNETE AL CLUB (FORM) ============

function Unete() {
  const [form, setForm] = useState({
    nombre: "",
    personaje: "",
    nivel: "",
    edad: "",
    discord: "",
    horario: "Tardes",
    raza: "Cualquiera",
    motivo: "",
    intereses: [],
    consentimiento: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleInterest = (it) => setForm(f => ({
    ...f,
    intereses: f.intereses.includes(it) ? f.intereses.filter(x => x !== it) : [...f.intereses, it]
  }));

  const errors = {
    nombre: !form.nombre ? "El nombre es necesario" : null,
    personaje: !form.personaje ? "El nombre del personaje es necesario" : null,
    discord: !form.discord ? "El Discord es necesario para contactarte" : null,
    motivo: form.motivo.length < 20 ? "Cuéntanos un poco más (mín. 20 caracteres)" : null,
    consentimiento: !form.consentimiento ? "Debes aceptar las normas del club" : null,
  };
  const valid = !Object.values(errors).some(Boolean);

  const submit = (e) => {
    e.preventDefault();
    setTouched({ nombre: 1, personaje: 1, discord: 1, motivo: 1, consentimiento: 1 });
    if (!valid) return;
    setSubmitted(true);
    window.scrollTo({ top: document.getElementById("unete").offsetTop - 80, behavior: "smooth" });
  };

  const interests = ["Carreras", "Paseos & rol", "Fotografía", "Entrenamiento", "Misiones en grupo", "Eventos sociales"];

  if (submitted) {
    return (
      <section id="unete" className="section section--cream">
        <SectionHeader eyebrow="Capítulo IV" title="¡Solicitud recibida!" subtitle="Te responderemos pronto"/>
        <div className="success">
          <div className="success__crest"><Crown size={72} color="var(--gold)"/></div>
          <h3 className="success__title">¡Bienvenida, {form.nombre.split(" ")[0] || "amiga"}!</h3>
          <Divider width={280}/>
          <p className="success__msg">
            Hemos recibido tu solicitud. Alguien del club te escribirá por Discord
            a <strong>{form.discord}</strong> en unos <strong>tres días</strong> para invitarte
            a una primera cabalgata de prueba.
          </p>
          <p className="success__msg">
            Mientras tanto, deja a <strong>{form.personaje}</strong> a punto — cepillado, herraduras frescas y un atuendo bonito a tono con la estación.
          </p>
          <p className="success__msg success__msg--cta">
            ¿Aún no estás en nuestro Discord? Únete ya y preséntate en el canal de bienvenida.
          </p>
          <div className="success__actions">
            <a href="https://discord.gg/4zYYGjcEw" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <span>Entrar al Discord</span>
              <span className="btn__shine" aria-hidden="true"></span>
            </a>
            <button className="btn btn--ghost" onClick={() => { setSubmitted(false); setForm({ ...form, motivo: "", consentimiento: false }); }}>
              Enviar otra solicitud
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="unete" className="section section--cream">
      <SectionHeader eyebrow="Capítulo IV" title="Únete al Club" subtitle="Preséntate y nos conocemos"/>

      <div className="form-wrap">
        <div className="form-side">
          <div className="form-side__inner">
            <Crown size={48} color="var(--gold)"/>
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

        <form className="form" onSubmit={submit} noValidate>
          <div className="form__seal">
            <Crown size={32} color="var(--gold)"/>
          </div>
          <h3 className="form__title">Preséntate</h3>
          <p className="form__sub">Los campos con <span className="req">✦</span> son obligatorios.</p>

          <div className="form__row">
            <Field label="Tu nombre" required err={touched.nombre && errors.nombre}>
              <input type="text" value={form.nombre} onChange={e => set("nombre", e.target.value)}
                onBlur={() => setTouched(t => ({ ...t, nombre: 1 }))} placeholder="Como prefieras que te llamemos"/>
            </Field>
            <Field label="Edad">
              <input type="number" min="1" max="99" value={form.edad} onChange={e => set("edad", e.target.value)} placeholder="Tu edad"/>
            </Field>
          </div>

          <div className="form__row">
            <Field label="Nombre del personaje" required err={touched.personaje && errors.personaje}>
              <input type="text" value={form.personaje} onChange={e => set("personaje", e.target.value)}
                onBlur={() => setTouched(t => ({ ...t, personaje: 1 }))} placeholder="Ej. Rowan Whitemoor"/>
            </Field>
            <Field label="Nivel actual">
              <input type="number" min="1" max="30" value={form.nivel} onChange={e => set("nivel", e.target.value)} placeholder="1 — 30"/>
            </Field>
          </div>

          <Field label="Discord" required err={touched.discord && errors.discord} hint={<span>¿Aún no estás dentro? <a href="https://discord.gg/4zYYGjcEw" target="_blank" rel="noopener noreferrer" className="field__link">Únete al servidor del club</a></span>}>
            <input type="text" value={form.discord} onChange={e => set("discord", e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, discord: 1 }))} placeholder="usuario#0000"/>
          </Field>

          <Field label="Horario habitual de juego">
            <div className="seg">
              {["Mañanas", "Tardes", "Noches", "Fines de semana"].map(opt => (
                <button key={opt} type="button"
                  className={form.horario === opt ? "seg__btn seg__btn--active" : "seg__btn"}
                  onClick={() => set("horario", opt)}>{opt}</button>
              ))}
            </div>
          </Field>

          <Field label="Raza preferida de tu caballo">
            <select value={form.raza} onChange={e => set("raza", e.target.value)}>
              <option>Cualquiera</option>
              <option>Andaluz</option>
              <option>Friesian</option>
              <option>Pura Raza Inglesa</option>
              <option>Akhal-Teké</option>
              <option>Pony de Jorvik</option>
              <option>Caballo de la Estrella del Norte</option>
            </select>
          </Field>

          <Field label="¿Qué actividades te interesan más?">
            <div className="chips">
              {interests.map(it => (
                <button key={it} type="button"
                  className={form.intereses.includes(it) ? "chip chip--on" : "chip"}
                  onClick={() => toggleInterest(it)}>
                  {form.intereses.includes(it) && <Star4 size={10}/>}
                  {it}
                </button>
              ))}
            </div>
          </Field>

          <Field label="¿Por qué te gustaría unirte a Ivory Crown?" required err={touched.motivo && errors.motivo}>
            <textarea rows="5" value={form.motivo} onChange={e => set("motivo", e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, motivo: 1 }))}
              placeholder="Cuéntanos un poco sobre ti, cómo te gusta jugar y qué esperas del club…"/>
            <div className="form__count">{form.motivo.length} caracteres</div>
          </Field>

          <label className="check">
            <input type="checkbox" checked={form.consentimiento}
              onChange={e => set("consentimiento", e.target.checked)}
              onBlur={() => setTouched(t => ({ ...t, consentimiento: 1 }))}/>
            <span className="check__box"></span>
            <span className="check__label">
              He leído las <a href="#" onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-normas")); }}>normas del club</a> y prometo cuidar el buen ambiente.
            </span>
          </label>
          {touched.consentimiento && errors.consentimiento && <div className="form__err">{errors.consentimiento}</div>}

          <button type="submit" className="btn btn--primary btn--block">
            <span>Enviar solicitud</span>
            <span className="btn__shine" aria-hidden="true"></span>
          </button>
          <div className="form__foot">
            Te responderemos en unos tres días.
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, required, err, children, hint }) {
  return (
    <label className={`field ${err ? "field--err" : ""}`}>
      <div className="field__label">{label} {required && <span className="req">✦</span>}</div>
      {children}
      {err && <div className="form__err">{err}</div>}
      {hint && !err && <div className="field__hint">{hint}</div>}
    </label>
  );
}

// ============ FOOTER ============

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__crest">
          <div className="footer__logo-frame">
            <img src="assets/logo.jpg" alt="Ivory Crown" className="footer__logo-img"/>
          </div>
        </div>
        <div className="footer__name">Ivory Crown</div>
        <div className="footer__motto"><em>«Fuerza suave, corona eterna»</em></div>
        <div className="footer__tag">Lightning Star · Club Ecuestre · MMXXVI</div>
        <Divider width={240}/>
        <div className="footer__links">
          <a href="#quienes">Quiénes Somos</a>
          <span>·</span>
          <a href="#actividades">Actividades</a>
          <span>·</span>
          <a href="#unete">Únete</a>
          <span>·</span>
          <a href="https://discord.gg/4zYYGjcEw" target="_blank" rel="noopener noreferrer">Discord</a>
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

function Info() {
  return (
    <section id="info" className="section section--cream info-sec">
      <SectionHeader eyebrow="Capítulo III" title="Información del Club" subtitle="Nuestra estética"/>

      <div className="info__intro">
        <p>
          Ivory Crown se reconoce por dos detalles: un <em>caballo</em> y un <em>uniforme</em>. Los usamos en los eventos del club — ceremonias, fotografías oficiales y las quedadas grandes de cada estación.
        </p>
      </div>

      <div className="info__pair">
        {/* Caballo */}
        <article className="info__card">
          <div className="info__num">I</div>
          <div className="info__eye">El caballo del club</div>
          <h3 className="info__title"><em>Dutch Warmblood</em><br/>Capa <span className="info__numeral">VII</span></h3>
          <div className="info__rule"></div>
          <figure className="info__horse">
            <div className="info__horse-frame">
              <div className="info__horse-inner info__horse-inner--horse">
                <img src="assets/horse-official.png" alt="Dutch Warmblood capa 7 — caballo oficial de Ivory Crown" className="info__horse-img"/>
              </div>
            </div>
          </figure>
          <p className="info__lede">
            Un cremello luminoso de crines plateadas. Lo lucimos en los eventos importantes, siempre con crines trenzadas y un pequeño detalle a tono con la estación.
          </p>
          <dl className="info__facts">
            <div className="info__fact"><dt>Raza</dt><dd>Dutch Warmblood</dd></div>
            <div className="info__fact"><dt>Capa</dt><dd>Nº 7 · Cremello</dd></div>
            <div className="info__fact"><dt>Crines</dt><dd>Trenzadas</dd></div>
            <div className="info__fact"><dt>Detalle</dt><dd>Lazo rosa</dd></div>
          </dl>
        </article>

        {/* Uniforme */}
        <article className="info__card">
          <div className="info__num">II</div>
          <div className="info__eye">El uniforme oficial</div>
          <h3 className="info__title">Marfil &amp; Rosa<br/>del <em>club</em></h3>
          <div className="info__rule"></div>
          <figure className="info__horse">
            <div className="info__horse-frame">
              <div className="info__horse-inner info__horse-inner--uniform">
                <img src="assets/uniform-official.png" alt="Uniforme oficial de Ivory Crown — jersey trenzado marfil y monturas rosa" className="info__horse-img"/>
              </div>
            </div>
          </figure>
          <p className="info__lede">
            Jersey de trenzas marfil, pantalón crema y casco a juego. Las monturas y vendas en rosa palo, para dar la nota característica del club.
          </p>
          <div className="info__kit">
            <div className="info__kit-col">
              <div className="info__kit-head"><HorseShoe size={16}/><span>Caballo</span></div>
              <ul className="info__kit-list">
                <li>Riendas de diseñador rosadas</li>
                <li>Silla de verano <em>Sakura</em></li>
                <li>Manta de exhibición <em>Belle Glamour</em></li>
                <li>Protectores para patas <em>Belle Glamour</em></li>
              </ul>
            </div>
            <div className="info__kit-col">
              <div className="info__kit-head"><Crown size={16} color="currentColor"/><span>Personaje</span></div>
              <ul className="info__kit-list">
                <li>Casco <em>Paseo al Ocaso</em> · beige</li>
                <li>Jersey de punto blanco <em>Encanto Escandinavo</em></li>
                <li>Guantes <em>Belle Glamour</em></li>
                <li>Zapatos marineros color marrón</li>
                <li>Pantalones <em>Al Sol</em></li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      <div className="info__note-row">
        <span className="info__note-icon"><Sparkle size={10}/></span>
        <p>
          Para el día a día puedes montar y vestir lo que prefieras — el uniforme y el caballo solo se piden para los eventos oficiales del club.
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
            <Crown size={42} color="var(--gold)"/>
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
            <p className="modal__sign-text"><em>Gracias por formar parte de Ivory Crown.</em></p>
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

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
