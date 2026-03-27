import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import products from "../data/products";
import { useParams, Link, useLocation } from "react-router-dom";

const CartScreen = () => {
  const { id: productId } = useParams();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const qty = Number(searchParams.get("qty")) || 1;

  const product = products.find((p) => p._id === productId);

  return (
    <>
      <h1>Shopping Cart</h1>

      {!product ? (
        <p>
          Your cart is empty <Link to="/">Go Back</Link>
        </p>
      ) : (
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row className="align-items-center">
              <Col md={2}>
                <Image src={product.image} alt={product.name} fluid rounded />
              </Col>

              <Col md={3}>
                <Link to={`/product/${product._id}`}>{product.name}</Link>
              </Col>

              <Col md={2}>${product.price}</Col>

              <Col md={2}>Qty: {qty}</Col>

              <Col md={2}>
                <Button type="button" variant="light">
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      )}

      {product && (
        <Card className="mt-4 p-3">
          <Row>
            <Col>
              <h4>
                Subtotal ({qty}) {qty === 1 ? "item" : "items"}
              </h4>
              <strong>${(product.price * qty).toFixed(2)}</strong>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
};

export default CartScreen;
