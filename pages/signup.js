import RegisterForm from "../components/Auth/RegisterForm";
import Layout from "../components/Layout";

export default function signup() {
  return (
    <Layout title="Lavagna - Sign up">
      <section className="sm:w-full w-11/12 mx-auto sm:h-screen flex justify-center sm:items-center sm:mt-0 mt-10">
        <RegisterForm />
      </section>
    </Layout>
  );
}
