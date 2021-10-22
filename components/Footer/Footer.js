import foot from './Footer.module.css';
import Image from "next/image";

const Footer = () => {
  return (
    <div className={foot.footer}>
        <div className={foot.sectionOne}>
            <div className={foot.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="flex items-center justify-center ml-10">
                <div className="ml-6">
                    <Image src="/img/Twitter.png" width="35px" height="35px" />
                </div>
                <div className="ml-6">
                    <Image src="/img/Facebook.png" width="35px" height="35px" />
                </div>
                <div className="ml-6">
                    <Image src="/img/Linkedin.png" width="35px" height="35px" />
                </div>
            </div>
        </div>
        <div className={foot.sectionTwo}>
            <div className={foot.address}>
                <div className={foot.subTitle}>Address</div>
                <div className={foot.Text}>xyxsaladk akmnlaj aklda</div>
                <div className={foot.Text}>abc@gmail.com</div>
                <div className={foot.Text}>+91-00912 378136</div>
                <div className={foot.button}>Open Account</div>
            </div>
            <div className={foot.links}>
                <div className={foot.subTitle}>Links</div>
                <div className={foot.Text}>Home</div>
                <div className={foot.Text}>Services</div>
                <div className={foot.Text}>Products</div>
                <div className={foot.Text}>Portfolio</div>
                <div className={foot.Text}>Contact Us</div>
            </div>
            <div className={foot.product}>
                <div className={foot.subTitle}>Product</div>
                <div className={foot.Text}>EduGuru</div>
                <div className={foot.Text}>CRM</div>
                <div className={foot.Text}>Live Chat</div>
                <div className={foot.Text}>Biling Software</div>
            </div>
            <div className={foot.services}>
                <div className={foot.subTitle}>Services</div>
                <div className={foot.Text}>Software development</div>
                <div className={foot.Text}>Cloud Hosting</div>
                <div className={foot.Text}>Bulk Email</div>
                <div className={foot.Text}>Bulk SMS</div>
                <div className={foot.Text}>Email</div>
            </div>
        </div>
        <div className={foot.sectionThree}>
            <div className={foot.copyright}>© 2020 All Rights Reserved ​</div>
            <div className="inline-flex">
                <div className={foot.privacy}>Privacy Policy ​</div> 
                <div className="text-white">|</div>
                <div className={foot.term}>Terms Of Use ​</div>
            </div>
        </div>
    </div>
  )
}

export default Footer