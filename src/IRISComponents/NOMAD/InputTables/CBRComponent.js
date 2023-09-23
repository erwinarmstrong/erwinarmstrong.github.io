import React from 'react';

const CBRComponent = ({
    CBRPCNSelectedLabel1,
    CBRPCNSelectedLabel2,
    CBRPCNSelectedLabel3,
    CBRPCNSelectedLabel4,
    CBRPCNSelectedLabel5,
    CBRPCNSelectedLabel6,}) => {
    return (
        <table className='EndScreenTable' border='1'>
            <tbody>
                <tr>
                    <td>
                        California Bearing Ration 1
                    </td>
                    <td>
                        {CBRPCNSelectedLabel1}
                    </td>
                </tr>
                <tr>
                    <td>
                        Layer 1
                    </td>
                    <td>
                        {CBRPCNSelectedLabel2}
                    </td>
                </tr>
                <tr>
                    <td>
                        California Bearing Ration 2
                    </td>
                    <td>
                        {CBRPCNSelectedLabel3}
                    </td>
                </tr>
                <tr>
                    <td>
                        Layer 2 
                    </td>
                    <td>
                        {CBRPCNSelectedLabel4}
                    </td>
                </tr>
                <tr>
                    <td>
                        California Bearing Ration 3
                    </td>
                    <td>
                        {CBRPCNSelectedLabel5}
                    </td>
                </tr >
                <tr>
                    <td>
                        Layer 3
                    </td>
                    <td>
                        {CBRPCNSelectedLabel6}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default CBRComponent;