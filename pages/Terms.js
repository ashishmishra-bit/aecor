import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

const Terms = () => {
    return ( 
        <>
            <Navbar />
            <div className="px-40 mt-3">
                <div className="text-center font-bold text-4xl">GENERAL TERMS AND CONDITIONS</div>
                <p className="text-base mt-8">Before availing of online trading services, the Client shall complete the registration process as may be prescribed from time to time. The Client shall follow the instruction given in the website for registering himself as a client with AMBALAL.</p>
                <p className="text-base my-4">The Client agrees that all investment and disinvestment decisions are based on the Clients own evaluation of financial circumstances and investment objectives. The Client will not hold nor seek to hold AMBALAL or any of its officers, directors, partners, employees, agents, subsidiaries, affiliates or business associates liable for any trading losses, cost of damage incurred by the Client consequent upon relying on investment information, research opinions or advice or any other material/information whatsoever on the web site, literature, brochure issued by AMBALAL or any other agency appointed/authorised by AMBALAL. The Client should seek independent professional advice regarding the suitability of any investment decisions. The Client also acknowledges that employees of AMBALAL are not authorized to give any such advice and that the Client will not solicit or rely upon any such advice from AMBALAL or any of its employees or business associates.</p>
            </div>
            <Footer />
        </>
     );
}
export default Terms;