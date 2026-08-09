import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";

const iconStyle = "text-xl";

function Footer() {
  const secondaryText = "text-sm font-light lg:text-lg";
  return (
    <>
      <div className="bg-secondary w-full p-4 shadow-inner ring-inset">
        <div className="flex flex-col items-center justify-center border-b">
          <img
            className="h-16 w-16 md:h-20 md:w-20"
            src="./gr-logo.png"
            alt="Logo"
          />

          <h2 className="font-alegreya text-xl font-light md:text-2xl">
            Gr Tales Of Nails{" "}
          </h2>
        </div>

        <div className="mt-2 flex flex-col gap-5 p-9 text-center lg:justify-around">
          <div>
            <p className={`${secondaryText} font-normal`}>
              Επικοινωνήστε Μαζί Μας
            </p>
            <p className={secondaryText}>21 3048 0798</p>
          </div>

          <div>
            <p className={`${secondaryText} font-normal`}>Επισκεφθείτε Μας</p>

            <p className={secondaryText}> Ανωγείων 7, Νίκαια </p>
          </div>

          <div>
            <p className={`${secondaryText} pb-3 font-normal`}>
              Ακολουθήστε Μας
            </p>

            <div className="flex justify-center gap-2">
              <a
                href="https://www.instagram.com/gr_talesofnails/"
                target="_blank"
              >
                {" "}
                <IoLogoInstagram className={iconStyle} />
              </a>
              <a href="https://www.tiktok.com/@talesofnailsgr" target="_blank">
                <FaTiktok className={iconStyle} />
              </a>
            </div>
          </div>
          <p className="text-text-color/70 text-sm">
            Designed and Developed by{" "}
            <a
              href="https://github.com/Natalie-Kizirian"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-color font-medium text-[#5B4633] no-underline transition-colors"
            >
              Natalie
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
