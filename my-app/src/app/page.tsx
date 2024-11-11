import Image from "next/image";

export default function Home() {
  return (
    <div  className="bg-black max-h-screen-2xl max-w-screen-2xl">
      <div className=" absolute top-1/3  space-y-5 text-white  " >
      <h2 className="text-white ">web developer</h2>
      <h1 className="font-extrabold  text-6xl  "> Hi! I'm Ramiz  </h1>
      <p className="font-bold  text-xl text-base">   
         a passionate frontend developer with  expertise in HTML,<br></br> CSS 
        JavaScipt, TypeScript and Next.js.I specialize in <br></br>   
        creating responsive, modern and user-friendly websites. </p>
      </div>
      <div className="flex justify-center items-center h-screen " >
      <img src="./white.png" className="w-64 h-70 object-cover absolute right-20 mb-20  rounded-full"></img>
      </div>
     
    </div>
  );
};