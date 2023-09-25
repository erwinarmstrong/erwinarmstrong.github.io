import React, { useState, useEffect } from 'react';
import NOMADModalTable from '../components/ModalTables/NOMADModalTable'
import '../IRISComponents/NOMAD/NOMAD.css'


const ModalTable = ({ sendToModal }) => {
    const [outputTable, setOutputTable] = useState(null);

    useEffect(() => {
        switch (sendToModal.substring(0, 2)) {
            case 'AA':
                setOutputTable(
                    <div className='ModalTabel'>
                        <table className='ModalTabel'>
                            <tbody>
                                <tr>
                                    <td>
                                        <div style={{ textAlign: 'center' }}>NOMAD Table</div></td>
                                </tr>
                                <tr>
                                    <NOMADModalTable
                                        fileContent={sendToModal} />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
            case 'AB':
                setOutputTable(
                    <table>
                        <tbody>
                            <tr>
                                <td>9line Table</td>
                            </tr>
                        </tbody>
                    </table>
                );
                break;
            default:
                setOutputTable(null);
        }
    }, [sendToModal]);

    return (
        <div className='EndScreenTable'>
            <table className='EndScreenTable' style={{ background: '#004400' }}>
                <tbody>
                    <tr>
                        <td>
                            {outputTable}
                            <div style={{ textAlign: 'center' }}>{sendToModal}</div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};

export default ModalTable;
