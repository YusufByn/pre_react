import { useState } from 'react';

function DayAndNight() {
    const [statu, setStatu] = useState('day');

    // ici c'est if
    // if staty est day on change le statu a night, sinon on met day (? = if / : = else)
    const toggleTheme = () => {
        setStatu(statu === 'day' ? 'night' : 'day');
    }

    return(
        <>  
            {/* en gros on change la class par le statu : day or night */}
            <section className={statu}>
                {/* on précise dans quel statu on est */}
                <span>{statu}</span>
                {/* le button change le statu de par la fonction toggleTheme */}
                <button onClick={toggleTheme}>Changer</button>
            </section>
        </>
    )
}

export default DayAndNight