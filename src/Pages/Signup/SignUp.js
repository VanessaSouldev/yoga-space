import React from 'react';
import styles from "./SignUp.module.css";
import axios from "axios";
import waters from "../../Components/assets/images/lilac-waters.jpg";
import {useForm} from 'react-hook-form';
import {Link, useHistory} from "react-router-dom";

function SignUp() {

    const {handleSubmit, formState: { errors }, register} = useForm();

    const history = useHistory();

        async function onFormSubmit(data) {
            try {
                await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                })

                history.push('/signin')
                ;
            } catch (e) {
                console.error("ERRORS",errors);
            }
        }


        return (
            <>

                <h4 className={styles["register-header"]}>At your own time in your own space</h4>
                <section id={styles["sign-up-form inner-content-container"]}>
                    <div className={styles["input-container"]}>

                        <img className={styles["rectangle-signup"]} src={waters} alt="lilac waters"/>

                        <form className={styles["signup-form"]} onSubmit={handleSubmit(onFormSubmit)}>

                            <div className={styles["form-container"]}>
                                <label htmlFor="email"><h5>E-mail</h5></label>
                                <input className={styles.input} type="email"
                                       placeholder="Your e-mail address" {...register("email", {
                                           required: {
                                               value: true,
                                               message: "Please enter your email address",
                                           },
                                           validate: (value) => value.includes('@') || 'Your email must contain the "@"-sign!',
                                       })}
                                />
                                {errors.email && <p className={styles["error-message"]}>{errors.email.message}</p>}
                                <label htmlFor="username">
                                    <h5>
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
                                {errors.username && <p className={styles["error-message"]}>{errors.username.message}</p>}

                                <label htmlFor="password"><h5>Password</h5></label>
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
                                {errors.password && <p className={styles["error-message"]}>{errors.password.message}</p>}
                            </div>
                            <button className={styles["signup-button"]} type="submit">
                                <h6>Register to create your SPACE</h6>
                            </button>
                        </form>
                    </div>
                </section>
                <footer>
                    <p className={styles["account-link"]}>Already have an account? You can <Link
                        to="/signin">Login</Link> here.</p>
                </footer>
            </>

        );
    }

export default SignUp;