import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function PageLayout({ children }) {

  return (
    <div className="min-h-[90vh]">
      
      <Sidebar />
      
      <Header />

      {children}

      <Footer />
    </div>
  );
}

export default PageLayout;
