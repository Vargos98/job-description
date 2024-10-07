import React from 'react'

const Cards = () => {

  const data = [
    { url: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Developer Jobs" },
    { url: "https://images.unsplash.com/photo-1607134541550-2994abb8077b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3RydWN0aW9uJTIwd29ya2VyfGVufDB8fDB8fHww", name: "Construction Jobs " },
    { url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0fGVufDB8fDB8fHww", name: "Architect Jobs" },
    { url: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFVJJTJGVVglMjBEZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D", name: "Developer Jobs" },
    { url: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D", name: "UI/UX Designers" },
    { url: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FsZXMlMjBqb2JzfGVufDB8fDB8fHww", name: "Sales Jobs" },
  ]



  return (
    <div className='bg-zinc-100 w-full h-screen'>
      <h1 className='underline underline-offset-2 ml-14 pt-10  font-mono text-4xl sm:text-xl md:text-3xl lg:text-5xl '>
        Filter through several job postings daily
      </h1>
      <div className='flex flex-nowrap flex-col  lg:flex-row justify-center items-center h-full mt-10  lg:-mt-10'>

        {data.map((elem, index) => (

          <div className='w-[90%] h-[30%] sm:w-full md:flex-col md:w-full lg:w-[15%]  md:h-[45%]   rounded-xl hover:w-[35%] lg:hover:w-[30%] md:hover:w-[80%] transition-all duration-[300ms] ease-out hover:ease-in relative overflow-hidden group' index={index}>
            <h4 className='absolute text-center top-10 left-5 opacity-[1%] group-hover:opacity-100 bg-black rounded-md text-white text-lg sm:text-xl md:text-2xl lg:text-3xl z-20 transition-opacity duration-300'>
              {elem.name}
            </h4>
            <img className="object-cover w-full h-full grayscale hover:grayscale-0 rounded-xl" src={elem.url} alt="" />
          </div>
        ))}

      </div>
    </div>
  )
}

export default Cards
