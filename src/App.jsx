// import { Container, Row, Col } from "react-bootstrap";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Product from "./components/Product";
// import products from "./data/products";

// function App() {
//   return (
//     <>
//       <Header />
//       <main className="py-3">
//         <Container>
//           <h1>Latest Products</h1>
//           <Row>
//             {products.map((product) => (
//               <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                 <Product product={product} />
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
