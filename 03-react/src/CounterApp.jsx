import PropTypes from 'prop-types';
export const ConuterApp = ( { value } ) => {
    return (<>
        <h1>
            Counter App
        </h1>
        <h2>
            { value }
        </h2>
        <button>
            +1
        </button>
    </>)
}

ConuterApp.prototype = {
    value: PropTypes.number.isRequired,
}