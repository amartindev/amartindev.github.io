import { useTranslation } from "react-i18next";
import "./Download.css";

export default function Download() {
    const { t } = useTranslation();

    const handleClick = () => {
        const cvLink = t("cv-link"); 
        if (cvLink) {
            setTimeout(()=>{
                window.open(cvLink, "_blank"); 
            },2500);
        }
    };

    return (
        <div className="container-download-button">
        <div className='container-download' onClick={handleClick}>
            <label className='label'>
                <input type='checkbox' className='input' />
                <span className='circle'>
                    <svg
                        className='icon'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='1.5'
                            d='M12 19V5m0 14-4-4m4 4 4-4'
                        ></path>
                    </svg>
                    <div className='square'></div>
                </span>
                <p className='titleCV'>CV</p>
                <p className='titleCV'>Open</p>
            </label>
        </div>
        </div>
    );
}
