function Navbar() {
    const [state, setState] = useState({ data: "" })
    const changeState = () => {
        setState({ data: `experiences` });
    };
    return (
        <nav className="bg-black h-16 flex justify-around items-center w-full text-offWhite absolute">
            <div className="w-1/6">
                <img alt="VIVANTE LOGO" src="./logo.png" width="150" />
            </div>
            <div className="w-2/6 text-center space-x-5">
                <button  >Place to Stay</button>
                <button onClick={changeState}>Experiences</button>
                <button>Online Experiences</button>
            </div>
            <div className="w-80 flex justify-evenly items-center">
                <button className="font-[600]">Become a Host</button>
                <img width="30" src="./language.png" />
                <img width="80" src="./breadcrumb.png" />
            </div>
        </nav>
    )
}

export default Navbar