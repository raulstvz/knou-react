const validationPassword = (password) => {
    const res = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return res.test(String(password).toLowerCase());
}
