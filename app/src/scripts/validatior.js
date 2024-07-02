const validatePassword =(password)=>{ //!the function will return empty if valid/errrorMessage if not
    if (password.length < 4 || password.length > 8) {
      return "Password must be between 4 and 8 chars";
    }
    let hasCapitalLetter = false;
    let hasSymbol = false;
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?"; //!symbols
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
      if (char >= "A" && char <= "Z") hasCapitalLetter = true;
      if (symbols.includes(char)) hasSymbol = true;
    }
    if (!hasCapitalLetter || !hasSymbol) {
      return "Password must include one capital letter and one symbol";
    }
    return "";
  }
const validateBalance = (balance)=>{
    if (balance<=0 || balance>100000) return "balance deposit must be betwen 1-100000"
    return ""
}
const validateUsername = (username,Users = null)=>{
    if (!username.trim()) return "Username is required";
    if (Users){
    const exist = Users.find((user) => user.username === username); //look for dups
    if (exist) return "Username already exist, pls choose another";}
    return ""
}
export {validateUsername,validatePassword,validateBalance}