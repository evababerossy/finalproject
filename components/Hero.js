import Image from "next/image";

const Hero = () => {
  return (
    <div className='px-4 py-8 md:flex md:items-center gap-6 border justify-center'>
    <div className="flex justify-center rounded">   
        <Image alt="" priority width={300} height={300} src={"/dev.png.jpg"}
        className="rounded-md"
        />
    
    </div>
    <div className="text-center md:text-left">
        <h1 className="font-bold text-3xl md:text-4xl tracking-wider text-">Onwuegbusi Evergreen</h1>
        <p className="text-lg font-medium">I am a Web Developer</p>
        <p className="font-medium text-gray-400">Codecheeks</p>
    </div>
    </div>
  )
}
 
export default Hero