import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Input, Icon, Button, Alert } from 'antd'
import { effectActionTypes } from '../../models/allEffectActionTypes'

import './index.less'
import avatarImg from '../../assets/avatar.png'


const FormItem = Form.Item

const Login = ({
    form,
    dispatch,
}) => {
    const history = useHistory()

    const [isShow, updateIsShow] = useState('none')

    const handleSubmit = () => {
        form.validateFields((errors, values) => {
            if (!errors) {
                dispatch({ type: effectActionTypes.DEPT_CREATE_REQUESTED })
                console.warn('Login Info: ', values)
                const { username, password } = values;
                if (username === 'Diviner' && password === '123456') {
                    history.push('/admin')
                } else {
                    updateIsShow('inherit')
                }
            }
        })
    }

    return (
        <div className={'loginBox'}>
            <img className={'avatarImg'} src={avatarImg} alt={'头像'} />
            <h3>欢迎登录</h3>
            <Alert
                style={{display: isShow}}
                className={'loginError'}
                message="用户名或密码不正确"
                type="error"
                showIcon
            />
            <Form className={'loginForm'}>
                <FormItem>
                    {
                        form.getFieldDecorator('username', {
                            initialValue: 'Diviner',
                            rules: [
                                { required: true, message: '请输入用户名' }
                            ]
                        })(
                            <Input
                                placeholder={'用户名'}
                                size={'large'}
                                prefix={<Icon type={'user'} />}
                            />
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        form.getFieldDecorator('password', {
                            initialValue: '123456',
                            rules: [
                                { required: true, message: '请输入密码' }
                            ]
                        })(
                            <Input.Password
                                placeholder={'密码'}
                                size={'large'}
                                prefix={<Icon type={'lock'} />}
                            />
                        )
                    }
                </FormItem>
                <Button
                    style={{ width: '100%', borderRadius: '20px' }}
                    type={'primary'}
                    size={'large'}
                    onClick={handleSubmit}
                >登录</Button>
            </Form>
        </div>
    )
}


export default connect()(Form.create()(Login))