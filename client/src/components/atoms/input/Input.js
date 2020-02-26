import React from 'react'

const Input = ({ onChange, placeholder, type, value = null }) => {
    return (
        <React.Fragment>

            <div className="form-group">
                <input type={type} onChange={(e) => onChange(e.target.value)} className="form-control" placeholder={placeholder} aria-describedby="helpId" value={value} />
            </div>

        </React.Fragment>
    )
}
export default Input