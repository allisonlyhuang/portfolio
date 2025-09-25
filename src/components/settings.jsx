import '../css/settings.css';
import settings_icon from '../assets/buttons/settings.svg';
import unpressed_button from '../assets/buttons/unpressed button.png';
import { useHover } from '../context/hover';
import { useOverlay } from '../context/overlay';

function Settings({ handleClick }) {
    const { setHoverText } = useHover();
    const { openOverlay } = useOverlay();

    const onButtonClick = () => {
        handleClick(() => openOverlay('settings'));
    };

    return (
        <div className="box">
            <div className="buttoncontainer">
                <button
                    className="buttonwhole"
                    onClick={onButtonClick}
                    onMouseEnter={() => setHoverText("Settings")}
                    onMouseLeave={() => setHoverText('Hover over items to interact')}
                >
                    <img src={unpressed_button} className="buttonbg" alt="Button background" />
                    <img src={settings_icon} className="buttonicon" alt="Settings" />
                </button>
            </div>
        </div>
    );
}

export default Settings;