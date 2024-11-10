
import Image from "next/image";
export default function About(){
    return(
        <div style={{backgroundImage: 'url("/image/abouut.jpg")', backgroundSize:'cover', width:'100%', height:'100vh'}}>
          <div>  
    <h1 className="text-3xl font-bold text-orange-600 text-center">Welcome to My Website</h1> <br /> <br />
    
       
    
</div>
    

            <p className="text-lg leading-relaxed bg-orange-500" style={{wordSpacing:'10px', fontSize: '30px',}} >Hello, My name is tayyaba Shahbaz and this is my first website in programming and i am very exited about it. I have basic knowledge of <b>HTML</b> <b>,CSS</b> and <b> TYPESCRIPT
             </b>. I do nor have <i>IT</i> background which means i was a medical student. I did <b>NURSING</b> which was a 3 years program and after that i did specialization in <b>MIDWIFE</b>
             ,after that i did job in <i>DOW</i> medical hospital for 1.5 years and got married. I had three years study gap after marriage and started my study again in 2023 in <b>IT.</b></p>
             <p className="bg-emerald-500 m-2 p-4 text-4xl">I had so many career options in 2023 in medical field but i decided not to join medical and study something which can provide some kind of remote work from home. Getting into <b className="bg-gray-400">IT</b>
            was a big change in my life as everything was totally new to me </p>
           
            <button className="bg-orange-700 text-white px-6 py-3 rounded-lg text-lg mt-4 hover:bg-orange-800 transition duration-300">
    Feedback
</button>
       
        
        </div>

         
    )
}