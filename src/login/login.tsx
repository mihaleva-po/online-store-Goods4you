import styles from './login.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import DefaultButton from "../components/ui-components/button/defaultButton.tsx";
import {useLoginUserMutation} from "../redux/services/loginUser.ts";
import {useCart} from "../context/CartContext.tsx";


const validationSchema = Yup.object({
    login: Yup.string()
        .required('Обязательное поле')
        .min(4, 'Логин должен содержать не менее 4 символов')
        .max(50, 'Логин должен содержать не более 50 символов'),

    password: Yup.string()
        .required('Обязательное поле')
        .min(6, 'Пароль должен содержать не менее 6 символов')
        .max(60, 'Пароль должен содержать не более 60 символов'),
});

interface FormValues {
    login: string;
    password: string;
}

const Login = () => {

    const [loginUser, {isLoading, error}] = useLoginUserMutation();
    const {setUserId} = useCart();

    const handleSubmit = async (values: FormValues) => {
        try {
            const response = await loginUser({
                username: values.login,
                password: values.password,
                expiresInMins: 30,
            }).unwrap();

            setUserId(response.id);

            localStorage.setItem('userId', response.id.toString());
            localStorage.setItem('token', response.token);

        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <section className={styles.login}>
            <div className={styles.container}>
                <h1>Sign in</h1>
                <Formik
                    initialValues={{login: '', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className={styles.form}>
                        <div>
                            <Field className={styles.input}
                                   placeholder={"Login"}
                                   type="text"
                                   id="login"
                                   name="login"
                            />
                            <ErrorMessage className={styles.error} name="login" component="div"/>
                        </div>
                        <div>
                            <Field className={styles.input}
                                   placeholder={"Password"}
                                   type="password"
                                   id="password"
                                   name="password"
                            />
                            <ErrorMessage className={styles.error} name="password" component="div"/>
                        </div>
                        <div className={styles.containerBtn}>
                            <DefaultButton type={"submit"} text={"Sign in"} disabled={isLoading}/>
                        </div>
                        {error && <div className={styles.error}>Incorrect username or password</div>}
                    </Form>
                </Formik>
            </div>
        </section>
    );
};

export default Login;
