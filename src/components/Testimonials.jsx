import bgImg from "../assets/image1.png";
import TestimonialCards from "./TestimonialCards";

function Testimonials() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat md:bg-fixed shadow-[inset_0_8px_10px_rgba(0,0,0,0.25),inset_0_-8px_10px_rgba(0,0,0,0.25)]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        onWheel={(e) => (e.currentTarget.scrollLeft += e.deltaY)}
        className="[&::-webkit-scrollbar-thumb]:bg-border-color flex w-full overflow-x-scroll scroll-smooth p-2 py-30 md:p-30 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <TestimonialCards />
      </div>
    </div>
  );
}
export default Testimonials;