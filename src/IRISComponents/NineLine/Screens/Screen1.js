import FrequencyTable from '../InputTables/Frequency';
import LocationInputTable from '../InputTables/LocationInputTable'

function Screen1({
    setReturnedSelectedLocation,
    setReturnedSelectedFrequency,
}) {
    return (
        <div className="NineLineAppDiv">
            <table className='NineLineScreenTable'>
                <tbody>
                    <tr>
                        <td>
                            <LocationInputTable
                                setReturnedSelectedLocation={setReturnedSelectedLocation}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FrequencyTable
                                setReturnedSelectedFrequency={setReturnedSelectedFrequency}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Screen1;
