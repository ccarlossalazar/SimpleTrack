import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b 
        border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-center items-center">
                    <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={Logo} alt="logo"/>
                    <span className="text-xl tracking-tight">Simple Track</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar