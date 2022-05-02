import react from 'react';
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';

import {
	fetchTest
} from "../modules";

import {useDispatch}  from "react-redux";


function Test() {
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
        <Button onClick={()=>{
            // alert('asdf')
            dispatch(fetchTest())
        }}>1단계</Button>
        <Button onClick={()=>{
            // alert('asdf')
            dispatch(fetchTest())
        }}>2단계</Button>
        <video  controls>
            <source src="https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_a8d4cf2dbe8a094cc62a0a1e6a80cfc8.mp4" type="application/x-mpegURL"></source>
        </video>
        </div>        
    )
}
export default Test