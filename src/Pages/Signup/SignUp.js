import React from 'react';
import styles from "./SignUp.module.css";
import axios from "axios";
import waters from "../../Components/assets/images/lilac-waters.jpg";
import { useForm } from 'react-hook-form';
import {Link, useHistory} from "react-router-dom";

function SignUp()   {

    const { register, handleSubmit } = useForm();

    const history = useHistory();

    async function onFormSubmit(data) {
        try {
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                username:data.username,
                email:data.email,
                password:data.password,
            })

            history.push('/signin')
            ;
            console.log(data);
        } catch(e) {
            console.error(e);
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
                        <input className={styles.input} type="email" placeholder="Your e-mail address" {...register("email")}/>
                        <label htmlFor="username"><h5>Username</h5></label>
                        <input className={styles.input} type="text" placeholder="Please choose a username"  {...register("username")}/>
                        <label htmlFor="password"><h5>Password</h5> </label>
                        <input className={styles.input} type="password" placeholder="Choose a password" {...register("password")}/>

                        </div>
                        <button className={styles["signup-button"]} type="submit">
                            <h6>Register to create your SPACE</h6>
                        </button>
                    </form>
                </div>
                </section>
            <footer>
                <p className={styles["account-link"]}>Already have an account? You can <Link to="/signin">Login</Link> here.</p>
            </footer>
        </>

    );
}

export default SignUp;