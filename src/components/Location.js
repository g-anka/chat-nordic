function Location({ onLocation }) {

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const onSuccess = (pos) => {
            onLocation(pos.coords)
    }

    const onError = (err) => {
        console.log(err)
    }

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
    }

    return(
        <div>
            <button type="button" onClick={handleClick}>Определить координаты</button>
        </div>
    )
}

export default Location