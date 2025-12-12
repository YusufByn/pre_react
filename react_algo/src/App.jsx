import './App.css'
import Card from './components/Card.jsx'
import GOT from '../src/assets/GOT.jpg'
import Daenerys from '../src/assets/daenerys.jpg'
import dragons from '../src/assets/dragons.jpg'
import aegon from '../src/assets/aegon.jpg'
import DaenerysSecond from '../src/assets/daenerys2.jpg'

function App() {
  const users = [
    {name: 'GOT', description: "war dans la saison nul qu'est la 8", imgSrc:GOT, nameClass:'imgCss' },
    {name: 'Daenerys', description: "daenerys la goat the gooooooat", imgSrc:Daenerys, nameClass:'imgCss'},
    {name: 'Dragons', description: "plein de dragons et font parti des meilleurs", imgSrc:dragons, nameClass:'imgCss'},
    {name: "Aegon", description: "le conquerant consanguin", imgSrc:aegon, nameClass:'imgCss'},
    {name: "test3", description: "voici la desc du third test", imgSrc:DaenerysSecond, nameClass:'imgCss'}
  ];
 

  return (
    <>
      <h1>VOICI LES CARDS</h1>
      <section className='cardTest'>
        {
          users.map((user, index)=>
            <Card key={index} name={user.name} description={user.description} imgSrc={user.imgSrc} nameClass={user.nameClass}/>
          )
        }
      </section>
    </>
  )
}

export default App
