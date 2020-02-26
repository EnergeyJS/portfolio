import React from 'react'

const TextareaInput = ({ onChange, placeholder, value }) => {
    return (
        <React.Fragment>

            <div className="form-group">
                <textarea name="" id="" className="form-control" onChange={(e) => onChange(e.target.value)} value={value} cols="30" rows="10" placeholder={placeholder}></textarea>
            </div>

        </React.Fragment>
    )
}
export default TextareaInput