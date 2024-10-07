import React from 'react'

const Cards = () => {

  const data = [
    { url: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Developer Jobs", posts:"5261"},

    { url: "https://images.unsplash.com/photo-1607134541550-2994abb8077b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3RydWN0aW9uJTIwd29ya2VyfGVufDB8fDB8fHww", name: "Construction Jobs ", posts:"12512" },

    { url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0fGVufDB8fDB8fHww", name: "Architect Jobs", posts:"3211" },

    { url: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFVJJTJGVVglMjBEZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D", name: "UI/UX Designers", posts:"7164" },

    { url: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Data Analyst Jobs", posts:"98112" },

    { url: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FsZXMlMjBqb2JzfGVufDB8fDB8fHww", name: "Sales Jobs", posts:"16406" },
  ]



  return (
    <div className='bg-zinc-900 w-full h-screen'>
      <h1 className='underline underline-offset-4 ml-14 pt-10 text-wrap text-white opacity-90 tracking-tighter font-mono text-4xl sm:text-xl md:text-3xl lg:text-5xl transition-all ease-in duration-300 '>
        Filter through new <br /><span className='opacity-100 text-orange-400 text-7xl font-serif ml-[30%] transition-all ease-in duration-300'>"Job"</span>
      </h1>
      <h1 className='underline underline-offset-4 transition-all ease-in duration-300 text-wrap text-white opacity-90 font-mono tracking-tighter text-4xl sm:text-xl md:text-3xl lg:text-5xl ml-[42%]'>postings daily.</h1>
      <div className='flex flex-nowrap flex-col  lg:flex-row justify-center items-center h-full mt-10  lg:-mt-10 '>

        {data.map((elem, index) => (

          <div className='w-[90%] h-[30%] sm:w-full md:flex-col md:w-full lg:w-[15%]  md:h-[45%]  rounded-md hover:w-[35%] lg:hover:w-[30%] md:hover:w-[80%] transition-all duration-[300ms] ease-in hover:ease-in relative overflow-hidden group ' index={index}>
            <button className='absolute px-4 py-1 text-center top-10 left-5 opacity-[1%] group-hover:opacity-100 bg-black rounded-full text-white text-lg sm:text-xl md:text-2xl lg:text-3xl z-20 transition-opacity duration-300 text-nowrap ease-in'>
              {elem.name}
            </button>
            <img className="object-cover w-full h-full grayscale hover:grayscale-0 rounded" src={elem.url} alt="" />
            <button className='absolute px-4 py-1 font-semibold text-center bottom-10 right-5 opacity-[1%] group-hover:opacity-100 bg-white rounded-full text-black text-lg sm:text-xl md:text-2xl lg:text-lg z-20 transition-opacity duration-300 text-nowrap'>Jobs : {elem.posts}</button>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Cards
