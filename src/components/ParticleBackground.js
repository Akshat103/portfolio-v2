import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "./config/particle-config";

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                margin: "0",
                padding: "0",
                zIndex: "0"
              }}
            options={particleConfig}
        />
    );
};

export default ParticleBackground;