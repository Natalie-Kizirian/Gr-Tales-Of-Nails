function PricesModal({ closeModal }) {
  const priceList = [
    {
      category: "Μανικιούρ",
      service: [
        { name: "Απλό", price: "15€" },
        { name: "Ημιμόνιμο", price: "20€" },
        { name: "Ενισχυμένη Βάση", price: "22€" },
        { name: "Ενισχυμένο με σταγόνα", price: "25€" },
        { name: "Express απλό βερνίκι (σχήμα-χρώμα)", price: "10€" },
        { name: "Express ημιμόνιμο (σχήμα-χρώμα)", price: "15€" },
        { name: "Express ημιμόνιμο ενισχυμένο (σχήμα-χρώμα)", price: "18€" },
      ],
    },
    {
      category: "Πεντικιούρ",
      service: [
        { name: "Απλό", price: "20€" },
        { name: "Ημιμόνιμο", price: "25€" },
        { name: "Θεραπευτικό απλό", price: "25€" },
        { name: "Θεραπευτικό ημιμόνιμο", price: "30€" },
        { name: "Spa", price: "35€" },
        { name: "Express απλό βερνίκι (σχήμα-χρώμα)", price: "15€" },
        { name: "Express ημιμόνιμο (σχήμα-χρώμα)", price: "18€" },
      ],
    },
    {
      category: "Επιπρόσθετες Υπηρεσίες",
      service: [
        { name: "Τοποθέτηση Acrygel", price: "Από 40€" },
        { name: "Συντήρηση Acrygel", price: "35€" },
        { name: "Τοποθέτηση Ακρυλικού", price: "Από 40€" },
        { name: "Συντήρηση Ακρυλικού", price: "35€" },
        { name: "Τοποθέτηση Gel", price: "Από 40€" },
        { name: "Συντήρηση Gel", price: "35€" },

        { name: "Επιμήκυνση νυχιού με φόρμα", price: "+ 3€" },
        { name: "Γαλλικό", price: "+ 3€" },
        { name: "Ombre", price: "+ 3€" },
        { name: "Σκόνες", price: "+ 3€" },
        { name: "Σχέδιο", price: "Από 2€" },
      ],
    },
    {
      category: "Αποτρίχωση Προσώπου",
      service: [
        { name: "Καθαρισμός και σχήμα φρυδιού", price: "Από 8€" },
        { name: "Άνω χείλος", price: "7€" },
        { name: "Παρειές", price: "7€" },
        { name: "Όλο το πρόσωπο", price: "23€" },
      ],
    },
  ];
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 z-20 h-full w-full bg-black opacity-65"
      ></div>
      <div className="bg-secondary fixed top-20 left-1/2 z-80 max-h-[80vh] -translate-x-1/2 overflow-y-auto rounded-lg drop-shadow-lg min-[320px]:w-[95vw] lg:w-1/2 [&::-webkit-scrollbar]:hidden">
        {/* Head */}
        <div className="bg-primary-active/80 sticky top-0 flex items-center justify-between rounded-b-sm p-3 font-semibold shadow-2xl">
          <h1 className="m-auto text-center text-xl">Τιμοκαταλογος</h1>
          <button
            onClick={closeModal}
            className="cursor-pointer p-2 text-xl font-bold"
          >
            X
          </button>
        </div>

        {/* Prices By Category */}
        <div className="p-3">
          {priceList.map((categoryName, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-text-color border-primary-hover/50 mb-4 text-xl font-bold underline underline-offset-7">
                {categoryName.category}
              </h3>

              <ul className="flex flex-col gap-4">
                {categoryName.service.map((service, i) => (
                  <li
                    key={i}
                    className="border-primary/40 flex items-center justify-between border-b pb-1"
                  >
                    <span className="text-text-color text-md">
                      {service.name}
                    </span>
                    <span className="text-text-color text-md font-bold">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default PricesModal;
