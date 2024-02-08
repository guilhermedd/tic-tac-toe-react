import './App.css';
import Square from "./components/Square";
function Board() {
  const indexes = [1, 2, 3];
  return (
    <>
      {
        indexes.map((i)=>
            (
              indexes.map((index)=>
                (<Square index={i * index}/>))
            )
        )
      }
    </>
  );
}

export default Board;
