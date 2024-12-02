import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import HomePage from "./components/home/Homepage";
import {BrowserRouter , Routes, Route} from "react-router-dom"
import ExperienceList from "./components/main/experience-research/experienceList";
const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#232222",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: 4,
                random: true,
              },
              links: { // Updated
                enable: true,
                distance: 150,
                color: "#000000",
                opacity: 0.4,
                width: 1,
              },
              move: { // Updated
                enable: true,
                speed: 2, // Slower speed
                direction: "none",
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                // onHover: {
                //   enable: true,
                //   mode: "repulse",
                // },
                // onClick: {
                //   enable: true,
                //   mode: "push",
                // },
              },
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
              },
            },
            retina_detect: true,
          }}
        >

        </Particles>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} ></Route>
         <Route path="/experience-list/:company_name" element={<ExperienceList/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
};

export default App;
