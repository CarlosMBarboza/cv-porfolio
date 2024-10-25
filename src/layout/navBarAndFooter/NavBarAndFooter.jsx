import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

const NavBarAndFooter = (props) => {
  const { children } = props
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default NavBarAndFooter