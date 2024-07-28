import React from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const Slider = ({ type, subtype, steps, handleSize, onChange }) => {
  const handleSizeClass = handleSize === 'Size_24' ? 'handle-size-24' : 'handle-size-32';

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`slider-container ${type.toLowerCase()} ${subtype.toLowerCase()}`}>
      <input
        type="range"
        min={subtype === 'Range' ? 0 : undefined}
        max={subtype === 'Range' ? steps - 1 : undefined}
        step={type === 'Discreet' ? 1 : undefined}
        className={`slider ${handleSizeClass}`}
        onChange={handleChange}
      />
      {type === 'Discreet' && (
        <div className="slider-labels">
          {[...Array(steps)].map((_, index) => (
            <span key={index} className="slider-label">{index}</span>
          ))}
        </div>
      )}
    </div>
  );
};

Slider.propTypes = {
  type: PropTypes.oneOf(['Continuous', 'Discreet']).isRequired,
  subtype: PropTypes.oneOf(['Single', 'Range']).isRequired,
  steps: PropTypes.number,
  handleSize: PropTypes.oneOf(['Size_24', 'Size_32']).isRequired,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  steps: 10,
  onChange: null,
};

export default Slider;
