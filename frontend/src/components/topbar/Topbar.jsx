import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({ open, setOpen }) {
    return (
        <div className={"topbar " + (open && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" >
                        <img src="/assets/logo3.png" alt="Logo123"/>
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+972 54 6334554</span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>Nir.argil@gmail.com</span>
                    </div>

                    <div className="itemContainer">
                        <GitHubIcon className="icon" />
                        <span>https://github.com/NirArgil</span>
                    </div>

                    <div className="itemContainer">
                        <LinkedInIcon className="icon" />
                        <span>LinkedIn</span>
                    </div>

                </div>

                <div className="right">
                        <div className="hamburger" onClick={() => setOpen(!open)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                </div>
            </div>
        </div>
    )
}
