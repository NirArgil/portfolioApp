import './menu.scss';

export default function Menu({ setMenuOpen, menuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>

                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>

                {/* <li onClick={() =>setOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li> */}

                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
