import Image from "next/image";
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className="flex w-full p-5 justify-between bg-white">
      {/* left side logo */}
      <div className="flex space-x-6 items-center text-purple-900 text-lg cursor-pointer px-12">
        <Image src="/img/logo.png" height={37} width={157} />
        <div className="flex space-x-6 items-center px-12">
        <p>About</p>
        <p>Pricing</p>
        <p>Discovery</p>
        <p>Contact</p>
        <p>Products</p>
        </div>
      </div>

      {/* menu items */}
      <div className="flex space-x-6 items-center px-12">
      <button className="bg-purple-700 hover:bg-transparent hover:text-purple-700 border hover:border-purple-700 text-white font-bold py-2 px-6 rounded">
  SignIn
</button>
        <button class="bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-6 border border-purple-700 hover:border-transparent rounded animate-bounce">
          SignUp
        </button>
       
      </div>
      
    </header>
  );
}

export default Navbar;
