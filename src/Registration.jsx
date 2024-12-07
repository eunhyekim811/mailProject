import React, {useState, useRef, useEffect} from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import './registration.css'

export default function Registration(){
    const navigate=useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');

    const [nameValid, setNameValid]=useState(false);
    const [emailValid, setEmailValid]=useState(false);
    const [birthValid, setBirthValid]=useState(false);
    const [genderValid, setGenderValid]=useState(false);
    const [notAllow, setNotAllow]=useState(true);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // 폼 제출 로직 추가 (예: 입력 데이터 검증)
    //     console.log("Form submitted:", { name, email, birth, gender });
    // };

    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
        if(value.length<2){
            setNameValid(false);
        }else{
            setNameValid(true);
        }
    }

    const handleEmail=(e)=>{
        const value = e.target.value;
        setEmail(value);
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(regex.test(value)){
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
    }
    const handleBirth=(e)=>{
        const value = e.target.value;
        setBirth(value);
        if(value.length==4){
            setBirthValid(true);
        }else{
            setBirthValid(false);
        }
    }
    const handleGender = (e) => {
        const value = e.target.value;
        setGender(value);
        if(value.length==0 || value.length>2){
            setGenderValid(false);
        }else{
            setGenderValid(true);
        }
        
    }

    const onClickConfirmBt=async()=>{
        console.log("Form submitted:", { name, email, birth, gender });
        navigate('/success');
    };

    useEffect(()=>{
        if(nameValid&&emailValid&&birthValid&&genderValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[nameValid,emailValid,birthValid,genderValid])

    return (
        <div className='regPage'>
        {/* <img className='regLogo' src="heart.png" alt="Heart"/> */}
        <div className='regWrap'>
            
            <div class='regTitleWrap'>등록</div>

            <div className='regInputWrap'>
                <input 
                    type='text'
                    className='regInput'
                    placeholder='이름'
                    value={name}
                    onChange={handleName}/>
            </div>  

            <div className='regErrorMessageWrap'>
                {name.length>0 && !nameValid &&(
                        <div>이름을 입력해주세요</div>
                    )
                }
            </div>  
            <div className='regInputWrap'>
                <input 
                    type='text'
                    className='regInput'
                    placeholder='이메일'
                    value={email}
                    onChange={handleEmail}/>
            </div>
            <div className='regErrorMessageWrap'>
                {!emailValid && email.length>0 &&(
                        <div>올바른 이메일을 입력해주세요</div>
                    )
                }
            </div>  
            <div className='regInputWrap'>
                <input 
                    type='number'
                    className='regInput'
                    placeholder='태어난 연도'
                    value={birth}
                    onChange={handleBirth}/>
            </div>
            <div className='regErrorMessageWrap'>
                    {
                    !birthValid && birth.length>0 &&(
                            <div>태어난 연도를 입력해주세요</div>
                        )
                    }
                </div>
            <div className='regInputWrap'>
                <select 
                    className='regInput'
                    value={gender}
                    onChange={handleGender}
                >
                    <option value="">성별 선택</option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </div>
            <div className='regErrorMessageWrap'>
                {!genderValid && gender.length>0 &&(
                        <div>올바른 성별을 입력해주세요</div>
                    )
                }  
            </div>
            <div>
                <button onClick={onClickConfirmBt} disabled={notAllow} className='regBt'>
                    완료
                </button>
            </div>
        </div>
    </div>
    );
}