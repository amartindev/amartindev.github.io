import ContactForm from "../Shared/ContactForm/ContactForm";
import { useTranslation } from "react-i18next";
import "./Contact.css";

export default function Contact() {
    const { t } = useTranslation();
    const contactData = t("contact", { returnObjects: true }) as Record<
        string,
        string
    >;
    return (
        <div className='container-contact' id="contact">
            <h2 className='contact-title'>{contactData["contact"]}</h2>
            <div className='contact'>
                <div className='left-contact'>
                    <h3 className='left-contact-title'>
                        {contactData["title"]}
                    </h3>
                    <p className='left-contact-text'>{contactData["text"]}</p>
                    <div className='contact-data'>
                        <div
                            className='contact-item'
                            onClick={() => {
                                window.location.href =
                                    "mailto:amartindev02@gmail.com";
                            }}
                        >
                            <div className='contact-item-icon'>
                                <i className='bi bi-envelope-at'></i>
                            </div>
                            <div className='contact-item-content'>
                                <h4 className='contact-item-title'>
                                    {contactData["email-me"]}
                                </h4>
                                <h5 className='contact-item-text'>
                                    amartindev02@gmail.com
                                </h5>
                            </div>
                            <div className='contact-item-arrow'>
                                <i className='bi bi-arrow-up-right-circle'></i>
                            </div>
                        </div>
                        <div
                            className='contact-item'
                            onClick={() =>
                                window.open(
                                    "https://wa.me/573192079215",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                        >
                            <div className='contact-item-icon'>
                                <i className='bi bi-whatsapp'></i>
                            </div>
                            <div className='contact-item-content'>
                                <h4 className='contact-item-title'>Whatsapp</h4>
                                <h5 className='contact-item-text'>
                                    +57 319 207 9215
                                </h5>
                            </div>
                            <div className='contact-item-arrow'>
                                <i className='bi bi-arrow-up-right-circle'></i>
                            </div>
                        </div>
                        <div
                            className='contact-item'
                            onClick={() =>
                                window.open(
                                    "https://github.com/amartindev",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                        >
                            <div className='contact-item-icon'>
                                <i className='bi bi-github'></i>
                            </div>
                            <div className='contact-item-content'>
                                <h4 className='contact-item-title'>GitHub</h4>
                                <h5 className='contact-item-text'>
                                    @amartindev
                                </h5>
                            </div>
                            <div className='contact-item-arrow'>
                                <i className='bi bi-arrow-up-right-circle'></i>
                            </div>
                        </div>
                        <div
                            className='contact-item'
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/amartindev/",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                        >
                            <div className='contact-item-icon'>
                                <i className='bi bi-linkedin'></i>
                            </div>
                            <div className='contact-item-content'>
                                <h4 className='contact-item-title'>LinkedIn</h4>
                                <h5 className='contact-item-text'>
                                    @amartindev
                                </h5>
                            </div>
                            <div className='contact-item-arrow'>
                                <i className='bi bi-arrow-up-right-circle'></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='right-contact'>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
}
