import AlbumsSection from "../components/AlbumsSection/AlbumsSection";
import FAQSection from "../components/FAQSection/FAQSection";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import SongsSection from "../components/SongsSection/SongsSection";

function Home() {
  return (
    <div className="home">
      <Layout>
       
        <Hero />
        <AlbumsSection
          title="Top Albums"
          fetchUrl="https://qtify-backend-labs.crio.do/albums/top"
        />
        <AlbumsSection
          title="New Albums"
          fetchUrl="https://qtify-backend-labs.crio.do/albums/new"
        />
        <SongsSection title="Songs"/>
        <FAQSection/>
      </Layout>
    </div>
  );
}

export default Home; 
