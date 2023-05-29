import { use } from "react";
import PorfolioPage from ".";

import { useRouter } from "next/router";

function PortfolioIdPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The Portfolio Id Page</h1>
      <p1> {console.log(router.query)}</p1>
    </div>
  );
}
export default PortfolioIdPage;
