import { Github } from "lucide-react";
import Image from "next/image"
export default function About(){
    return(
        <div className="bg-black h-screen">
          <div className="text-green-500 ">
           <h1 className=" font-bold text-5xl p-8 "> aboutt</h1 ></div>
          <div className="flex justify-between "><p className="text-xl text-base ml-10 text-green-500">I'm a passionate and skilled Front-End Developer
              with a strong foundation in HTML ,<br className="space-y-2"></br> CSS,
          Javascript ,Typescript and modern frameworks like  React and Next.js.<br/> 
          With experience using Bootstrap and
          Tailwind CSS, I build responsive , <br/>user-friendly web interfaces that
           deliver great user experiences.Currently, <br/>I'm focused on expending my
            expertise in interactive, accessible design and <br/>
          continually refining my skills and continually refining my skills in Javascript frameworks.</p>
             <img src="./IMG.jpg" alt="Ramiz shamis" className="w-40 mr-20  rounded-full"/>             
          </div> 
          <div>
            <h1 className="text-white font-extrabold text-5xl ">Skills</h1></div>
              <div className="flex  gap-5 ">
           <img src="./html.png" alt="Html log" className="h-20 w-20 rounded-50 "/>
           <img src="./css.png" alt="css log"  className="h-20 w-20 "/>
           <img src="./js.png" alt="js logo" className="h-20 w-20 "/>
           <img src="./ts.png" alt="ts logo" className="h-20 w-20 "/>
           <img src="./boot.png" alt="bootstap logo" className="h-20 w-20 "/>
           <img src="./react.new.png" alt="react logo" className="h-20 w-20 "/>
           <img src="next.png" alt="next logo" className="h-20 w-20 "/>
           </div>
           <div>
            <a href="https://github.com/RamizShamis" className="text-blue-500 hover:text-blue-700 font
            -semibold"> <Github color="#5e288a" className=" h-20 w-20"  /> </a>
           </div>
        </div>
    );
};