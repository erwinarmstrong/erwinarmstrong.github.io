import React from 'react';
import '../../../App.css'

function BottomBar({
    handleNext,
    handleBack,
}) {
    return (
        <div className='NineLineBottomBar'>
            <div className="NineLineNavButtons">
                <button className="NineLineButton" onClick={handleBack}>
                    Previous
                </button>
                <button className="NineLineButton" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default BottomBar;