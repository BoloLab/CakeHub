import Link from "next/link";

export function Header (){
    return(
        <header className="flex px-2 p-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
                <div className="text-center mb-2 font-bold text-2xl">
                    CakeHub
                </div>
                <nav>
                    <ul className="flex items-center justify-center gap-2"> 
                        <li>
                            <Link href='/'>
                            Home
                            </Link>    
                        </li>
                        <li>
                            <Link href='/posts'>
                            Posts
                            </Link>    
                        </li>
                        <li>
                            <Link href='/dashboard'>
                            Dashboard
                            </Link>    
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}