import React, {useState} from 'react';
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';

import {
	fetchTest, getVideo
} from "../modules";

import {useDispatch}  from "react-redux";


function Test() {
    const dispatch = useDispatch();
    const [videoInfo, setVideoInfo] = useState({
        language: "",
        text: "",
        model: "",
        token: ""
    })
    const handleChange = e=>{
        e.preventDefault()
        const{name, value} = e.target;
        setVideoInfo({...videoInfo,[name]: value})
        console.log(videoInfo)
    }
    return (
        <div className={styles.container}>
        <Button onClick={()=>{
            dispatch(fetchTest())
        }}>1단계 : 토큰 얻기</Button>
        <hr/>
        <Button onClick={()=>{
            // dispatch(getVideo())
        }}>2단계 : 리스트 보기</Button>
        <hr/>
        <Button onClick={()=>{
            dispatch(getVideo(videoInfo))
        }}>3단계 : 영상 보기</Button>
        ko<input style={{width:"300px"}} type="text" name='language' onChange={handleChange} />
        안녕하세요<input style={{width:"300px"}} type="text" name='text' onChange={handleChange} />
        ysy<input style={{width:"300px"}} type="text" name='model' onChange={handleChange} />
        <input style={{width:"300px"}} type="text" name='token' onChange={handleChange} />
        <hr/>
        <video width="200"  controls>
            <source src="https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_a8d4cf2dbe8a094cc62a0a1e6a80cfc8.mp4"></source>
        </video>
        </div>        
    )
}
export default Test