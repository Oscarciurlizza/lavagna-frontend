import Faq from "../components/Faq";
import GridProducts from "../components/GridProducts";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Providers from "../components/Providers";
import Services from "../components/Services";

export default function Home() {
  return (
    <Layout title="Lavagna">
      <Hero />
      <GridProducts />
      <Services />
      <Providers />
      <Faq />
    </Layout>
  );
}
