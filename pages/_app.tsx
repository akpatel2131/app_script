import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Head from "next/head";
import "@/styles/globals.css";
import styles from "./app.module.css";
import Divider from "../wrappers/Divider";

export default function App() {
  return (
    <>
      <Head>
      <title>Product Cart | Home</title>
        <meta name="description" content="Shop the latest products at Product Cart. Enjoy great deals, categories, and exclusive discounts!" />
        <meta name="keywords" content="shopping, ecommerce, deals, Product Cart, products" />
      </Head>
      <div className={styles.app}>
        <Navbar />
        <Divider />
        <div className={styles.container}>
          <div className={styles.discriptionContainer}>
            <div className={styles.discriptionHeader}>
              Discover our products
            </div>
            <div className={styles.discriptionSubtitle}>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </div>
          </div>
          <Divider />
          <Product />
        </div>
        <Footer />
      </div>
    </>
  );
}
