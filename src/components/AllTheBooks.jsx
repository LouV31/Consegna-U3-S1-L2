import { Component } from "react";
import MyCard from "./Card";
import { Row, Col, Container } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";
const allTheBooksArr = [...fantasy, ...history, ...horror, ...romance, ...scifi];

console.log(allTheBooksArr);
class AllTheBooks extends Component {
    state = {
        selectedState: null,
    };
    render() {
        return (
            <Container>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4">
                    {allTheBooksArr.map((book, index) => (
                        <Col key={`book-${index}`}>
                            <MyCard img={book.img} title={book.title} category={book.category} price={book.price} />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default AllTheBooks;
