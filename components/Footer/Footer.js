import foot from './Footer.module.css';
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={foot.footer}>
        <div className={foot.sectionOne}>
            <div className={foot.title}>Investment in securities is subject to market risk.</div>
            <div className="flex items-center justify-center mt-7 lg:ml-10">
                <div className="lg:ml-6">
                    <Image src="/img/Twitter.png" width="35px" height="35px" />
                </div>
                <div className="ml-5 lg:ml-6">
                    <Image src="/img/Facebook.png" width="35px" height="35px" />
                </div>
                <div className="ml-5 lg:ml-6">
                    <Image src="/img/Linkedin.png" width="35px" height="35px" />
                </div>
            </div>
        </div>
        <div className={foot.sectionTwo}>
            <div className={foot.address}>
                <div className={foot.subTitle}>Address</div>
                <div className={foot.Text}>#2,Kewalchand Plaza,</div>
                <div className={foot.Text}>Ambalal Green City,</div>
                <div className={foot.Text}>Old Bye Pass Road,Vellore-632004</div>
                <div className={foot.Text}>compliance@ambalalshares.com</div>
                <div className={foot.Text}>(0416) 2227751-55, 2215022</div>
                <div className={foot.button}>Open Account</div>
            </div>


            <div className={foot.product}>
                <div className={foot.subTitle}>Mutual Funds</div>
                <div className={foot.Text}>Performance Tracking</div>
                <div className={foot.Text}>Scheme Information</div>
                <div className={foot.Text}>Best Performers</div>
            </div>
            <div className={foot.services}>
                <div className={foot.subTitle}>Announcements</div>
                <div className={foot.Text}>BSE Announcements</div>
                <div className={foot.Text}>NSE Announcements</div>
                <div className={foot.Text}>Board Meetings</div>
                <div className={foot.Text}>Change of Name</div>
            </div>
            <div className={foot.services}>
                <div className={foot.subTitle}>IPO</div>
                <div className={foot.Text}>Issue Profiles</div>
                <div className={foot.Text}>Basis of Allotment</div>
                <div className={foot.Text}>Forthcoming Issues</div>
            </div>
        </div>
        <div className={foot.sectionThree}>
            <div className={foot.copyright}>© 2020 All Rights Reserved ​</div>
            <div className="inline-flex text-white">
                <div className="mr-5"><Link href="/Privacy">Privacy Policy ​</Link></div>
                
                <div className="text-white">|</div>

                <div className="ml-5"><Link href="/Terms" className={foot.term}>Terms Of Use ​</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Footer