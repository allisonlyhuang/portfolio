import React from "react";



const FigmaDemo = ({ figmalink }) => {

    return (
        <div className="w-full flex justify-center">
            <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="100%"
                height="300"
                src={figmalink}
                allowFullScreen
                title="Figma Present Demo"
                loading="eager"
            />
        </div>
    );
};

export default FigmaDemo;
