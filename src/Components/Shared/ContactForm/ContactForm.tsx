import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import "./ContactForm.css";
interface FormInputs {
    name: string;
    email: string;
    message: string;
}

export const ContactForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const { t } = useTranslation();
    const formData = t("contact.form.0", { returnObjects: true }) as Record<string, string>;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        setIsLoading(true);
        setSuccessMessage("");

        emailjs
            .send(
                "service_p8jedvw",
                "template_yii4bc8",
                data as unknown as Record<string, unknown>,
                "XltUYzY7WWUoMwjf-"
            )
            .then(() => {
                setIsLoading(false);
                setSuccessMessage(formData["success-message"]);
                reset();
                setTimeout(() => setSuccessMessage(""), 5000); // Oculta el mensaje después de 5s
            })
            .catch((err) => {
                console.error("Error:", err);
                setIsLoading(false);
                setSuccessMessage(formData["error"]);
            });
    };

    return (
        <div className='container-form'>
            <div className='contact-container'>
                <h2>{formData["send"]}</h2>

                {successMessage && (
                    <p className='success-message'>{successMessage}</p>
                )}

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='contact-form'
                >
                    <div className='input-container'>
                        <input
                            {...register("name", {
                                required: formData["req-name"],
                            })}
                            placeholder= {formData["name"]}
                        />
                        {errors.name && (
                            <span className='error'>{errors.name.message}</span>
                        )}
                    </div>

                    <div className='input-container'>
                        <input
                            {...register('email', {
                                required: formData["req-mail"],
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: formData["req-mail"],
                                },
                            })}
                            placeholder={formData["email"]}
                        />
                        {errors.email && (
                            <span className='error'>
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className='input-container'>
                        <textarea
                            {...register("message", {
                                required: formData["req-message"],
                            })}
                            placeholder={formData["message"]}
                        ></textarea>
                        {errors.message && (
                            <span className='error'>
                                {errors.message.message}
                            </span>
                        )}
                    </div>

                    <button
                        className='button-contact-form'
                        type='submit'
                        disabled={isLoading}
                    >
                        {isLoading ? formData["sending"] : formData["submit"]}
                    </button>
                </form>
            </div>
        </div>
    );
};

