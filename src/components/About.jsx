import aboutIcon from "../assets/main-about1.png";
import aboutIcon2 from "../assets/main-about2.png";
import aboutIcon3 from "../assets/main-about3.png";

function About() {
  const imageStyles = "rounded-tl-3xl h-80 rounded-br-3xl lg:w-1/2  m-auto ";
  const textStyles = "";
  return (
    <div className="bg-bg">
      <h1 className="p-4 text-center text-xl font-bold ">
        Λίγα Λόγια Για Εμάς
      </h1>

      <div className="flex flex-col items-center gap-10 p-4 m-auto lg:w-1/2">
        <div className="gap-7 md:flex">
          <img className={imageStyles} src={aboutIcon} alt="" />
          <p className={textStyles}>
            Είμαστε η Ρένα και η Γεωργία, δυο φίλες που μοιραζόμαστε το ίδιο
            πάθος για την ομορφιά εδώ και πάνω από δέκα χρόνια. Το Gr Tales of
            Nails δεν είναι απλώς το μαγαζί μας, είναι ο κοινός μας στόχος να
            δημιουργήσουμε έναν χώρο όπου η περιποίηση των άκρων σας ξεφεύγει
            από τα συνηθισμένα και μετατρέπεται σε μια πραγματική, απολαυστική
            εμπειρία χαλάρωσης, όπως ακριβώς θα τη θέλαμε κι εμείς για τον εαυτό
            μας
          </p>
        </div>

        <div className="hidden gap-7 md:flex">
          <p className={textStyles}>
            Στο Gr Tales of Nails, πιστεύουμε ότι κάθε επίσκεψη πρέπει να είναι
            κάτι περισσότερο από μια απλή υπηρεσία. Επενδύουμε στη διαρκή
            ενημέρωση για τις νέες τάσεις στο nail art, δημιουργώντας σχέδια που
            αναδεικνύουν το δικό σας προσωπικό στυλ. Εδώ, ο χρόνος σταματά και
            εσείς απολαμβάνετε την περιποίηση που σας αξίζει, σε ένα περιβάλλον
            ζεστό, φιλικό και προσεγμένο στην παραμικρή λεπτομέρεια.
          </p>
          <img className={imageStyles} src={aboutIcon3} alt="" />
        </div>

        <div className="hidden gap-7 md:flex">
          <img className={imageStyles} src={aboutIcon2} alt="" />
          <p className={textStyles}>
            Η οργάνωση του χώρου μας βασίζεται στον σεβασμό του χρόνου σας.
            Διατηρούμε τις διαδικασίες μας απλές και καθαρές, δίνοντας έμφαση
            στη συνέπεια και την υγιεινή. Είμαστε εδώ για να φροντίσουμε την
            περιποίηση των άκρων σας με σωστά υλικά και ακρίβεια, χωρίς περιττές
            καθυστερήσεις, ώστε η επίσκεψή σας να εντάσσεται φυσικά και
            ευχάριστα στο πρόγραμμά σας.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
