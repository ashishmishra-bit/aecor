const We = () => {
    return (
        <div className="box">
            <span ><img src = "/img/phone.png"/></span>
            <span ><img src = "/img/phone.png"/></span>
            <span ><img src = "/img/phone.png"/></span>
            <span ><img src = "/img/phone.png"/></span>
            <span ><img src = "/img/phone.png"/></span>


            <style jsx>{`
                img{
                    width:251px;
                    height:461px;
                }
                .box{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    position:relative;
                    width:100%;
                    height:100%;
                    transform-style:preserve-3d;
                }
                .box span{
                    // position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    transform-style:preserve-3d;
                    trsasform-origin:center;
                    transform:rotateY(calc(360deg * (1 - var(--i))));
                }
            
            `}</style>

        </div>
    )
}

export default We
