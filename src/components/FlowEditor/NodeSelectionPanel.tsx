import Offcanvas from "react-bootstrap/Offcanvas";

export const NodeSelectionPanel = () => {
  return (
    <Offcanvas show={true} onHide={() => {}}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>NodeSelectionPanel</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};
