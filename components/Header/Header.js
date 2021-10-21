import head from './Header.module.css';
const Header = () => {
  return (
    <div >
        <div className={head.headerPattern} >E</div>
        <div className={head.headertext}>
            <div className={head.headerTextUpper} >njoy Tech</div>
            <div className={head.headerTextLower} >njoy Investing</div>
        </div>
        <div className={head.button}>Discover</div>
        <div className={head.headerImage}></div>
    </div>
  )
}

export default Header
