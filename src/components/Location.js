import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner' //импортируется только спиннер, так лучше с большими библиотеками
//import { Spinner } from 'react-bootstrap' // { } - импортируется всё, сейчас возьми спиннер
import Button from 'react-bootstrap/Button'

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}
function Location({ onChange, value }) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const onSuccess = (pos) => {
        setLoading(false)
        onChange(pos.coords)
    }

    const onError = (err) => {
        setLoading(false)
        console.log(err)
    }

    const handleClick = () => {
        setLoading(true)
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
    }

    return(
        <div>
            <Button
                type="button"
                onClick={handleClick}
                variant="outline-primary"
            >{value ? 'Координаты определены' : 'Определить координаты'}
                {loading && (
                    <Spinner
                        className="ms-2"
                        animation="border"
                        size="small"
                        variant="primary"
                    />
                )}
                {value && <span className="ms-2">✅</span>}
                {!value && !loading && <span className="ms-2">❌</span>}
            </Button>
        </div>
    )
}

export default Location