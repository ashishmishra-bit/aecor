import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

const Privacy = () => {
    return ( 
        <>
            <Navbar />
            <div className="px-40 mt-3">
                <div className="text-center font-bold text-4xl">PRIVACY POLICY</div>
                <p className="text-base mt-8">All the personal information which you will provide while registering for the internet trading account, will be kept secret. Only those people or companies can access the information who are authorized to do so.</p>
                <p className="text-base mt-4">The information which will be provided by you at the time of registration is your name, address, e-mail address, birth date, gender, zip code, education, occupation, industry & personal interests.</p>
                <p className="text-base mt-4">Information gathered is mainly utilized to customize the content you see, attend your request promptly and notify you about the updation on site.</p>

                <div className="font-semibold text-2xl my-5">INFORMATION SHARING AND DISCLOSURE :</div>
                <p className="text-base mt-4">Ambalal Shares & Stocks Private Limited will preserve all your personal information and will be used as the database for the personal use of Ambalal Shares & Stocks Private Limited.</p>
                <p className="text-base my-4">These information will be provided to those who are authorized to use the user database for Ambalal Shares & Stocks Private Limited services. Ambalal Shares & Stocks Private Limited will provide the facility to edit your Account information and preferences at any time. Your account information is password protected for your security and privacy. Please do maintain the secrecy and privacy of your user name and password to protect it from any unauthorized access. The secrecy of your user name and password will be wholly yours.</p>
            </div>
            <Footer />
        </>
     );
}
 
export default Privacy;