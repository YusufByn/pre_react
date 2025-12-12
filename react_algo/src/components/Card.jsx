
function Card({name, description, imgSrc, nameClass}){


    return(
        <>
            <div className='cardContainer'>
                <div>
                    <img src={imgSrc} className={nameClass}/>
                </div>
                <div>
                    <h4>{name}</h4>
                    <span> 
                        {description}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card