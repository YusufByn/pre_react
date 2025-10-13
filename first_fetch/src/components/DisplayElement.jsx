import { useState } from 'react';

// déclaration de ma function HideElement
function HideElement() {
  // je déclare ma variable d'état IsVisible avec setVisible avec un 
    const [isVisible, setIsVisible] = useState('Displayed');

    const toggleVision = () => {
        setIsVisible(isVisible === 'Displayed' ? 'NotDisplayed' : 'Displayed');
    }
  return(
    <>
      <section>
        <div className={isVisible}>
          <h3>On nous voit</h3>
        </div>
        <button onClick={toggleVision}>trigger</button>
      </section>
    </>
  )
}

export default HideElement