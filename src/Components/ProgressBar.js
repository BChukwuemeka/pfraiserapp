import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Progbar = Styled.div`
    progress {
        margin-right: 5px;

        
    }

    progress[value]{
        width: ${props => props.width}
    }
`;

const ProgressBar = props => {

    const {value, max, color, width} = props;

    return (
    <Progbar color= {color} width= {width}>
        <progress value = {value} max= {max} />
        
        <span>{(value / max) * 100}% Progress</span>
    </Progbar>
       
       )
    };

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string

};

ProgressBar.defaultProps = {
    max: 100,
    color: 'lightgreen',
    width: '200px'

    
};

export default ProgressBar;
