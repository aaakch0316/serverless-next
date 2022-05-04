import { useState } from 'react';
import Crud from '../../components/Crud';

function CrudPage() {
     const [testData, setTestData] = useState({
        1: {
            checkId : 1,
            isCheck: false,
            content: "할머니 약먹을 시간" ,
            alertTime : '2022/02/11 18:00',
            mp4Url : 'https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_a8d4cf2dbe8a094cc62a0a1e6a80cfc8.mp4'
        },
        2: {
            checkId : 2,
            isCheck: false,
            content: "할머니 식사 시간" ,
            alertTime : '2022/02/11 18:00',
            mp4Url : 'https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_a8d4cf2dbe8a094cc62a0a1e6a80cfc8.mp4'
        },
        3: {
            checkId : 3,
            isCheck: false,
            content: "할머니 저녁 시간" ,
            alertTime : '2022/02/11 18:00',
            mp4Url : 'https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_a8d4cf2dbe8a094cc62a0a1e6a80cfc8.mp4'
        }
     })
    const createOrUpdateCard = card => {
        setTestData(testData => {
            const updated = { ...testData };
            updated[card.checkId] = card;
            return updated;
        });
    };

    const deleteCard = card => {
        setTestData(testData => {
            const updated = { ...testData };
            delete updated[card.checkId];
            return updated;
        });
    };
    return (
        <Crud
            testData={testData}
            createOrUpdateCard={createOrUpdateCard}
            deleteCard={deleteCard}
        />
    )
}

export default CrudPage