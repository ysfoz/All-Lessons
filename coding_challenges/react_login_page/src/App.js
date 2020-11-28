import { useState } from 'react'
import {
  StyledButton,
  StyledContainer,
  StyledInput,
  Styledform,
  StyledCheck,
  StyledSpan,
  Styledh1
} from "./App.style.js";

function App() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [isChecked,setChecked] = useState()
  const [isPassTrue,setPass] = useState()
console.log(isPassTrue)
const handleChangefirstN = e => setFirstName(e.target.value)

const handleChangeLastN = e => setLastName(e.target.value)

const handleChangeEmail = e => setEmail(e.target.value)

const handleChangePassword = e => setPassword(e.target.value)

const handleConfirm = e => setConfirmPassword(e.target.value) 

const changeCheck = () => setChecked(s => !s)

const letters = /^[0-9a-zA-Z,'@','.']+$/;
const SignList = ['!','#','$','%','^','*','+','-','~',]

const checkPassword = () => {
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      counter3 += 1;
    } else if (SignList.includes(password[i])) {
      counter4 += 1;
    } else if (password[i] === password[i].toLowerCase()) {
      counter1 += 1;
    } else if (password[i] === password[i].toUpperCase()) {
      counter2 += 1;
    }
  }
  console.log(
    "sayi :",
    counter3,
    "buyuk :",
    counter2,
    "kucuk:",
    counter1,
    "isaret:",
    counter4
    );
    (counter1 < 1 || counter2 < 1 || counter3 < 1 || counter4 < 1) ? setPass(true) : setPass(false);
};
// 1234Qw!2  1234QWERasdf!@#$

const allControl = () => {
if (!firstName || !lastName || !email || !password || !confirmPassword || !isChecked) {
  alert('All Areas muss be filled')
}else if(password !== confirmPassword) {
  alert('Passwords not match')
}else if (email.indexOf('.') !== (email.length - 3) && email.indexOf('.') !== (email.length - 4)) {
alert('invalid email adress(.)')
}else if(!email.match(letters)){
  alert('invalid charecters in email')
}else if(!email.includes('@',1) || email.indexOf('@') >  email.length - 5 ){
  alert('invalid email(@)')
}else if (password.length < 8){
  alert('please enter minimum 8 character for password')
}
else if(isPassTrue) {
  alert('you muss enter capital letter and lowercase letters and minimum one special character')
}
}

  return (
    <StyledContainer>
      <Styledh1>Welcome to Home</Styledh1>
      <Styledform>
        <StyledInput 
        type="text" 
        name="firstName" 
        placeholder='First Name'
        value={firstName.value}
        onChange ={handleChangefirstN}
        />
        
        <StyledInput 
        type="text" 
        name="LastName" 
        placeholder='Last Name'
        value={lastName.value}
        onChange ={handleChangeLastN}
        />

        <StyledInput 
        type="email" 
        name="email" 
        placeholder='Email Adress'
        value={email.value}
        onChange ={handleChangeEmail}
        />

        <StyledInput 
        type="password" 
        name="password" 
        placeholder='Password'
        value={password.value}
        onChange ={handleChangePassword}
        minlength="8"
        />

        <StyledInput 
        type="password" 
        name="confirm" 
        placeholder='Confirm Password'
        value={confirmPassword.value}
        onChange ={handleConfirm}
        />

        <StyledButton
        type='submit'
        onClick={() => {
                      allControl()
                      checkPassword()
                    }}
        >Register
        </StyledButton>


        <label>
        <StyledCheck
        type="checkbox" 
        name="accept" 
        checked= {isChecked}
        onClick = {changeCheck}
        />
        <StyledSpan>I accept the Privacy Policy</StyledSpan>
        </label>
      </Styledform>
      <p>Already have an account? Login.</p>
    </StyledContainer>
  );
}

export default App;
