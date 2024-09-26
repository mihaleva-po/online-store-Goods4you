import styles from './login.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import DefaultButton from "../ui-components/button/defaultButton.tsx";
import {useLoginUserMutation} from "../../redux/services/loginUser.ts";
import {useAuth} from "../../context/AuthContext.tsx";
import {useNavigate} from "react-router-dom";


const validationSchema = Yup.object({
    login: Yup.string()
        .required('Required field')
        .min(4, 'The login must contain at least 4 characters')
        .max(50, 'The login must contain no more than 50 characters'),

    password: Yup.string()
        .required('Required field')
        .min(6, 'The password must contain at least 6 characters')
        .max(60, 'The password must contain no more than 60 characters'),
});

interface FormValues {
    login: string;
    password: string;
}

const Login = () => {

    const {setUser} = useAuth();

    const navigate = useNavigate();
    const [loginUser, {isLoading, error}] = useLoginUserMutation();

    const handleSubmit = async (values: FormValues) => {
        try {
            const response = await loginUser({
                username: values?.login,
                password: values?.password,
                expiresInMins: 30,
            }).unwrap();

            localStorage.setItem('token', response.token);

            setUser({
                id: response.id, firstName: response.firstName,
                lastName: response.lastName
            });

            navigate('/');

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
