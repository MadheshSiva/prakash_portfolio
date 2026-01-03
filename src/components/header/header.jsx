
import { Typewriter } from "react-simple-typewriter";
import "./header.css"
const PortfolioHeader = () => {
  
  return (
    <header>
      <section className="mt-10">
        <h1 className="text-[3.6rem] font-bold tracking-wide">
          Prakash <span className="text-[#4285F4]">T</span>
        </h1>
        <div className="flex items-center gap-3 ml-20 leading-7 mt-[8px]">
          <p className="font-semibold text-[2.5rem]">
            I am into
          </p>
          <p className="font-semibold text-[2.5rem] text-[#4285F4] flex items-center">
            {/* Wrapping the Typewriter component with a div */}
            <span className="text-[2.5rem] font-semibold text-[#4285F4]">
              <Typewriter
                words={['Data Science','Machine Learning','Deep Learning','Natural Language Processing','Computer Vision','Generative AI','Agentic AI','Multi-Agent Orchestration','MLOps','LLMOps','AgentOps']}
                loop={false}
                cursor
                cursorColor="#898888"
                typeSpeed={250}
                deleteSpeed={70}
                delaySpeed={1000}
                cursorBlinking={0}
                
              />
            </span>
          </p>
        </div>
      </section>
      
      
    </header>
  );
};

export default PortfolioHeader;
