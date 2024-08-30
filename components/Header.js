import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
    <div className="flex items-center justify-center gap-x-6 ">
     <h1 className="font-bold text-2xl bg-sky-500 text-white px-3 py-2 rounded">E 
     </h1>
     <p className="font-bold text-2xl hover:text-sky-500 flex items-center gap-y-3.5 ">Evergreen</p>
    </div>
    
  
    <div className=" flex items-center justify-center gap-x-6">
      <Link href='/home'>Home</Link>
      <Link href='/about'>About </Link>
    </div>
 </div>

  )
}

export default Header