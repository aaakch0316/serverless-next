import { useRef } from "react";
import Button from "./Button";

const CrudAdd = ({createOrUpdateCard}) => {
    const formRef = useRef();
    const checkIdRef = useRef();
    const isCheckRef = useRef();
    const contentRef = useRef();
    const alertTimeRef = useRef();
    const mp4UrlRef = useRef();

    const onSubmit = event => {
        console.log(event);
        event.preventDefault();
        const card = {
            checkIdRef: Date.now(), //uuid
            isCheck: isCheckRef.current.value || false,
            content: contentRef.current.value,
            alertTime: alertTimeRef.current.value || '',
            mp4Url: mp4UrlRef.current.value || '',
        };
        formRef.current.reset();
        createOrUpdateCard(card);
    };
    return (
        <form ref={formRef} >
            <input
                ref={isCheckRef}
                type="text"
                name="isCheck"
                placeholder="isCheck"
            />
            <input
                ref={contentRef}
                type="text"
                name="content"
                placeholder="content"
            />
            <input
                ref={alertTimeRef}
                type="text"
                name="alertTime"
                placeholder="alertTime"
            />
            <input
                ref={mp4UrlRef}
                type="text"
                name="mp4Url"
                placeholder="mp4Url"
            />
            <Button name="Add" onClick={onSubmit} />
        </form>
    )
}

export default CrudAdd;