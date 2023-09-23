
import CBRPCNTable from '../InputTables/CBRPCNTable'
import RCRTable from '../InputTables/RCRTable'
import RFFTable from '../InputTables/RFFTable'

function Screen2({
    setReturnedSelectedCBRPCNTable,
    setReturnedSelectedCBRPCNOptions,
    setReturnedSelectedRCR,
    setReturnedSelectedRFF,
}) {
    return (
        <div className="NOMADAppDiv">
            <table className='NOMADScreenTable'>
                <tbody>
                    <tr>
                        <td colSpan='2'>
                            <CBRPCNTable
                                setReturnedSelectedCBRPCNTable={setReturnedSelectedCBRPCNTable}
                                setReturnedSelectedCBRPCNOptions={setReturnedSelectedCBRPCNOptions}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <RCRTable
                                setReturnedSelectedRCR={setReturnedSelectedRCR}
                            />
                        </td>
                        <td>
                            <RFFTable
                                setReturnedSelectedRFF={setReturnedSelectedRFF}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Screen2;
