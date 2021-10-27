import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

const Cancel = () => {
    return ( 
        <>
            <Navbar />
            <div className="px-40 mt-3">
                <div className="text-center font-bold text-4xl">REFUND & CANCELLATION POLICY</div>
                <p className="text-base mt-8">The Refund & Cancellation policy for all payments made towards account opening or any other services using any mode of payment shall stand as under:</p>
                <p className="text-base mt-8">The Fees paid towards account opening charges for enabling equities and commodities, or any other services is non-refundable.
                Pick up of required documents related to the account opening procedure is subject to availability of our representatives, given at any particular time and location.
                In case you have paid the charges relating to account opening multiple times, please write to kyc@ambalalshares.com and we will initiate the necessary procedure to refund your money.</p>
                <p className="text-base my-4">Note: The completion of the refund procedure is subject to agencies such as banks, payment gateways.</p>
            </div>
            <Footer />
        </>
     );
}
export default Cancel;