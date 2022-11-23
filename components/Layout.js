import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;