
import DistanceAvailable from '../InputTables/DistanceAvailable';
import LocationTable from '../InputTables/LocationTable'
import RWYInUse from '../InputTables/RWYInUse';
import RWYMaterialTable from '../InputTables/RWYMaterialTable';
import RWYWidth from '../InputTables/RWYWidth';
import RWYMarking from '../InputTables/RWYMarking'
import VisibilityDistance from '../InputTables/VisibilityDistance';
import CeilingType from '../InputTables/CeilingType';
import CeilingAltitudeTable from '../InputTables/CeilingAltitudeTable';
import FrequencyTable from '../InputTables/Frequency';

function Screen1({
    setReturnedSelectedLocations,
    setReturnedSelectedRWYInUse,
    setReturnedSelectedRWYWidth,
    setReturnedSelectedDistanceAvailable,
    setReturnedSelectedRWYMaterials,
    setReturnedSelectedRWYMarking,
    setReturnedSelectedVisibilityDistance,
    setReturnedSelectedCeilingType,
    setReturnedSelectedCeilingAltitude,
    setReturnedSelectedFrequency,

}) {
    return (
        <div className="NOMADAppDiv">
            <table className='NOMADScreenTable'>
                <tbody>
                    <tr>
                        <td colSpan='2'>
                            <LocationTable
                                setReturnedSelectedLocations={setReturnedSelectedLocations}
                            />
                        </td>
                        <td>
                            <RWYInUse
                                setReturnedSelectedRWYInUse={setReturnedSelectedRWYInUse}
                            />
                        </td>
                        <td>
                            <RWYWidth
                                setReturnedSelectedRWYWidth={setReturnedSelectedRWYWidth} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <DistanceAvailable
                                setReturnedSelectedDistanceAvailable={setReturnedSelectedDistanceAvailable}
                            />
                        </td>
                        <td colSpan='2'>
                            <RWYMaterialTable
                                setReturnedSelectedRWYMaterials={setReturnedSelectedRWYMaterials}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <RWYMarking
                                setReturnedSelectedRWYMarking={setReturnedSelectedRWYMarking}
                            />
                        </td>
                        <td>
                            <VisibilityDistance
                                setReturnedSelectedVisibilityDistance={setReturnedSelectedVisibilityDistance}
                            />
                        </td>
                        <td>
                            <CeilingType
                                setReturnedSelectedCeilingType={setReturnedSelectedCeilingType}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='3'>
                            <FrequencyTable
                                setReturnedSelectedFrequency={setReturnedSelectedFrequency}
                            />
                        </td>
                        <td>
                            <CeilingAltitudeTable
                                setReturnedSelectedCeilingAltitude={setReturnedSelectedCeilingAltitude}

                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Screen1;
