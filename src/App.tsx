import { FlowEditor } from "./components/FlowEditor/FlowEditor";
import { Edge, Node } from "reactflow";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FlowEditorMenu } from "./components/FlowEditor/FlowEditorMenu";

function App() {
  return (
    <div id="app">
      <FlowEditorMenu />
      <FlowEditor />
    </div>
  );
}

export default App;
