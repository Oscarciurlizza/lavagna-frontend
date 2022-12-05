import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Logo from "../../components/Header/Logo";
AcademicCapIcon;

const Auth = ({ children }) => {
  return (
    <div>
      <header className="sm:w-full w-11/12 h-20 sm:max-w-screen-lg mx-auto flex justify-between items-center absolute left-0 right-0">
        <Logo />
        <AcademicCapIcon className="w-6" />
      </header>
      <section className="h-screen flex justify-center items-center flex-col">
        {children}
      </section>
    </div>
  );
};

export default Auth;
