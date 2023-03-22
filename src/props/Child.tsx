interface ChildProps {
  color: string,
  children?: React.ReactNode,
  onClick: () => void,
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      <div>{color}</div>
      <button onClick={onClick}>click me</button>
    </div>
  )
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      <div>{color}</div>
      <button onClick={onClick}>click me</button>
    </div>
  )
}