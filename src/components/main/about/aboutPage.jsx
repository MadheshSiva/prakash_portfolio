import About_img from "../../assets/prakash_pic.jpeg"

const AboutPage = () => {

    return(
        
            <article>
                <div className="flex items-center justify-center gap-2 text-[2rem]">
                    <i className="fas fa-user-alt"></i>
                    <h2>About <span className="text-[#4285F4]">Me</span></h2>
                </div>
                <div>
                    <img src={About_img} alt="About_Img" className="w-1/4 rounded-full mx-auto shadow-[0px_0px_2.5px_.5px_rgba(0,0,0,0.5)]"/>
                </div>
                <div>
                 
                </div>
            </article>
    
    )
}

export default AboutPage;