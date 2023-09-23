
import WindDirectionOptionMap from '../InputTables/WindDirectionTable'
import WindVelocity from '../InputTables/WindVelocity';
import GustVelocity from '../InputTables/GustVelocity';
import TemperatureTable from '../InputTables/TemperatureTable';
import DewPointTable from '../InputTables/DewPointTable';
import AltimeterTable from '../InputTables/Altimeter';
import ARFFCategoryTable from '../InputTables/ARFFCategoryTable';
import CurrentOnGround from '../InputTables/CurrentOnGroundTable';
import ParkingMOG from '../InputTables/ParkingMOGTable';
import WorkingMOGTable from '../InputTables/WorkingMOGTable';
import MedLevelAvail from '../InputTables/MedLevelAvailTable';
import ITWCapability from '../InputTables/ITWCapabilityTable';

function Screen3({
    setReturnedSelectedWindDirection,
    setReturnedSelectedWindVelocity,
    setReturnedSelectedGustVelocity,
    setReturnedSelectedTemperature,
    setReturnedSelectedDewPoint,
    setReturnedSelectedAltimeter,
    setReturnedSelectedARFFCategory,
    setReturnedSelectedCurrentOnGround,
    setReturnedSelectedParkingMOG,
    setReturnedSelectedWorkingMOG,
    setReturnedSelectedMedLevelAvail,
    setReturnedSelectedITWCapability,

}) {
    return (
        <div className="NOMADAppDiv">
            <table className='NOMADScreenTable'>
                <tbody>
                    <tr>
                        <td>
                            <WindDirectionOptionMap
                                setReturnedSelectedWindDirection={setReturnedSelectedWindDirection}
                            />
                        </td>
                        <td>
                            <WindVelocity
                                setReturnedSelectedWindVelocity={setReturnedSelectedWindVelocity}
                            />
                        </td>
                        <td>
                            <GustVelocity
                                setReturnedSelectedGustVelocity={setReturnedSelectedGustVelocity}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TemperatureTable
                                setReturnedSelectedTemperature={setReturnedSelectedTemperature}
                            />

                        </td>
                        <td>
                            <DewPointTable
                                setReturnedSelectedDewPoint={setReturnedSelectedDewPoint}
                            />
                        </td>
                        <td>
                            <AltimeterTable
                                setReturnedSelectedAltimeter={setReturnedSelectedAltimeter}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ARFFCategoryTable
                                setReturnedSelectedARFFCategory={setReturnedSelectedARFFCategory}
                            />

                        </td>
                        <td>
                            <MedLevelAvail
                                setReturnedSelectedMedLevelAvail={setReturnedSelectedMedLevelAvail}
                            />
                        </td>
                        <td>
                            <ITWCapability
                                setReturnedSelectedITWCapability={setReturnedSelectedITWCapability}
                            />

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <CurrentOnGround
                                setReturnedSelectedCurrentOnGround={setReturnedSelectedCurrentOnGround}
                            />

                        </td>
                        <td>
                            <ParkingMOG
                                setReturnedSelectedParkingMOG={setReturnedSelectedParkingMOG}
                            />
                        </td>
                        <td>
                            <WorkingMOGTable
                                setReturnedSelectedWorkingMOG={setReturnedSelectedWorkingMOG}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Screen3;
