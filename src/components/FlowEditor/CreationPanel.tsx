import Offcanvas from "react-bootstrap/Offcanvas";

export const CreationPanel = () => {
  return (
    <Offcanvas show={true} onHide={() => {}}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>CreationPanel</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};
