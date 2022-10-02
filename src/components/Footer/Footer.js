import {useEffect} from "react";

function Footer() {
    useEffect(() => {
        const handleClick = () => {
            console.log('click');
        }
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div style={{ color: 'white' }}>example@yandex.ru</div>
    )
}

export default Footer;