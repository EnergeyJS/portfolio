import React from 'react';

const Button = ({ type, value }) => {
    return (
        <React.Fragment>
            <div className="form-group">
                <input type={type} className="form-control btn btn-primary" value={value} />
            </div>
        </React.Fragment>
    )
}
export default Button;