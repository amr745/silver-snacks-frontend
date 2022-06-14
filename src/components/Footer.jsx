import { FaCcVisa, FaCcStripe, FaBtc } from "react-icons/fa" 

const Footer = () => {
  return (
    <footer className="footer">
      <p>SSE All Right Reserved®</p>
      <p>Silver Snacks Emporium: So good, you'll unhinge your jaw!</p>
      <div className="footer-icons">
        <h1><FaCcVisa /></h1>
        <h1><FaCcStripe /></h1>
        <h1><FaBtc /></h1>
      </div>
  </footer>
  )
}
export default Footer