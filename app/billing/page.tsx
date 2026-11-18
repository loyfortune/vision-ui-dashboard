import BillingMain from "../components/layout/BillingMain";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/ui/Footer";


export default function Home() {
  return (
    <div className="bg-[url(@/public/c4c4eca424f7dfcdec68ff554dfed783b9abbc09.jpg)]
    min-h-screen bg-center bg-no-repeat bg-cover p-5 isolate
    w-full relative">
      <div className="absolute inset-0 w-full h-full
      bg-linear-to-t from-[#020515]/40 via-[#090D2E]/40
      to-[#0F123B]/40 backdrop-blur-xl z-0"/>
      <div className="relative z-20">
        <Sidebar />
      </div>
      <div className="relative lg:ml-60 z-10">
        <Navbar />
        <BillingMain />
        <Footer />
      </div>
    </div>
  );
} 