import React, {useState, useRef, useEffect} from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import './success.css'

export default function Success(){
    const navigate=useNavigate();

    return (
        <div className='successPage'>
            <div className='successWrap'>
                <div class='successTitleWrap'>등록 성공</div>
                <div class='subTitleWrap'>건강검진 항목에 대해 이메일로 알려드립니다!</div>
            </div>
        </div>
    );
}