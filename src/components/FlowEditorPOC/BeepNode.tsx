import { Handle, NodeProps, Position } from "reactflow";
import * as Tone from "tone";

export const BeepNode = (props: BeepNodeData) => {
  const { data } = props;
  const synth = new Tone.PolySynth().toDestination();

  const execPlay = () => {
    console.log("execPlay", data.note);
    synth.triggerAttackRelease(data.note, "8n");
  };

  return (
    <div
      style={{
        padding: 0,
        width: 40,
        height: 40,
        borderRadius: "4px",
        border: "grey 1px solid",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <p style={{ textAlign: "center" }}>{data.note}</p>
      <button onClick={execPlay}>Play</button>
    </div>
  );
};

export type BeepNodeData = NodeProps<BeepNodeDataInner>;
export type BeepNodeDataInner = {
  note: string;
};
