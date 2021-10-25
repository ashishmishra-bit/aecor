import Link from 'next/link';

const signUp = () => {
    return (
        <div>
            <div className="formBox" >
                <div className = "btnBox">
                    <div id="btn"></div>
                    <button type="button" className="toggle-btn" >Sign Up</button>
                    <Link href="/">
                    <button type="button" className="toggle-btn">home</button>
                    </Link>
                </div>
                <form id = "register" className = "inputGrp">
                <input type="text" placeholder="Name" className="inputField" required />
                    <input type="email" placeholder="E-mail" className="inputField" required />
                    <input type="text" placeholder="Phone Number" className="inputField" required />
                    <input type="checkbox" className="checkBox"/><span>I agreed to T&C</span>
                    <button type="submit" className="submitBtn">SignUp</button>
                </form>
                <h1 className="text-center text-2xl" >Open a new account</h1>
            </div>
        
           

            <style jsx>{`
                .formBox{
                    width:380px;
                    height:500px;
                    position:relative;
                    margin:6% auto;
                    background:#fff;
                    padding:5px;
                }
                .btnBox{
                    width:220px;
                    margin:35px auto;
                    position:relative;
                    box-shadow:0 0 20px 9px #A3E2FD;
                    border-radius:30px;
                }
                .toggle-btn{
                    padding:10px 30px;
                    cursor:pointer;
                    background:transparent;
                    border:0;
                    outline:none;
                    position:relative;
                }
                #btn{
                    top:0;
                    left:0;
                    position:absolute;
                    width:110px;
                    height:100%;
                    background:linear-gradient(to right , #20BDFF, #A5FECB);
                    border-radius:30px;
                    transition:all 0.5s;
                }
                .inputGrp{
                    top:180px;
                    position:absolute;
                    width:280px;
                    transition:all 0.5s;
                }
                .inputField{
                    width:100%;
                    padding:10px 0;
                    margin:5px 0;
                    border-left:0;
                    border-right:0;
                    border-top:0;
                    border-bottom:1px solid #999;
                    outline:none;
                    backround:transparent;
                }
                .checkBox{
                    margin: 30px, 10px ,30px,0;
                }
                .submitBtn{
                    width:85%;
                    padding:10px 30px;
                    cursor:pointer;
                    display:block;
                    margin:auto;
                    background:linear-gradient(to right , #20BDFF, #A5FECB);
                    border-radius:30px;
                    border:0;
                    outline:none;
                }
                span{
                    font-size:12px;
                    color:#777;
                    bottom:68px;
                    // position:absolute;
                }
                #register{
                    left:50px;
                }
                

            `}</style>
        </div>
    )
}

export default signUp
