import React from 'react';
import PropTypes from 'prop-types';
import './ProgressStep.css';

const ProgressStep = ({ steps, currentStep, layout, controlType }) => {
  return (
    <div className={`progress-step-container ${layout}`}>
      {steps.map((step, index) => (
        <div key={index} className={`progress-step ${index <= currentStep ? 'active' : ''}`}>
          <div className={`progress-step-control ${controlType}`}>
            {controlType === 'number' ? index + 1 : <div className="line" />}
          </div>
          <div className="progress-step-details">
            <div className="step-name">{step.name}</div>
            <div className="step-description">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

ProgressStep.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  currentStep: PropTypes.number.isRequired,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  controlType: PropTypes.oneOf(['line', 'number']),
};

ProgressStep.defaultProps = {
  layout: 'horizontal',
  controlType: 'line',
};

export default ProgressStep;
