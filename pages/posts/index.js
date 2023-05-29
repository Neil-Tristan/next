import Link from "next/link";
import Layout from "../../components/layout";

function DefaultPostDisplay() {
  return (
    <>
      <Layout>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Navigate to a link provided</Link>
        </h2>
      </Layout>
    </>
  );
}

export default DefaultPostDisplay;
