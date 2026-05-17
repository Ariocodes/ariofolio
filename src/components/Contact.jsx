import './Contact.css'

const links = [
  { icon: '@',  label: 'email',    val: 'ario@ariobashiri.com',             href: 'mailto:ario@ariobashiri.com' },
  { icon: '⌥', label: 'github',   val: 'github.com/Ariocodes',        href: 'https://github.com/Ariocodes' },
  { icon: 'in', label: 'linkedin', val: 'linkedin.com/in/ariobashiri', href: 'https://linkedin.com/in/' },
]

function Contact() {
  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-label">04</span>
        <span className="section-title">$ ./contact.sh</span>
        <div className="section-line" />
      </div>

      <div className="contact-headline">
        Let&apos;s build <span className="hl">something.</span>
      </div>
      <p className="contact-sub">
        Project, job offer, or just a technical chat — reach out.
      </p>

      <div className="contact-grid">
        {links.map((l) => (
          <a href={l.href} className="contact-item" key={l.label} target="_blank" rel="noreferrer">
            <div className="contact-icon">{l.icon}</div>
            <div>
              <div className="contact-label">{l.label}</div>
              <div className="contact-val">{l.val}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
