import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/fcb.png" width={60} height={37}/>
            </div>
            <div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Listing</a></Link>
            </div>
        </nav>
     );
}
 
export default NavBar;