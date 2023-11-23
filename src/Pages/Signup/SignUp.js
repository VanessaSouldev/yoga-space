import React from 'react';
import styles from "./SignUp.module.css";
import axios from "axios";
import waters from "../../assets/images/lilac-waters.jpg";
import {useForm} from 'react-hook-form';
import {useHistory} from "react-router-dom";
import Button from "../../Components/Button/Button";
import LinkParagraph from "../../Components/Navigation/LinkParagraph/LinkParagraph";

function SignUp() {

    const { handleSubmit, formState: { errors }, register } = useForm();

    const history = useHistory();

        async function handleFormSubmit(data) {
            try {
                await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                })

                history.push('/signin');

            } catch (e) {

            }
        }


        return (
            <>

                <h4 className={styles["register-header"]}>At your own time in your own space</h4>
                <section id={styles["sign-up-form inner-content-container"]}>
                    <div className={styles["input-container"]}>

                        <img className={styles["rectangle-signup"]} src={waters} alt="lilac waters"/>

                        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles["signup-form"]} >

                            <div className={styles["form-container"]}>
                                <label htmlFor="email">
                                    <h5 className={styles["input-name"]}>
                                        E-mail
                                    </h5>
                                </label>
                                <input className={styles.input} type="email"
                                       placeholder="Your e-mail address" {...register("email", {
                                           required: {
                                               value: true,
                                               message: "Please enter your email address",
                                           },
                                           validate: (value) => value.includes('@') || 'Your email must contain the "@"-sign!',
                                       })}
                                />
                                {errors.email && <p className={styles["error-message-sign-up"]}>{errors.email.message}</p>}
                                <label htmlFor="username">
                                    <h5 className={styles["input-name"]}>
                                        Username
                                    </h5>
                                </label>
                                <input className={styles.input}
                                       type="text"
                                       id="input-username"
                                       placeholder="Please choose a username"  {...register("username", {
                                           required: {
                                               value: true,
                                               message: "Please fill in a username to continue",
                                           },
                                           maxLength: {
                                               value: 18,
                                               message: "Your username cannot be longer than 18 characters",
                                           },
                                       })}
                                />
                                {errors.username && <p className={styles["error-message-sign-up"]}>{errors.username.message}</p>}

                                <label htmlFor="password">
                                    <h5 className={styles["input-name"]}>
                                        Password
                                    </h5>
                                </label>
                                <input className={styles.input} type="password"
                                       placeholder="Choose a password"
                                       {...register("password", {
                                        required: {
                                        value: true,
                                        message: "Please fill in a password to continue",
                                        },
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters long",
                                        },
                                })}
                                />
                                {errors.password && <p className={styles["error-message-sign-up"]}>{errors.password.message}</p>}
                            </div>
                            <Button
                            type={"submit"}
                            className={"register-sign-up-submit-button"}
                            clickHandler={handleSubmit}>
                                <h6>Register to create your SPACE</h6>
                            </Button>
                        </form>
                    </div>
                </section>
                <footer>
                    <p className={styles["account-link-paragraph"]}>Already have an account? You can
                        <LinkParagraph
                            path={"/signin"}>
                            Login
                        </LinkParagraph>
                        here
                    </p>
                </footer>
            </>

        );
    }

export default SignUp;