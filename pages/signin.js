import LoginForm from "../components/Auth/LoginForm";
import Layout from "../components/Layout/Layout";

export default function signin() {
  return (
    <Layout title="Lavagna - Sign in">
      <section className="sm:w-full w-11/12 mx-auto sm:h-screen flex justify-center sm:items-center sm:mt-0 mt-10">
        <LoginForm />
      </section>
    </Layout>
  );
}
