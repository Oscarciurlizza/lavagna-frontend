import Head from "next/head";
import Header from "../Header";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Ecommerce by lavagna" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700;800&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
