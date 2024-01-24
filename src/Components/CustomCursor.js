import React, { useState, useEffect } from 'react';
import '../myStyles/myStyles.css';

const CustomCursor = (props) => {
    const { customColor } = props;
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    // Check if the screen width is greater than a certain value (e.g., 768px for large screens)
    const isLargeScreen = window.innerWidth > 768;

    // Render the cursor only on large screens
    return isLargeScreen ? (
        <div className="custom-cursor" style={{ left: position.x, top: position.y, backgroundColor: customColor }} />
    ) : null;
};

export default CustomCursor;
