import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import { solarzuContext } from "../components/layout";
import { useContext } from "react";

const NavBar = (props) => {
  const {connectWallet, connected ,disconnect} = useContext(solarzuContext);

  return (
    <nav className="flex  justify-between items-center  bg-navcolor w-full relative ">
      <div className="m-1 p-2 ml-16">
        <Link href="/">
          <Image
            className="rounded-xl"
            src="https://res.cloudinary.com/krotcloud/image/upload/v1658551558/Logo_Main_nrupg8.jpg"
            alt="logo"
            height={80}
            width={160}
            priority={true}
          />
        </Link>
      </div>
      <div className="w-6/12 mx-3 relative ">
        <ul className="flex flex-row justify-between items-center text-white text-2xl mr-3 p-1 ">
          <li className={styles.brd}>
            <Link href="/">
              <a className="align-center">Home</a>
            </Link>
          </li>
          <li className={styles.brd}>
          <Link href="https://siddhantsidjlama.gitbook.io/solarzu/" priority={true}>
            <a target="_blank">Documentation</a>
          </Link>
        </li>
            <li className={styles.brd}>
              <Link href="/checkout">
                <a>Checkout</a>
              </Link>
            </li>
          {/* {props.home ? 
            : 
            <li className={styles.brd}>
            <div>
                  {
                    !connected ?
                    <button onClick = {connectWallet}>Connect</button>
                    :
                    <button onClick={disconnect}>Connected</button>
                  }
                </div>
            </li>
          } */}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
