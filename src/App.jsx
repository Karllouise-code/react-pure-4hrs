/* import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx' */
// import Card from './Card.jsx'
// import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {
  return (
    <>
      {/* <Header />
      <main>
        <h2>Welcome to My React App</h2>
        <Food />
      </main>
      <Footer />  */}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      {/* <Button /> */}
      <Student name="Alice" age={20} />
      <Student name="Bob" age={22} isStudent={true} />
      <Student name="Leon" age={21} isStudent={false} />
      <Student name="April" age={22} isStudent={true} />
      <Student name="Lark" age={24} isStudent={true} />
      <Student age={30} />
    </>
  )

}

export default App
