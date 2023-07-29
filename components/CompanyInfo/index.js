import Header from '../Header'
import './index.css'

const CompanyInfo = () => {
  const email = 'XXXXXX@gmail.com'
  const handleEmailLinkClick = () => {
    const mailtoLink = `mailto:${email}`
    window.location.href = mailtoLink
  }

  return (
    <div>
      <Header />
      <div className="company-info">
        <h2>Company Info</h2>
        <p>
          <span className="span-company">Company: </span>Geeksynergy
          Technologies Pvt Ltd
        </p>
        <p>
          <span className="span-company">Address: </span>Sanjayanagar,
          Bengaluru-56
        </p>
        <p>
          <span className="span-company">Phone: </span>XXXXXXXXX09
        </p>
        <p onClick={handleEmailLinkClick}>
          <span className="span-company">Email: </span>
          <span className="mail-style">XXXXXX@gmail.com</span>
        </p>
      </div>
    </div>
  )
}

export default CompanyInfo
