import Container from './components/Container/Container';
import Decoration from './components/Decoration/Decorations';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Decoration />
      <Header />
      <Container>
        <main>
          <Hero />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
