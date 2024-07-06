
import { SiInstagram, SiYoutube, SiLinkedin, SiFacebook, SiX, SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";
import logo2 from "../logo2.png"

const Footer = () => {
    const programs = [
        {
          program: "Product Management",
          ReferrerBonus: "7,000",
          totalAmount: "$250.00",
          RefereeBonus: "9,000",
        },
        {
          program: "Strategy & Leadership",
          ReferrerBonus: "9,000",
          totalAmount: "$150.00",
          RefereeBonus: "11,000",
        },
        {
          program: "Business Management",
          ReferrerBonus: "10,000",
          totalAmount: "$350.00",
          RefereeBonus: "10,000",
        },
        {
          program: "Fintech",
          ReferrerBonus: "10,000",
          totalAmount: "$450.00",
          RefereeBonus: "10,000",
        },
        {
          program: "Senior Management",
          ReferrerBonus: "10,000",
          totalAmount: "$550.00",
          RefereeBonus: "10,000",
        },
        {
          program: "Data Science",
          ReferrerBonus: "10,000",
          totalAmount: "$200.00",
          RefereeBonus: "10,000",
        },
        {
          program: "Digital Transformation",
          ReferrerBonus: "10,000",
          totalAmount: "$300.00",
          RefereeBonus: "10,000",
        },
        {
            program: "Business Analytics",
            ReferrerBonus: "10,000",
            totalAmount: "$300.00",
            RefereeBonus: "10,000",
          },
      ]
    return (
      <div className="bottom-0  sm:h-full sm:w-full p-4 bg-neutral-900 dark:bg-slate-900 px-6 lg:px-36 print:hidden">
                  <div className="flex sm:flex-row flex-col gap-10  justify-between sm:px-20">
                  <div className=" mx-auto sm:mx-0 text-purple-600 text-5xl sm:my-auto sm:text-center ">
                <img src={logo2} alt="" />
                
            </div>
            <div className="flex gap-3 flex-col sm:justify-center sm:items-center">
                <h1 className="sm:w-54 w-full  rounded-md  px-6 py-2 text-white bg-blue-700">Schedule 1-on-1 Call Now</h1>
                <p className="text-slate-300 text-center">Speak with our Learning Advisor</p>
                </div>
                  </div>
        <div className="md:max-w-screen-2xl  mt-4 mx-auto flex flex-col sm:flex-row sm:items-start sm:justify-between justify-start w-full">

            <div className="flex flex-col  justify-center my-8 md:my-0">
              <h3 className="font-semibold text-purple-600 mb-2">Programs</h3>
              {
                programs.map((program)=>{
                    return(
                        <Link key={program.program} to={"/"} className="hover:text-blue-500 flex gap-2 items-center text-neutral-200">
                        {program.program}
                        <span className="font-bold text-2xl">+</span>
                      </Link>
                    )
                   
                })
              }
            </div>
  
            <div className="flex flex-col  justify-center my-8 md:my-0">
              <h3 className="font-semibold text-purple-600 mb-2">Contact Us</h3>
                        <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                        Email us (For Data Science Queries): admissions@accredian.com
                        </Link>
                        <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                        Email us (For Product Management Queries):pm@accredian.com </Link>
                        <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                        Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM) </Link>
                        <Link to={"/"} className="hover:text-blue-500  text-sm flex gap-2 items-center text-neutral-200">
                        Product Management Admission Helpline:+91 9625811095</Link>
                        <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                        Enrolled Student Helpline: +91 7969322507</Link>
            <Link to={"/"} className="hover:text-blue-500 flex gap-2 text-sm items-center text-neutral-200">

            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
            Haryana 122015        
                      </Link>
                      <div to={"/"} className=" flex gap-2 text-lg items-center text-neutral-200">
Why Accredian </div>
<div className=" my-2 flex gap-2 text-md items-center text-neutral-200">
Follow Us </div>
<div className="flex  gap-x-2">
<Link target="_blank" href={"/"}>
                  <SiX className="text-white hover:text-blue-500" />
                </Link>
                <Link target="_blank" href={"/"}>
                  <SiInstagram className="text-white hover:text-blue-500" />
                </Link>
                <Link target="_blank" href={"/"}>
                  <SiGithub className="text-white hover:text-blue-500" />
                </Link>
                <Link target="_blank" href={"/"}>
                  <SiLinkedin className="text-white hover:text-blue-500" />
                </Link>
                <Link target="_blank" href={"/"}>
                  <SiFacebook className="text-white hover:text-blue-500" />
                </Link>
                <Link target="_blank" href={"/"}>
                  <SiYoutube className="text-white hover:text-blue-500" />
                </Link>
</div>
    
            </div>
            <div className="flex flex-col  justify-center my-8 md:my-0">
              <h3 className="font-semibold text-purple-600 mb-2">Accredian</h3>
    
                        <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                            About
                      </Link>
                      <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                            Career
                      </Link>
                      <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                            Blog
                      </Link>
                      <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                            Admission Policy
                      </Link>
                      <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                            Referral Policy
                      </Link>
                      <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                            Terms of Service
                      </Link>
                      <Link to={"/"} className="hover:text-blue-500 text-sm flex gap-2 items-center text-neutral-200">
                            Master FAQs
                      </Link>

            </div>
            </div>
            <div className="text-center text-gray-400">
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </div>
            </div>
    );
  };
  
  export default Footer;