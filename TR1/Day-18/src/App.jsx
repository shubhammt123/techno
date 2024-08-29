import Card1 from "./Card1"
import Home from "./Home"

function App() {

  return (
    <div className="flex gap-3">
      {/* Props */}
      <Card1 heading="Card 1 Heading" description="This is card 1 desc" classname = "bg-slate-300" />
      <Card1 heading="Card 2 Heading" description="This is card 2 desc" classname = "bg-green-300"  />
      <Card1 heading="Card 3 Heading" description="This is card 3 desc" classname = "bg-red-300"  />
      <Card1 heading="Card 4 Heading" description="This is card 4 desc" classname = "bg-blue-300"  />
      </div>
  )
}

export default App
