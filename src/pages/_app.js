import "@/styles/globals.css";
import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";

export default function App({ Component, pageProps }) {
  const EmptyLayout = ({ children }) => <> {children}</>;

  const SubLayout = Component.Layout || EmptyLayout;
  console.log("Component", Component.Layout);
  return (
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </Layout>
  );
}
