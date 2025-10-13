import { useEffect, useState} from 'react'

function TrafficLight() {

    const [redLight, setRedLight] = useState ('noLights');
    const [orangeLight, setOrangeLight] = useState ('noLights');
    const [greenLight, setGreenLight] = useState ('green');
 

    
    useEffect(() => {

        // on déclare une variable timer pour stocker nos changement de lumière dedans
        let timer; 

        if(greenLight === 'green')
        {
            timer = setTimeout(() => {
            setGreenLight('noLights');
            setOrangeLight('orange');
            }, "2000");
        }
        else if (orangeLight === 'orange')
        {
            timer = setTimeout(() => {
            setOrangeLight('noLights');
            setRedLight('red')
            }, "2000");
        }
        else if (redLight === 'red')
        {
            timer = setTimeout(() => {
            setRedLight('noLights');
            setGreenLight('green');
            }, "2000");

        }

        // on return le timer avec les data suivantes : greenLight, orangeLight et redLight
        return () => clearTimeout(timer);
    }, [greenLight, orangeLight, redLight]);


  return (
    <>
        <div>
            <div className={redLight}></div>
            <div className={orangeLight}></div>
            <div className={greenLight}></div>
        </div>
    </>
  );
}

export default TrafficLight;