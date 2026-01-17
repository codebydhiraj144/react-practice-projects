function printHello() {
  console.log("hello!");
}

function printBye() {
  console.log("bye!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click Me</button>

      <p onClick={printBye} style={{ cursor: "pointer" }}>
        This paragraph is for event demo
      </p>
    </div>
  );
}
