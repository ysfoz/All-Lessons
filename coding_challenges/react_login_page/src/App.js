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

const handleChangefirstN = e => setFirstName(e.target.value)

const handleChangeLastN = e => setLastName(e.target.value)

const handleChangeEmail = e => setEmail(e.target.value)

const handleChangePassword = e => setPassword(e.target.value)

const handleConfirm = e => setConfirmPassword(e.target.value) 

const changeCheck = () => setChecked(s => !s)

const letters = /^[0-9a-zA-Z,'@','.']+$/;
const SignList = ['!','#','$','%','^','*','+','-','~',]

const checkPassword = () => {
  const checkList = []
  for(let i = 0 ; i < password.length;i++){
    if(password[i] == password[i].toLowerCase()){
      checkList.push(password[i])
    }
    if(password[i] == password[i].toUpperCase()){
      checkList.push(password[i])
    }
    if(isNaN(password[i])) {
      checkList.push(password[i])
    }
    if(password[i] in SignList){
      checkList.push(password[i])
    }
  }
  return  checkList.length < 4 ? true : false
}


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
else if(checkPassword) {
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
        onClick={allControl}
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
