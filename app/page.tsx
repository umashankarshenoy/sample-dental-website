"use client";

import { useEffect, useState } from "react";

const PHONE = "+1 (555) 014-8200";
const BOOK = "#contact";
const DIRECTIONS = "#contact";

const heroSlides = [
  { eyebrow: "Modern dentistry in Lakeside", title: <>Feel good about your <em>smile.</em></>, text: "Thoughtful care, modern technology and clear advice for every stage of your family’s dental journey." },
  { eyebrow: "Care built around comfort", title: <>A gentler way to visit the <em>dentist.</em></>, text: "We listen first, explain every option and help you choose a treatment plan that feels right for you." },
  { eyebrow: "Here when you need us", title: <>Confident care, from check-up to <em>emergency.</em></>, text: "Complete dental care in one accessible Lakeside clinic, with 24/7 emergency support on call." }
];

const services = [
  { n:"01", title:"General dentistry", text:"Check-ups, hygiene, fillings and preventive care for long-term oral health.", image:"/lumina-smile-care.jpg", href:"#contact" },
  { n:"02", title:"Cosmetic dentistry", text:"Whitening, veneers and carefully planned treatments to refresh your smile.", image:"/lumina-treatment.jpg", href:"#contact" },
  { n:"03", title:"Dental implants", text:"Modern options to replace missing teeth and restore comfort and confidence.", image:"/lumina-smile-hero.jpg", href:"#contact" },
  { n:"04", title:"Children’s dentistry", text:"Patient, reassuring dental care that helps young smiles feel at ease.", image:"/lumina-family.jpg", href:"#contact" },
  { n:"05", title:"Braces & aligners", text:"Orthodontic options for a healthier bite and a smile you can show freely.", image:"/lumina-smile-care.jpg", href:"#contact" },
  { n:"06", title:"Emergency care", text:"On-call help for dental pain, swelling, broken teeth and urgent concerns.", image:"/lumina-dentist.jpg", href:"tel:+15550148200" }
];

const faqs = [
  ["What are your clinic hours?", "We are open Monday to Friday from 8:00 am–5:00 pm and Saturday from 8:00 am–12:00 pm. A dentist is on call for emergencies 24/7."],
  ["Where is Lumina Dental Studio?", "100 Aurora Avenue, Suite 300, Lakeside. The clinic has ample parking and wheelchair access."],
  ["Do you offer member discounts?", "Lumina Dental Studio offers flexible payment options and support for participating health plans. Please call the clinic to confirm current eligibility details."],
  ["What happens at a first visit?", "We begin with your concerns and dental history, then complete an oral examination and any imaging the dentist considers useful. Your options and next steps are explained before treatment."],
  ["Can I contact you for an emergency?", "Yes. Call +1 (555) 014-8200 for severe tooth pain, swelling, a broken tooth or dental injury. For trouble breathing, uncontrolled bleeding or major facial trauma, seek emergency medical care immediately."]
];

const chatAnswers: Record<string,string> = {
  emergency: "For severe pain, swelling, a broken tooth or dental injury, call Lumina Dental Studio now on +1 (555) 014-8200. The clinic provides 24/7 on-call emergency dental care.",
  hours: "Clinic hours are Monday–Friday, 8:00 am–5:00 pm, and Saturday, 8:00 am–12:00 pm. Emergency dental support is available on call 24/7.",
  location: "Lumina Dental Studio is at 100 Aurora Avenue, Suite 300, Lakeside. Ample parking and wheelchair access are available.",
  discounts: "Lumina Dental Studio offers flexible payment options and support for participating health plans. Call the clinic to confirm current eligibility details.",
  first: "Your first visit usually begins with a conversation, examination and any imaging the dentist considers useful. The team explains options before treatment begins."
};

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [menu, setMenu] = useState(false);
  const [chat, setChat] = useState(false);
  const [answer, setAnswer] = useState("Hi, I’m Lumi. I can help with clinic hours, location, first visits, discounts and urgent-care guidance. I can’t diagnose dental conditions.");
  const [input, setInput] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => { const timer = window.setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 7000); return () => window.clearInterval(timer); }, []);

  function respond(value:string) {
    const q = value.toLowerCase();
    const key = q.includes("emerg") || q.includes("pain") || q.includes("broken") ? "emergency" : q.includes("hour") || q.includes("open") ? "hours" : q.includes("where") || q.includes("location") || q.includes("address") ? "location" : q.includes("discount") || q.includes("payment") || q.includes("payment") ? "discounts" : q.includes("first") || q.includes("new patient") ? "first" : "";
    setAnswer(key ? chatAnswers[key] : `I can help with clinic hours, location, member discounts, first visits and urgent care. For treatment advice, please call ${PHONE}.`);
    setInput("");
  }

  return <main id="top">
    <div className="utility"><span><i/> Sample dental clinic concept</span><div><span>Ample parking</span><span>Wheelchair access</span><a href="tel:+15550148200">{PHONE}</a></div></div>

    <header className="site-header">
      <a className="logo wordmark" href="#top" aria-label="Lumina Dental Studio home"><span className="wordmark-mark">L</span><span><strong>Lumina</strong><small>Dental Studio</small></span></a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? "Close" : "Menu"}</button>
      <nav className={menu ? "nav-open" : ""} onClick={() => setMenu(false)}>
        <a href="#services">Services</a><a href="#about">About</a><a href="#dentist">Dentist</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
      </nav>
      <a className="pill pill-dark header-book" href={BOOK}>Book a visit <span>↗</span></a>
    </header>

    <section className="hero">
      <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
      <div className="hero-copy">
        <p className="kicker"><span/> {heroSlides[slide].eyebrow}</p>
        <h1>{heroSlides[slide].title}</h1>
        <p className="hero-text">{heroSlides[slide].text}</p>
        <div className="hero-actions"><a className="pill pill-teal" href={BOOK}>Book an appointment <span>↗</span></a><a className="call-link" href="tel:+15550148200"><b>☎</b><span><small>Call the clinic</small>{PHONE}</span></a></div>
        <div className="slide-dots">{heroSlides.map((_,i) => <button key={i} className={slide===i?"active":""} onClick={() => setSlide(i)} aria-label={`Show slide ${i+1}`}/>)}</div>
      </div>
      <div className="hero-image-wrap">
        <img className="hero-image" src="/lumina-smile-hero.jpg" alt="A patient showing a bright, healthy smile"/>
        <div className="float-card technology"><span>◎</span><div><small>In-house technology</small><strong>Cone Beam CT</strong><p>3D precision imaging</p></div></div>
        <div className="float-card review"><div className="stars">★★★★★</div><strong>“Everything was explained clearly.”</strong><small>Sample patient experience</small></div>
      </div>
    </section>

    <section className="trust-bar">
      <div><b>✦</b><span><strong>Complete care</strong><small>For every stage of life</small></span></div>
      <div><b>◉</b><span><strong>Modern imaging</strong><small>3D CBCT in-house</small></span></div>
      <div><b>⌁</b><span><strong>Accessible clinic</strong><small>Parking & wheelchair access</small></span></div>
      <div><b>+</b><span><strong>Emergency support</strong><small>On call 24/7</small></span></div>
    </section>

    <section className="stats">
      <article><strong>24/7</strong><span>Emergency dentist on call</span></article>
      <article><strong>3D</strong><span>CBCT precision imaging</span></article>
      <article><strong>Mon–Sat</strong><span>Convenient clinic hours</span></article>
      <article><strong>Flexible</strong><span>Payment options</span></article>
    </section>

    <section className="section services" id="services">
      <div className="section-title"><div><p className="kicker"><span/> Care for every smile</p><h2>Everything your smile needs,<br/><em>under one roof.</em></h2></div><p>From everyday prevention to advanced restorative and cosmetic care, treatment begins with listening and a clear plan.</p></div>
      <div className="service-grid">{services.map((service, i) => <a className={`service-card service-${i+1}`} href={service.href} key={service.title}><img src={service.image} alt=""/><div className="service-shade"/><span>{service.n}</span><div><h3>{service.title}</h3><p>{service.text}</p><b>Learn more ↗</b></div></a>)}</div>
      <a className="inline-link" href="#contact">View all dental services <span>↗</span></a>
    </section>

    <section className="about section" id="about">
      <div className="about-media"><img src="/lumina-clinic.jpg" alt="Independent stock image representing a modern Lumina treatment room"/><div className="about-badge"><b>24/7</b><span>Emergency<br/>care on call</span></div></div>
      <div className="about-copy"><p className="kicker"><span/> The Lumina approach</p><h2>Advanced care.<br/><em>Genuinely personal.</em></h2><p className="lead">Lumina Dental Studio combines modern clinical technology with a calm, human approach. We take time to understand what matters to you, then explain every option clearly.</p><ul><li><b>✓</b><span><strong>Precision where it matters</strong>In-house 3D imaging supports detailed diagnosis and planning.</span></li><li><b>✓</b><span><strong>Comfort from the start</strong>A welcoming, accessible clinic and a team that listens.</span></li><li><b>✓</b><span><strong>Clear next steps</strong>Options, expected care and questions discussed in plain language.</span></li></ul><a className="pill pill-dark" href="#contact">Explore our approach <span>↗</span></a></div>
    </section>

    <section className="dentist section" id="dentist">
      <div className="dentist-copy"><p className="kicker light"><span/> Our care team</p><h2>Experience with a<br/><em>gentle approach.</em></h2><p>Our sample clinical team represents the warm, patient-first experience this website concept is designed to communicate. On a live clinic site, this section would feature verified practitioner biographies and credentials.</p><blockquote>“Care begins by understanding the person behind the smile.”</blockquote><a className="pill pill-cream" href="#contact">Meet the care team <span>↗</span></a></div>
      <div className="dentist-photo"><img src="/lumina-smile-care.jpg" alt="Smiling patient representing Lumina Dental Studio"/><div><small>Sample clinic concept</small><strong>Warm, patient-first care</strong></div></div>
    </section>

    <section className="reviews section" id="reviews">
      <div className="section-title"><div><p className="kicker"><span/> Patient experiences</p><h2>Kind words from<br/><em>our patients.</em></h2></div><p>Trust grows through care that feels clear, respectful and reassuring from the first conversation.</p></div>
      <div className="review-grid"><article><div>★★★★★</div><blockquote>“The team listened carefully and explained every step in language I could understand.”</blockquote><p><b>Sample review</b><span>Illustrative content</span></p></article><article className="review-featured"><div>★★★★★</div><blockquote>“The space felt calm and modern, and the whole visit was comfortable from beginning to end.”</blockquote><p><b>Sample review</b><span>Illustrative content</span></p></article><article><div>★★★★★</div><blockquote>“Booking was easy, the welcome was warm and my treatment options were clear.”</blockquote><p><b>Sample review</b><span>Illustrative content</span></p></article></div>
    </section>

    <section className="faq section" id="faq">
      <div><p className="kicker"><span/> Helpful answers</p><h2>Before your<br/><em>first visit.</em></h2><p>Can’t find what you need? Ask Lumi, our clinic information assistant, or call the team.</p><button className="pill pill-teal" onClick={() => setChat(true)}>Ask Lumi <span>✦</span></button></div>
      <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
    </section>

    <section className="contact section" id="contact">
      <div className="contact-copy"><p className="kicker light"><span/> Your next step</p><h2>Ready for a healthier,<br/><em>more confident smile?</em></h2><p>Tell us how we can help. This proposal form demonstrates the appointment experience; final requests should be confirmed by the clinic.</p><div className="contact-details"><div><small>Visit</small><strong>100 Aurora Avenue, Suite 300<br/>Lakeside, Sample City</strong><span>Ample parking · Wheelchair access</span></div><div><small>Call</small><strong><a href="tel:+15550148200">+1 (555) 014-8200</a><a href="tel:+15550148201">+1 (555) 014-8201</a><a href="tel:+15550148202">+1 (555) 014-8202</a></strong></div></div></div>
      <form className="appointment-card" onSubmit={e => {e.preventDefault(); setSent(true)}}>{sent ? <div className="form-success"><span>✓</span><h3>Request noted</h3><p>This is a design preview, so nothing was sent. On the live site, the clinic team would receive this request and confirm the appointment.</p><button className="pill pill-dark" type="button" onClick={() => setSent(false)}>Make another request</button></div> : <><div><p>Request an appointment</p><span>Sample form · no information is sent</span></div><label>Your name<input required placeholder="Full name"/></label><label>Phone number<input required type="tel" placeholder="e.g. +1 555…"/></label><label>How can we help?<select defaultValue=""><option value="" disabled>Select a reason</option><option>General check-up</option><option>Tooth pain or emergency</option><option>Children’s dentistry</option><option>Cosmetic consultation</option><option>Dental implant consultation</option><option>Other</option></select></label><button className="pill pill-dark" type="submit">Request appointment <span>↗</span></button><small>Demo only. No personal information is stored or sent.</small></>}</form>
    </section>

    <footer><div className="footer-brand"><a className="wordmark wordmark-footer" href="#top"><span className="wordmark-mark">L</span><span><strong>Lumina</strong><small>Dental Studio</small></span></a><p>Quality dentistry. Personalized care.<br/>Lakeside, Sample City.</p></div><div><strong>Explore</strong><a href="#services">Services</a><a href="#about">About</a><a href="#dentist">Care team</a><a href="#faq">FAQ</a></div><div><strong>Connect</strong><a href="#contact">Facebook</a><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a><a href={DIRECTIONS}>Directions</a></div><div><strong>Contact</strong><a href="tel:+15550148200">+1 (555) 014-8200</a><a href="mailto:hello.example">hello.example</a><span>Mon–Fri 8am–5pm<br/>Sat 8am–12pm</span></div></footer>
    <div className="footer-base"><span>© Lumina Dental Studio</span><span>Fictional sample website concept</span></div>

    <nav className="mobile-actions"><a href="tel:+15550148200">☎<span>Call</span></a><a href={DIRECTIONS}>⌖<span>Directions</span></a><a href={BOOK}>▣<span>Book</span></a></nav>

    <button className="chat-launch" onClick={() => setChat(!chat)} aria-label="Open Lumi dental assistant"><span>{chat ? "×" : "✦"}</span><b>{chat ? "Close" : "Ask Lumi"}</b></button>
    {chat && <aside className="chat-panel"><div className="chat-head"><span>✦</span><div><strong>Lumi</strong><small><i/> Lumina sample clinic assistant</small></div><button onClick={() => setChat(false)}>×</button></div><div className="chat-body"><div className="bot-message">{answer}</div><div className="chat-prompts">{[["hours","Opening hours"],["location","Clinic location"],["discounts","Member discounts"],["emergency","Dental emergency"]].map(([key,label]) => <button key={key} onClick={() => setAnswer(chatAnswers[key])}>{label}</button>)}</div></div><form className="chat-input" onSubmit={e => {e.preventDefault(); if(input.trim()) respond(input)}}><input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask a clinic question…"/><button>↑</button></form><p className="chat-note">General clinic information only · Not medical advice</p></aside>}
  </main>;
}
