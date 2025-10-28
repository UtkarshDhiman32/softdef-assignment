import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Trending from './components/Trending/Trending'
import TopSelling from './components/Top-Selling/TopSelling'
import CustomerReview from './components/CustomerReview/CustomerReview'
import Best from './components/Best/Best'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      {/* 🌿 Background Wrapper for Hero + Trending */}
      <div
        className="relative min-h-screen w-full bg-cover bg-center  overflow-x-hidden"
        style={{
          backgroundImage: 'url("/fa0765984e44f85e1a04562f820f1492949a1257.jpg")',
          backgroundPosition:'center -500px'
        }}
      >
        {/* 🖤 Transparent overlay for text visibility */}
        <div className="absolute inset-0 bg-black/25 z-0"></div>

        {/* 🔝 Main visible content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Trending />
        </div>
      </div>

      {/* 🟢 Solid Background Sections */}
      <div
        className="w-full"
        style={{ backgroundColor: 'rgba(27, 35, 22, 1)' }} // ✅ Solid color background
      >
        <TopSelling />
        <CustomerReview />
        <Best />
        <Footer />
      </div>
    </>
  )
}

export default App
