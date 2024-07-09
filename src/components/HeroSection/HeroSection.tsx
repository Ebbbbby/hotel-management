


import ClientComponent from "./ClientComponent";
import { heading1, section2 } from "./ServerComponent";

const HeroSection = () => {
  return (
    // <section className="flex px-4 items-center gap-12 container mx-auto">
    //   <div className="py-10 h-full">
    //     <h1 className=" font-heading mb-6">Explore Our Exquisite Hotel</h1>
    //     <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
    //       Experience an Exquisite Hotel Immersed in Rich History
    //     </p>
    //     <button className="btn-primary"> Get Started</button>
    //     <div className="flex justify-between mt-12">
    //       <div className="flex gap-3 flex-col items-center justify-center">
    //         <p className="text-sm lg:text-xl text-center">Basic Room</p>
    //         <CountNumber duration={400} endValue={500} />
    //       </div>
    //       <div className="flex gap-3 flex-col items-center justify-center">
    //         <p className="text-sm lg:text-xl text-center">Luxury Room</p>
    //         <CountNumber duration={400} endValue={400} />
    //       </div>
    //       <div className="flex gap-3 flex-col items-center justify-center">
    //         <p className="text-sm lg:text-xl text-center">Suite Room</p>
    //         <CountNumber duration={400} endValue={440} />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="md:grid hidden gap-8 grid-cols-1">
    //     <div className="rounded-2xl overflow-hidden h-48">
    //       <Image
    //         src="/images/hero-1.jpeg"
    //         alt="hero1"
    //         width={300}
    //         height={300}
    //         className="img scale-animation"
    //       />
    //     </div>

    //     <div className="grid grid-cols-2 gap-8 h-48">
    //       <div className="rounded-2xl overflow-hidden ">
    //         <Image
    //           src="/images/hero-2.jpeg"
    //           alt="hero2"
    //           width={300}
    //           height={300}
    //           className="img scale-animation"
    //         />
    //       </div>
    //       <div className="rounded-2xl overflow-hidden ">
    //         <Image
    //           src="/images/hero-3.jpeg"
    //           alt="hero3"
    //           width={300}
    //           height={300}
    //           className="img scale-animation"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <ClientComponent section2={section2} heading1={heading1}/>
  );
};

export default HeroSection;