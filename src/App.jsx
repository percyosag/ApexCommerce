import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="py-3">
        <Container>
          <h1>Welcome to My E-Commerce Store</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
