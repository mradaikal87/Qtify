import AlbumsSection from "../components/AlbumsSection/AlbumsSection";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";

function Home() {
  return (
    <div className="home">
      <Layout>
        {/* Other components can be added here */}
        <Hero/>
        <AlbumsSection title="Top Albums" fetchUrl="https://qtify-backend-labs.crio.do/albums/top"/>
        <AlbumsSection title="New Albums" fetchUrl="https://qtify-backend-labs.crio.do/albums/new"/>
    
      </Layout>

    </div>
  )
}

export default Home; // ✅ IMPORTANT
