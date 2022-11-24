import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

function Layout({ children, categories }) {
  return (
    <div className="bg-gradient-to-b from-stone-600 to-stone-900 min-h-screen text-white">
      <Navbar categories={categories} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
