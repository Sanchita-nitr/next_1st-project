
import "./style.css";

export default function home() {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
            <body>
                <div className="page">
                    <div className="body absolute text-2xl ">
                        <p className=" about lg:text-5xl md:text-5xl text-teal-400 pt-5 pl-10 ">About us  </p>
                        <div className="pt-10 border-b-2 border-teal-400"><hr /></div>

                        <img className=" ho3 absolute lg:mx-60 lg:mt-64 lg:size-60 md:size-36 md:mx-36 md:mt-44 hidden md:block lg:block " src="https://www.hackodisha.tech/Images/HO3.svg" />
                        <img className=" round absolute opacity-40 lg:mt-16 lg:mx-10 md:mx-10 md:mt-16 md:w-[350px] lg:w-[624px] hidden md:block lg:block " src="https://www.hackodisha.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcircle-anim.fbd86c5f.gif&w=3840&q=75" />

                        <div className="flex justify-center item-center lg:hidden md:hidden ">
                            <img className=" size-24  absolute mt-28 " src="https://www.hackodisha.tech/Images/HO3.svg" />
                        </div>
                        <div className="flex justify-center item-center lg:hidden md:hidden " >
                            <img className="absolute w-[200px] opacity-40 mt-16 " src=" https://www.hackodisha.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcircle-anim.fbd86c5f.gif&w=3840&q=75" />
                        </div>

                        <div className="building  ">
                            <div className=" para relative text-xl text-justify justify-between lg:mx-24 lg:pl-72 md:mx-16 md:pl-28 lg:pt-28 md:pt-28 pt-80 mx-20">
                                <p className="lg:ml-60 md:ml-60">HackOdisha- a thrilling <span class=" text-fuchsia-500">36-hour online hackathon </span>organized by <span class=" text-fuchsia-500 ">Webwiz, Nit Rourkela</span>— an event dedicated to fostering community collaboration. With an impressive turnout of<span class="text-fuchsia-500"> 3100 + participants in HackOdisha 2.0 </span> & <span class="text-fuchsia-500">1600 + participants in HackOdisha 1.0 </span>across India, this hackathon promises to be a platform where innovation knows no bounds.</p>
                                <br />
                                <p className="lg:ml-60 md:ml-60 "> Here, we witness groundbreaking projects spanning many fields, including healthcare, education, environment, women's security, and much more. Our participants bring their unique perspectives and expertise to address real-world challenges in these critical areas.</p>
                                <br />
                                <p className="lg:ml-60 md:ml-60">We celebrate the power of technology and the indomitable spirit of our participants. Together, we're shaping a brighter future through innovation and collaboration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}