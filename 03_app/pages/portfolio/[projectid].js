import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <h2>{router.query.projectid}</h2>
    </div>
  );
};

export default PortfolioProjectPage;
