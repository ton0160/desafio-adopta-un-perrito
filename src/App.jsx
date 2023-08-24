import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const cardsData = [
    {
      image: 'https://cdn.pixabay.com/photo/2015/03/21/18/11/dog-684036_1280.jpg',
      name: 'Apolo',
      description: 'Juguetón y lleno de energía. Siempre listo para acompañarte.',
      tagText: 'En adopción',
      tagColor: 'primary',
      buttonColor: 'success',
      buttonText: 'Mestizo'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2020/10/06/11/50/dog-5632005_1280.jpg',
      name: 'Sunny',
      description: 'Cachorro ideal para estar con la familia, sobretodo con los niños pequeños.',
      tagText: 'En adopción',
      tagColor: 'danger',
      buttonColor: 'warning',
      buttonText: 'Labrador'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/02/22/03/59/dog-2088424_1280.jpg',
      name: 'Cando',
      description: 'Perro de corazón noble que siempre estará a tu lado acompañándote.',
      tagText: 'En adopción',
      tagColor: 'primary',
      buttonColor: 'info',
      buttonText: 'Albino'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2018/02/08/16/09/dog-3139757_1280.jpg',
      name: 'Noah',
      description: 'Perrito de naturaleza tranquila. Es muy inteligente y dócil; le encanta aprender trucos.',
      tagText: 'En adopción',
      tagColor: 'primary',
      buttonColor: 'dark',
      buttonText: 'Husky'
    },
  ];

  return (
    <>
    <div className="app">
    <Header title="Adopta un perrito" />
    <div className="card-container">
      {cardsData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
    <Footer />
  </div>
    </>
  )
}

export default App
