import './App.css'
import Card from './components/Card/Card'
import Contact from './components/Contact/Contact'
import Count from './components/Count/Count'

function App() {
  const data = [
    {
      title: "card title",
      date: "2024-5-1",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 2",
      date: "2024-5-2",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 3",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 4",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 5",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 6",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
  ]
  const data2 = [
    {
      title: "card title",
      date: "2024-5-1",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 2",
      date: "2024-5-2",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 3",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 4",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 5",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 6",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
  ]
  const data3 = [
    {
      title: "card title",
      date: "2024-5-1",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 2",
      date: "2024-5-2",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 3",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 4",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 5",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
    {
      title: "card title 6",
      date: "2024-5-4",
      img: "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"
    },
  ]

  return (
    <div>
      <h1>react class</h1>
      {/* <div className="card">
        <h3>{data.title}</h3>
        <p>{data.date}</p>
        <img src={data.img} alt="" />
      </div> */}

      <Contact />
        <Count />

      <Card dat={data} dat2={data2} dat3={data3} />

    </div>
  )
}

export default App