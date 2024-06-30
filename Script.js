function generatePassword() {
    const length = document.getElementById('length').value;
    if (length < 1) {
        document.getElementById('result').innerText = "Password length should be at least 1";
        return;
    }
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    document.getElementById('result').innerText = `Generated Password: ${password}`;
}
