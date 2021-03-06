import React from 'react';
import { Formik, Form, Field } from 'formik';

// styles
import { ISignUpData } from 'shared/interfaces/ISignUpData';
import styles from './SignUpForm.module.css';

// validate
import SignUpSchema from '../../constants/validationSignUpSchema';

// types

export interface onSubmitAttributes extends ISignUpData {
    confirmPassword: string | undefined;
}

type SignUpFormProps = {
    onSubmit: (values: onSubmitAttributes) => void;
};

export default function SignUpForm({ onSubmit }: SignUpFormProps) {
    return (
        <div className={styles.signUpFormContainer}>
            <h1 className={styles.h1}>Signup</h1>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={SignUpSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={styles.defaultInputField}>
                            <label htmlFor="username">
                                <p>Username</p>
                                <Field name="username" />
                                {errors.username && touched.username && (
                                    <div className={styles.validationHint}>
                                        {errors.username}
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className={styles.defaultInputField}>
                            <label htmlFor="email">
                                <p>Email</p> <Field name="email" type="email" />
                                {errors.email && touched.email && (
                                    <div className={styles.validationHint}>
                                        {errors.email}
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className={styles.defaultInputField}>
                            <label htmlFor="password">
                                <p>Password</p>
                                <Field name="password" type="password" />
                                {errors.password && touched.password && (
                                    <div className={styles.validationHint}>
                                        {errors.password}
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className={styles.defaultInputField}>
                            <label htmlFor="confirmPassword">
                                <p>Confirm Password</p>
                                <Field name="confirmPassword" type="password" />
                                {errors.confirmPassword &&
                                    touched.confirmPassword && (
                                        <div className={styles.validationHint}>
                                            {errors.confirmPassword}
                                        </div>
                                    )}
                            </label>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <button
                                type="submit"
                                className={styles.submitButton}
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
