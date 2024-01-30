import { Link } from "react-router-dom";
import Container from "./utility/Container";

export default function Navbar() {
    return (
        <header>
            <Container>
                <nav className="flex items-center justify-between py-5">
                    <div className="text-4xl font-extrabold">
                        <Link to="/">
                            aaron<span className="text-accent">.ai</span>
                        </Link>
                    </div>
                    <div>
                        <button className="px-4 py-2 transition-colors duration-300 ease-in-out rounded-lg bg-accent hover:bg-hover">
                            <Link to="/create">Create</Link>
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
