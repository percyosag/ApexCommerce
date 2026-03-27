import { useParams, Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import products from "../data/products";

const CartScreen = () => {
  const { id: productId } = useParams();

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

              <Col md={2}>Qty: 1</Col>

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
              <h4>Subtotal (1) item</h4>
              <strong>${product.price}</strong>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
};

export default CartScreen;
