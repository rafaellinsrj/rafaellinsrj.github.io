import Icon from "@/components/Icon";

export default function ContactSection({page = false}: {page?: boolean}) {
  return <>
    <section id="contato" className="section contact-section">
      <div className="container contact-inner"><div><p className="eyebrow">Vamos conversar</p>{page ? <h1 className="section-h1">Uma equipe.<br/>Um produto.<br/><span>Uma boa conversa.</span></h1> : <h2>Uma equipe.<br/>Um produto.<br/><span>Uma boa conversa.</span></h2>}</div><div className="contact-links"><p>Aberto a posições de liderança em tecnologia e a novos produtos, no Brasil e em qualquer país.</p><a className="contact-email" href="mailto:33.rafaellins@gmail.com"><Icon name="mail" size={20}/> 33.rafaellins@gmail.com</a><div className="social-links"><a href="https://www.linkedin.com/in/rlins/" target="_blank" rel="noreferrer"><Icon name="linkedin"/> LinkedIn</a><a href="https://github.com/rafaellinsrj" target="_blank" rel="noreferrer"><Icon name="github"/> GitHub</a><a href="https://wa.me/5521976688686" target="_blank" rel="noreferrer"><Icon name="message"/> WhatsApp</a></div></div></div>
    </section>
  </>;
}
