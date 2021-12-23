import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>
        The Project Page for the {router.query.clientprojectid} project for the
        client {router.query.id}
      </h1>
    </div>
  );
};

export default SelectedClientProjectPage;
