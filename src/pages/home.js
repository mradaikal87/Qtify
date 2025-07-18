import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";

function Home() {
  return (
    <div className="home">
      <Layout>
        {/* Other components can be added here */}
        <Hero/>
      </Layout>

    </div>
  )
}

export default Home; // ✅ IMPORTANT
