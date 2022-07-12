import { useState, useRef, useEffect } from 'react'
import { FormControl } from 'react-bootstrap'
import api from '../helpers/api'

function FileUpload({ onUpload, value }) {
    const [loading, setLoading] = useState(false)
    const fileRef = useRef()

    useEffect(() => {
        if(!value) {
            fileRef.current.value = null
        }
    }, [value])

    const handleChange = async (event) => {
        const formData = new FormData()
        formData.append('file', event.target.files[0])
        setLoading(true)
        const response = await api.post('/upload', formData)
        setLoading(false)

        if (response.data.fileURL) {
            onUpload(response.data.fileURL)
        }
    }

    return (
        <>
            <FormControl
                disabled={loading}
                type="file"
                onChange={handleChange}
                ref={fileRef}
            />
            {value && "✅"}
        </>

    )
}

export default FileUpload