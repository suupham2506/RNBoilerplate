import { get, post } from './common'
export default {
    signIn: (phone, password) => {
        return post('/user/signin', { phone, password })
    },
    signUp: (name, password, access_token) => {
        return post('/user/signup', { access_token, password, name })
    },
    createOTPToken: (phone) => {
        return get('/otp/create-otp-token', { phone })
    },
    verifyOTPToken: (otp) => {
        return get('/otp/verify-otp-token', { otp })
    },
    checkExistUser: (phone) => {
        return get('/user/check-existed-user', { phone })
    },
    changePassword: (oldPassword, newPassword) => {
        return post('/user/change-password', { oldPassword, newPassword })
    },
    verifyPin: (pinNumber) => {
        return post('/user/verify-pin', {pinNumber})
    }
}