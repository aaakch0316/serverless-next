import { useRef } from "react";
import Button from './Button'

const CrudEdit = ({testData, createOrUpdateCard, deleteCard}) => {
    const checkIdRef = useRef();
    const isCheckRef = useRef();
    const contentRef = useRef();
    const alertTimeRef = useRef();
    const mp4UrlRef = useRef();
    const {
        checkId,
        isCheck,
        content,
        alertTime,
        mp4Url
    } = testData

    const onChange = event => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        createOrUpdateCard({
            ...testData,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };
    
    const onSubmit = () => {
        deleteCard(testData);
    };
    return (
        <form>
            <input
                type="text"
                name="isCheck"
                ref={isCheckRef}
                value={isCheck}
                onChange={onChange}
            />
            <input
                type="text"
                name="content"
                ref={contentRef}
                value={content}
                onChange={onChange}
            />
            <input
                type="text"
                name="alertTime"
                ref={alertTimeRef}
                value={alertTime}
                onChange={onChange}
            />
            <input
                type="text"
                name="mp4Url"
                ref={mp4UrlRef}
                value={mp4Url}
                onChange={onChange}
            />
            <Button name="Delete" onClick={onSubmit} />
        </form>
    )
}

export default CrudEdit;