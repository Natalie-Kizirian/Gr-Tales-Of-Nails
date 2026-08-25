import { MdOutlineStar } from "react-icons/md";
function TestimonialCards() {
  const cardStyle =
    "bg-white-color/90 flex items-start gap-3 rounded-2xl py-6 px-2 w-80 md:max-w-130 h-fit shadow-md shrink-0";
  const avatarStyle =
    "flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 text-xl font-semibold text-white p-8";

  const cardInfo = [
    {
      id: 1,
      name: "S",
      review:
        "Ευαισθησία, κατανόηση, ευγένεια, χαμόγελο λίγα από τα χαρακτηριστικά που διακατέχουν τα κορίτσια.Και φυσικά άψογη δουλειά .",
      color: "#5C6BC0",
    },
    {
      id: 2,
      name: "H",
      review:
        " Το συστήνω ανεπιφύλακτα! Πανέμορφος χώρος  και το βασικότερο με άψογη τήρηση της υγιεινής!Δίνουν έμφαση στη λεπτομέρεια. Τα κορίτσια χαμογελαστά και φιλικά,με όρεξη να δώσουν τον καλύτερο τους εαυτό! Με μια λέξη είναι επαγγελματίες!!!",
      color: "#EF6C00",
    },
    {
      id: 3,
      name: "Α",
      review:
        "Ευχαριστηθηκα πεντικιούρ μετά από πολύ καιρό τα κορίτσια κάνουν εξαιρετική δουλειά. Πανέμορφος χώρος καθαρός και με ωραία αύρα!",
      color: "#AB47BC",
    },
    {
      id: 4,
      name: "T",
      review:
        "Εξαιρετικό! Πρώτη φορά επισκέφτηκα το το GR tales of nails χθες και έμεινα πάρα πολύ ευχαριστημένη!Ο χώρος είναι παρα πολύ όμορφος ,Βγάζει τόσο θετική αύρα που σε ταξιδεύει αλλού!Η Ρενα και η Γεωργία απλά δεν υπάρχουν, Επαγγελματίες σε όλους τους τομείς με ιδιαίτερη έμφαση στην υγιεινή! !Το συνιστώ ανεπιφύλακτα! !",
      color: "#01579B",
    },
    {
      id: 5,
      name: "A",
      review:
        "Ότι καλύτερο στην γειτονιά μας.Αψογες υπηρεσίες καταπληκτικά κορίτσια. Επαγγελματίες με τα όλα τους!!!!",
      color: "#C2185B",
    },
  ];

  return (
    <div className="flex gap-8 lg:gap-15">
      {cardInfo.map(({ id, review, name, color }) => (
        <div key={id} className={cardStyle}>
          <div className={avatarStyle} style={{ backgroundColor: color }}>
            {name}
          </div>
          <div className="">
            <div className="flex text-[#FABB05]">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-sm">{review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TestimonialCards;
