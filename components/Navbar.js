import Link from "next/link"
import NextImage from "./Image"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/blog">elisabeth</Link>
      <button className="snipcart-checkout flex items-center">
        <NextImage height="150" width="150" src="/cart.svg" alt="Cart" />
        <span className="snipcart-total-price ml-4 font-semibold text-sm text-indigo-500"></span>
      </button>
    </div>
  )
}

export default Navbar
