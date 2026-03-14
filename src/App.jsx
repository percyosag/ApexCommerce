import { Container } from "react-bootstrap";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ApexCommerce</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
