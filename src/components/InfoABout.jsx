import { check, service1 } from "../assets";
import { brainwaveServices } from "../constants";

export const InfoAbout = ({ texto, num, img }) => {
  return (
    <div className="relative">
    <div className="relative z-1 flexitems-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
        <img
          className="w-full h-full object-cover md:object-right"
          width={800}
          alt="Uma parte da historia..."
          height={730}
          src={img}
        />
      </div>

      <div className="relative z-1 max-w-[19rem] ml-auto">
        <h6 className="h4 mb-4">{Number(num) + 1}.</h6>
        <p className="body-2 mb-[3rem] text-n-3">{texto}</p>
        <ul className="body-2">
          {brainwaveServices.map((item, index) => (
            <li
              key={index}
              className="flex items-start py-4 border-t border-n-6"
            >
              <img width={24} height={24} src={check} />
              <p className="ml-4">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
};
