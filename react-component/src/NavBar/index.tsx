
import './style.css'
import { useState } from 'react';

export default function NavBar()
{
    const [hamburgerOn, SetHambugerOn] = useState<boolean>(false);

    function HandleTouch () {
        SetHambugerOn( previousMode => !previousMode );
    }

    return (
        <nav className={hamburgerOn? "hamburgerOn" : ""}>

            <ul className="topbar">
                <li className="topbar-item"><a href="#">Item 1</a></li>
                <li className="topbar-item"><a href="#">Item 2</a></li>
                <li className="topbar-item"><a href="#">Item 3</a></li>
                <li className="topbar-item"><a href="#">Item 4</a></li>
                <li className="topbar-item"><a href="#">Item 5</a></li>
                <li className="topbar-item" onClick={HandleTouch}>
                    <svg viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </li>
            </ul>

            <ul className={"hamburger-menu"}>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
                <li><a href="#">Item 5</a></li>
            </ul>

        </nav>
    );
}
