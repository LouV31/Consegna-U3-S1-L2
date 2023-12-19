import { Card, Button } from "react-bootstrap";

const MyCard = ({ title, img, category, price }) => {
    return (
        <Card style={{ minHeight: "550px" }}>
            <Card.Img
                variant="top"
                src={img}
                className="img-fluid object-fit-contain "
                style={{ maxHeight: "250px" }}
            />
            <Card.Body className="d-flex flex-column align-content-baseline justify-content-end">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="mt-auto">{category}</Card.Text>
                <Card.Text>{price}</Card.Text>

                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};
export default MyCard;
