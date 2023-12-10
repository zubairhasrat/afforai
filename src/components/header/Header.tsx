import { Link } from "react-router-dom"

export const Header = () => {
  return (
  <div className="bg-white py-0 px-0 md:py-6 md:px-6 navbar-light fixed-top">
    <div className="flex items-center justify-between max-w-screen-xl mx-auto p-2 md:py-2 md:px-6 broder-b-2 md:border border-solid rounded-xl border-gray-300 backdrop-blur-md bg-opacity-50 bg-white">

      <div className="flex items-center">
          <img src="https://afforai.com/img/graphics/logo-new-violet.webp" alt="Logo" className="h-8 mr-2" />
          <span className="font-medium text-lg text-center">Afforai</span>
      </div>

      <nav className="hidden md:flex flex-grow items-center justify-center">
        <Link to='/affiliate' className="mr-2 ml-2 pl-2 pr-2 text-gray-700 font-medium text-base hover:text-black">Affiliate</Link>
        <Link to='/pricing' className="mr-2 ml-2 pl-2 pr-2 text-gray-700 font-medium text-base hover:text-black">Pricing</Link>
        <Link to='/testimonials' className="mr-2 ml-2 pl-2 pr-2 text-gray-700 font-medium text-base hover:text-black">Testimonials</Link>
        <Link to='help' className="text-gray-700 mr-2 ml-2 pl-2 pr-2 font-medium text-base hover:text-black">Help Center</Link>
      </nav>

      <div className="flex items-center space-x-4">
        <Link to='/login' className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:text-black">Login</Link>
        <Link to='try-for-free' className="px-3 py-2 rounded-lg text-sm font-medium bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 border border-solid border-opacity-20 text-white">Try for free</Link>
      </div>

      <div className="md:hidden">
        <button id="mobile-menu-toggle" className="text-gray-700 hover:text-black focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  )
}
