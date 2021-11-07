import BarChart from "assests/Components/BarChart";
import DataTable from "assests/Components/DataTable";
import DonutChart from "assests/Components/DonutChart";
import Footer from "assests/Components/Footer/Footer";
import NavBar from "assests/Components/NavBar/NavBar";

const DashBoard = () => {
    return (

        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">DashBoard de Vendas</h1>
                <div className="row px 3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as Vendas</h5>
                        <BarChart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as Vendas</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas as Vendas</h2>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>



    );
}

export default DashBoard;