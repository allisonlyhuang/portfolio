import React from 'react';
import '../css/gallery.css';

const Gallery = ({ images, activeTab, setActiveTab }) => {
    if (!images || images.length === 0) return null;

    const current = images[activeTab];

    return (
        <div className="gallery-container">
            <div className="pixel-frame">
                <div className="tab-bar">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <div className="image-container">
                    <div className="image-wrapper">
                        {current.type === 'video' ? (
                            <video
                                src={current.src}
                                className="gallery-video"
                                controls
                                autoPlay
                                muted
                                loop
                            />
                        ) : (
                            <img
                                src={current.src}
                                alt={`Gallery image ${activeTab + 1}`}
                                className="gallery-image"
                            />
                        )}
                        <div className="pixel-overlay" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
