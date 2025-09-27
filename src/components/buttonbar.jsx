import '../css/buttonbar.css';
import home_icon from '../assets/buttons/home.svg';
import info_icon from '../assets/buttons/info.svg';
import link_icon from '../assets/buttons/link out.svg';
import mail_icon from '../assets/buttons/mail.svg';
import unpressed_button from '../assets/buttons/unpressed button.png';
import { useHover } from '../context/hover';
import { useOverlay } from '../context/overlay';

const DEFAULT_DESCRIPTION_TEXT = 'Hover over items to interact';

function ButtonBar({ handleClick }) {
    const { setHoverText } = useHover();
    const { openOverlay } = useOverlay();

    const buttonItems = [
        {
            bg: unpressed_button,
            icon: home_icon,
            hoverText: 'Return to Start',
            onClick: () => openOverlay('home')
        },
        {
            bg: unpressed_button,
            icon: info_icon,
            hoverText: 'About Me',
            onClick: () => openOverlay('info')
        },
        /* {
            bg: unpressed_button,
            icon: link_icon,
            hoverText: 'My Resumes',
            onClick: () => openOverlay('links')
        }, */
        {
            bg: unpressed_button,
            icon: mail_icon,
            hoverText: 'Contact Me',
            onClick: () => openOverlay('mail')
        }
    ];

    return (
        <div className="bar">
            {buttonItems.map((item, index) => (
                <div className="button-container" key={index}>
                    <button
                        className="button_whole"
                        onClick={() => handleClick(item.onClick)}
                        onMouseEnter={() => setHoverText(item.hoverText)}
                        onMouseLeave={() => setHoverText(DEFAULT_DESCRIPTION_TEXT)}
                    >
                        <img src={item.bg} className="button-background" alt="Button background" />
                        <img src={item.icon} className="button-icon" alt={item.hoverText} />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ButtonBar;