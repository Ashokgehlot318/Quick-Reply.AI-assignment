import React from 'react';
import PropTypes from 'prop-types';
import './SegmentControl.css';

const SegmentControl = ({ labels, activeIndex, onChange, visibleLabelsCount, activeState }) => {
  const startIndex = Math.max(0, Math.min(activeIndex - Math.floor(visibleLabelsCount / 2), labels.length - visibleLabelsCount));
  const visibleLabels = labels.slice(startIndex, startIndex + visibleLabelsCount);

  return (
    <div className="segment-control">
      {visibleLabels.map((label, index) => {
        const actualIndex = startIndex + index;
        return (
          <div
            key={actualIndex}
            className={`segment-label ${activeIndex === actualIndex ? 'active' : ''} ${activeState ? 'active-state' : ''}`}
            onClick={() => onChange(actualIndex)}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

SegmentControl.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  visibleLabelsCount: PropTypes.number,
  activeState: PropTypes.bool,
};

SegmentControl.defaultProps = {
  visibleLabelsCount: 3,
  activeState: true,
};

export default SegmentControl;
