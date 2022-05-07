import React from 'react';

const SpecErrorItem = ({ error }) => {
    return (
        <div className="error-wrapper">
            {!error ? null :
                <div>
                    <h4>{error.name}</h4>
                    <span className="message">{error.message}</span>
                </div>
            }
        </div>
    )
}
const Errors = ({ errors }) => {
    return (
        <pre className="errors-wrapper">
            <hgroup className="error">
                <h4 className="errors__title">Errors</h4>
            </hgroup>
            <div className="errors" style={{marginTop: 10}}>
                {errors.map((err, i) => {
                    return <SpecErrorItem key={i} error={err} />
                })}
            </div>
        </pre>
    )
}
const ErrorContainer = ({errors}) => {
    return (
        <div className="info">
            <div className="loading-container">
                <h4 className="title">Failed to load API definition.</h4>
                <Errors errors={errors}/>
            </div>
        </div>
    )
}

export default ErrorContainer;