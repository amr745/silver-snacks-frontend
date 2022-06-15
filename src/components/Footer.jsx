import { FaCcVisa, FaCcStripe, FaBtc } from "react-icons/fa" 

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-tag">Silver Snacks Emporium: So good, you'll unhinge your jaw!</p>
      <p className="footer-rights">SSE All Right Reserved®</p>
      <div className="footer-icons">
      <h1><FaCcVisa /></h1>
      <h1><FaCcStripe /></h1>
      <h1><FaBtc /></h1>
      </div>
  </footer>
  )
}
export default Footer