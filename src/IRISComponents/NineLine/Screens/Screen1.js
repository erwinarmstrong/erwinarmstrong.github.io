import PatientType from "../InputTables/PatientType";
import Precedence from "../InputTables/Precedence";
import SiteSecurity from "../InputTables/SiteSecurity";
import SpecialEquipmentRequired from "../InputTables/SpecialEquipmentRequired";
function Screen1({
    setReturnedSelectedPrecedence,
    setReturnedSelectedSpecialEquipmentRequired,
    setReturnedSelectedPatientType,
    setReturnedSelectedSiteSecurity
}) {
    return (
        <div className="NineLineAppDiv">
            <table className='NineLineScreenTable'>
                <tbody>
                    <tr>
                        <Precedence
                            setReturnedSelectedPrecedence={setReturnedSelectedPrecedence}
                        />
                        <td>
                            <SpecialEquipmentRequired
                                setReturnedSelectedSpecialEquipmentRequired={setReturnedSelectedSpecialEquipmentRequired}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <PatientType
                                setReturnedSelectedPatientType={setReturnedSelectedPatientType}
                            />
                        </td>
                        <td>
                            <SiteSecurity
                                setReturnedSelectedSiteSecurity={setReturnedSelectedSiteSecurity}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Screen1;
