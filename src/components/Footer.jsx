import { IoLogoGithub, IoLogoLinkedin, IoDesktopOutline } from "react-icons/io5";
import Container from "./utility/Container";

export default function Footer() {
    return (
        <footer className="mt-auto">
            <Container className="flex items-center justify-between py-10">
                <div>&copy; 2024 - Aaron Latham</div>
                <div className="flex items-center gap-5">
                    <a href="https://github.com/latham91" target="_blank" rel="noreferrer">
                        <IoLogoGithub size="2em" />
                    </a>
                    <a href="https://www.linkedin.com/in/aaron-latham-164a9b29b/" target="_blank" rel="noreferrer">
                        <IoLogoLinkedin size="2em" />
                    </a>
                    <a href="https://aaronlatham.dev" target="_blank" rel="noreferrer">
                        <IoDesktopOutline size="2em" />
                    </a>
                </div>
            </Container>
        </footer>
    );
}
