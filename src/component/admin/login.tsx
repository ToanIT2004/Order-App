'use client';
import { Form, Button } from 'react-bootstrap';
import styles from './login.module.css';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PiShoppingCartDuotone } from 'react-icons/pi';

export default function LoginAdminComponent() {
    const [formLogin, setFormLogin] = useState({ username: '', password: '' });
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formLogin.username.length === 0 || formLogin.password.length === 0) {
            toast.error('Vui lòng nhập đầy đủ thông tin!');
        } else {
            console.log('Form data:', formLogin);
        }
    };
    return (
        <div className={styles.loginContainer}>
            <Toaster position='top-right' />
            <div className={styles.loginCard}>
                <h3 className={`text-center ${styles.title}`}>Đăng nhập vào Order App</h3>
                <div className={styles.icon}>
                    <PiShoppingCartDuotone />
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className={styles.formGroup} controlId='username'>
                        <Form.Label className={styles.formLabel}>Tài khoản</Form.Label>
                        <Form.Control
                            className={styles.formControl}
                            name='username'
                            value={formLogin.username}
                            type='text'
                            placeholder='Nhập tài khoản'
                            onChange={(e) => setFormLogin({ ...formLogin, username: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId='password'>
                        <Form.Label className={styles.formLabel}>Mật khẩu</Form.Label>
                        <Form.Control
                            className={styles.formControl}
                            name='password'
                            value={formLogin.password}
                            type='password'
                            placeholder='Nhập tài khoản'
                            onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit' className={styles.submitButton}>
                        Đăng nhập
                    </Button>
                </Form>
            </div>
        </div>
    );
}
