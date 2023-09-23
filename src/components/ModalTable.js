import React from 'react';
import CBRComponent from '../IRISComponents/NOMAD/InputTables/CBRComponent'
import PCNComponent from '../IRISComponents/NOMAD/InputTables/PCNComponent'
import UnknownComponent from '../IRISComponents/NOMAD/InputTables/UnknownComponent'

const ModalTable = ({
    sendToModal,
}) => {



    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        This is the Default Modal Table
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ModalTable;