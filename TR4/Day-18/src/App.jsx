import Card from "./Card"


const data = [
  {
    heading: "card 1",
    desc: "This is Card 1 Desc",
    color: "bg-slate-100",
    image: "https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg"
  },
  {
    heading: "card 2",
    desc: "This is Card 2 Desc",
    color: "bg-red-200",
    image: "https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg"
  },
  {
    heading: "card 3",
    desc: "This is Card 3 Desc",
    color: "bg-green-200",
    image: "https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg"
  },
  {
    heading: "card 4",
    desc: "This is Card 4 Desc",
    color: "bg-yellow-200",
    image: "https://th.bing.com/th/id/OIP.QRAV-vDWSoURt7CKtQn1PgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
  },
  {
    heading: "card 5",
    desc: "This is Card 5 Desc",
    color: "bg-purple-200",
    image: "https://th.bing.com/th/id/OIP.QRAV-vDWSoURt7CKtQn1PgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
  },
  {
    heading: "card 6",
    desc: "This is Card 6 Desc",
    color: "bg-cyan-200",
    image: "https://th.bing.com/th/id/OIP.QRAV-vDWSoURt7CKtQn1PgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
  },
  {
    heading: "card 7",
    desc: "This is Card 7 Desc",
    color: "bg-blue-100",
    image: "https://th.bing.com/th/id/OIP.KT2xbgX0E18-ndqTSclMHgHaJC?pid=ImgDet&w=208&h=254&c=7&dpr=1.5"
  },

]


function App() {

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {
        data.map((item , i)=>{
          return (
            <Card item={item} />
          )
          
        })
      }
    </div>
  )
}

export default App
