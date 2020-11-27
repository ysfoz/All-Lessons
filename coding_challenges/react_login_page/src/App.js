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

const allControl = () => {
if (!firstName || !lastName || !email){
  alert('hop')
}
}
// Check first name that it should not be empty.
// 2. Check last name that it should not be empty.
// 3. Check the email address that it should not be empty and has "@" and also has two or three
// letter extension(like .co or .com ).
// 4. Check the password that it should not be empty and has numbers, capital letter and
// lowercase letters and minimum one special character( .!? .etc) and minimum 8 characters.
// 5. Check the password is match with the password confirmation field.
// 6. Check privacy policy is checked.
// If pass the all validations, user click the register button and alert Reg stered Succesfully!
// otherwise will alert what's the wrong!
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
