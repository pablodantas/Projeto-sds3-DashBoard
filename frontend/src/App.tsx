import DataTable from "assests/Components/DataTable";
import Footer from "assests/Components/Footer";
import NavBar from "assests/Components/NavBar/NavBar";


function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <h1 className="text-primary">Ola mundo!</h1>
        <DataTable/>
      </div>
      <Footer/>
   </>

  );
}

export default App;
