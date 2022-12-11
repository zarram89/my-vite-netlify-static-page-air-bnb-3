import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        // item={item} так нужно передавать props.item.location и т.д., а через spreadы сразу передаем все свойства в props компонента и item.свойство писать не надо
        {...item}
      />)
  })

  return (
    <div className="site">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
