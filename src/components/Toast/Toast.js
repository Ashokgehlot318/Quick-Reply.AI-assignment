import React from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

const Toast = ({
  type,
  message,
  icon,
  iconVisible,
  swapIcon,
  divider,
  action,
  closeAction,
  closeActionEnabled,
  position,
  editText,
}) => {
  return (
    <div className={`toast ${type} ${position}`}>
      {iconVisible && <div className={`toast-icon ${swapIcon ? 'swap-icon' : ''}`}>{icon}</div>}
      <div className="toast-content">
        {editText && <div className="toast-edit-text">{editText}</div>}
        <div className="toast-message">{message}</div>
        {divider && <div className="toast-divider" />}
        {action && <button className="toast-action" onClick={action}>Action</button>}
        {closeActionEnabled && <button className="toast-close" onClick={closeAction}>Close</button>}
      </div>
    </div>
  );
};

Toast.propTypes = {
  type: PropTypes.oneOf(['information', 'warning', 'alert', 'success']).isRequired,
  message: PropTypes.string.isRequired,
  icon: PropTypes.element,
  iconVisible: PropTypes.bool,
  swapIcon: PropTypes.bool,
  divider: PropTypes.bool,
  action: PropTypes.func,
  closeAction: PropTypes.func,
  closeActionEnabled: PropTypes.bool,
  position: PropTypes.oneOf(['mobile', 'desktop']),
  editText: PropTypes.string,
};

Toast.defaultProps = {
  icon: null,
  iconVisible: true,
  swapIcon: false,
  divider: false,
  action: null,
  closeAction: null,
  closeActionEnabled: false,
  position: 'desktop',
  editText: '',
};

export default Toast;
