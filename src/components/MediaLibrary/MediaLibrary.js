import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MediaLibrary.css';

const MediaLibrary = ({ media, onDelete }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newMedia = files.map(file => ({
      name: file.name,
      type: file.type.split('/')[0],
      url: URL.createObjectURL(file),
    }));
    setSelectedFiles(newMedia);
  };

  const handleDelete = (name) => {
    if (onDelete) onDelete(name);
  };

  return (
    <div className="media-library">
      {media.concat(selectedFiles).map((item, index) => (
        <div key={index} className="media-item">
          {item.type === 'image' && <img src={item.url} alt={item.name} />}
          {item.type === 'video' && <video src={item.url} controls />}
          <div>{item.name}</div>
          <button onClick={() => handleDelete(item.name)}>Delete</button>
        </div>
      ))}
      <label className="add-media-button">
        +
        <input
          type="file"
          className="add-media-input"
          multiple
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

MediaLibrary.propTypes = {
  media: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  onDelete: PropTypes.func,
};

MediaLibrary.defaultProps = {
  media: [],
  onDelete: null,
};

export default MediaLibrary;
