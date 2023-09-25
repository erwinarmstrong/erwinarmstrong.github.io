import React from 'react';
import '../../../App.css'

function BottomBar({
    handleNext,
    handleBack,
}) {
    return (
        <div className='NOMADBottomBar'>
            <div className="NOMADNavButtons">
                <button className="NOMADButton" onClick={handleBack}>
                    Previous
                </button>
                <button className="NOMADButton" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default BottomBar;