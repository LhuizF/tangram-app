interface ShapeItem {
  matrix: boolean[][]
  start: Position
  color: string
}

interface Block {
  position: Position;
  value: number
  filled: boolean;
  color: string;
}

interface DropArea {
  row: number
  column: number
}

interface Position {
  row: number
  column: number
}

interface Shape {
  id: number
  position: number[]
  color: string
}
