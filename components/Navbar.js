import React from 'react';
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div>
            <Link href={'/'}>
                <a className={styles.logo}>
                    <Image
                        src={'/img/jeep.png'}
                        layout="intrinsic"
                        alt="Picture of the author"
                        width={500}
                        height={500}/>
                </a>
            </Link>
            <div className="bx bx-menu" id={'menu-icon'}></div>
            <ul className="navbar">
                <li><Link  href="/#home"><a>Home</a></Link></li>
                <li><Link  href="/#ride"><a>Ride</a></Link></li>
                <li><Link  href="/#services"><a>Services</a></Link></li>
                <li><Link  href="/#about"><a>About</a></Link></li>
                <li><Link  href="/#reviews"><a>Reviews</a></Link></li>
            </ul>
            <div className="header-btn">
                <button className="btn btn-primary">Register</button>
                <button className="btn btn-primary">Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;