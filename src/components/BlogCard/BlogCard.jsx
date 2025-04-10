import { useState } from "react"
import { ArrowRight } from "lucide-react";
const BlogCard = () => {
    const [hover, setHover] = useState(false);
    return (
      <div className="max-w-xd rounded-xl overflow-hidden shadow-md transition-all duration-300 bg-white cursor-pointer mb-5"
      onMouseEnter = {() => setHover(true)}
      onMouseLeave = {() => setHover(false)}
      >
        <div className="relative">
            <img src = "/demo.png" 
            className="w-full h-52 object-cover"
            />
            {hover && (
                <div className="absolute bg-black inset-0 bg-opacity-20 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-full bg-white shadow-md flex items-center justify center">
                        <ArrowRight className="text-blue-600 ml-2" size={20}/>
                    </div>
                </div>
            )}
            <span className="absolute top-2 right-2 bg-white text-sm text-gray-600 px-3 py-1 rounded-full shadow">8 min read</span>
            <div className="flex gap-2 absolute bottom-2 right-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">UX/UI</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Design</span>
            </div>
        </div>
        <div className="p-4">
            <div className="flex items-center gap-2 mb-2 text-sm text-=gray-500">
                <img src="/vite.svg"
                alt="Author"
                className="w-6 h-6 rounded-full"
                />
                <div className="flex flex-col ">
                <span>Rafsan</span>
                <span>22nd June 1996</span>
                </div>
            </div>
            <h3>Description</h3>
            {hover && (
                <p className="text-gray-600 text-sm">Description About the Author</p>
            )}
            
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  