import Link from 'next/link'
function Navbar() {
    return (
        <nav className="w-full px-8 flex justify-between items-center py-3">
            <Link href="/hosting">
                <img src="../VivanteLogoColor.png" />
            </Link>

            <div className="space-x-10 text-sm font-medium text-offGray flex">
                <Link href="">
                    <h3>Today</h3>
                </Link>
                <Link href="">
                    <h3>Inbox</h3>
                </Link>
                <Link href="">
                    <h3>Calendar</h3>
                </Link>
                <Link href="">
                    <h3>Insights</h3>
                </Link>
                <h3>Menu</h3>
            </div>
            <div></div>

        </nav>
    )
}

export default Navbar