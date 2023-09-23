import React from 'react';

const PCNComponent = ({
    CBRPCNSelectedLabel1,
    CBRPCNSelectedLabel2,
    CBRPCNSelectedLabel3,
    CBRPCNSelectedLabel4,
    CBRPCNSelectedLabel5,
    CBRPCNSelectedLabel6,}) => {
    return (
        <table border='1' className='EndScreenTable'>
            <tbody>
                <tr>
                    <td>
                        Pavement Classification Number
                    </td>
                    <td>
                        {CBRPCNSelectedLabel1}{CBRPCNSelectedLabel2}
                    </td>
                </tr>
                <tr>
                    <td>
                        Pavement Type
                    </td>
                    <td>
                        {CBRPCNSelectedLabel3}
                    </td>
                </tr>
                <tr>
                    <td>
                        Subgrade Strength 
                    </td>
                    <td>
                        {CBRPCNSelectedLabel4}
                    </td>
                </tr>
                <tr>
                    <td>
                        Tire Pressure
                    </td>
                    <td>
                        {CBRPCNSelectedLabel5}
                    </td>
                </tr >
                <tr>
                    <td>
                        Method of PCN Determination
                    </td>
                    <td>
                        {CBRPCNSelectedLabel6}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default PCNComponent;