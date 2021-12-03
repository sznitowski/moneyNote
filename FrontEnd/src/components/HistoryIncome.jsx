import { useContext } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import OperationContext from "../context/OperationContext";

const HistoryIncome = () => {
  const { operations, incomesArray, HandleUpdate, HandleDelete } =
    useContext(OperationContext);

  return (
    <Container className="main-container">
      <h5 className="App-history__income--title text-success">
        INCOME HISTORY
      </h5>

      <Col className="container-title">
        <Row className="row row-cols-4">
          <Col className="col">DATE</Col>
          <Col className="col">AMOUNT</Col>
          <Col className="col">CONCEPT</Col>
          <Col className="col">ACTION</Col>
        </Row>
      </Col>

      {/* Display all income operations */}
      {incomesArray.map((operation) => (
        <Container className="" key={operation.id}>
          <Row className="container-operations">
            <Row className="row row-cols-4">
              <Col className="col">{operation.date}</Col>
              <Col className="col">${operation.amount}</Col>
              <Col className="col">{operation.concept}</Col>
         
              <Container className="d-grid">
                <Button
                  className="btn-update btn-sm"
                  color="info"
                  outline
                  onClick={() => HandleUpdate(operations, operation)}
                >
                  Udapte
                </Button>
                <Button
                  className="btn-delete btn-sm"
                  color="danger"
                  onClick={() => HandleDelete(operations, operation.id)}
                >
                  Delete
                </Button>
              </Container>
            </Row>
          </Row>
        </Container>
      ))}
    </Container>
  );
};

export default HistoryIncome;
