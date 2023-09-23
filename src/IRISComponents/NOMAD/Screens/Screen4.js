
import FuelType from '../InputTables/FuelTypeTable';
import MHEType from '../InputTables/MHETypeTable';
import SuitabilityCode from '../InputTables/SuitabilitiyCodeTable ';


function Screen4({
    setReturnedSelectedMHEType,
    setReturnedSelectedMHENumber,
    setReturnedSelectedFuelType,
    setReturnedSelectedFuelQty,
    setReturnedSelectedSuitabilityCode,
}) {
    return (
        <div className="NOMADAppDiv">
            <table className='NOMADScreenTable'>
                <tbody>
                    <tr>
                        <td>
                            <MHEType
                                setReturnedSelectedMHEType={setReturnedSelectedMHEType}
                                setReturnedSelectedMHENumber={setReturnedSelectedMHENumber}
                            />
                        </td>
                        <td>
                            <FuelType
                                setReturnedSelectedFuelType={setReturnedSelectedFuelType}
                                setReturnedSelectedFuelQty={setReturnedSelectedFuelQty}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <SuitabilityCode
                                setReturnedSelectedSuitabilityCode={setReturnedSelectedSuitabilityCode}
                            />

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Screen4;
