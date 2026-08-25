import mainIconMobile from "../assets/main-icon.png";
import mainIconDesktop from "../assets/Vector.png";

function Home() {
  return (
    <main className="flex w-full items-center justify-center p-4 bg-bg">
      <div className="flex flex-col items-start gap-9 lg:mx-auto lg:px-20">
        <h2 className="m-auto text-start text-2xl font-bold lg:m-0">
          Καλώς ορίσατε στο <br className="lg:hidden" /> Gr Tales of Nails{" "}
          <img className="m-auto w-80 lg:hidden" src={mainIconMobile} alt="" />
        </h2>

        <p className="flex items-center">
          Χαλαρώστε και αφεθείτε στα χέρια μας για την περιποίηση που αξίζουν τα
          άκρα σας. Στο Gr Tales of Nails, δημιουργούμε μοναδικά σχέδια και
          προσφέρουμε φροντίδα με αγάπη, για να φεύγετε πάντα με χαμόγελο
        </p>
        <button className="button-primary hover:bg-primary-hover m-auto w-full rounded-lg p-3 text-sm font-medium md:w-auto md:text-base lg:m-0">
          <a href="#contact">Κλείστε το Ραντεβού σας!</a>
        </button>
      </div>

      <img className="mr-20 hidden lg:block" src={mainIconDesktop} alt="" />
    </main>
  );
}
export default Home;
