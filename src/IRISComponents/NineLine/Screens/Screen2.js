import Nationality from "../InputTables/Nationality";
import PickUpSiteMarking from "../InputTables/PickUpSiteMarking";


function ScreenTemplate({
    setReturnedSelectedPickUpSiteMarking,
    setReturnedSelectedNationality,
}) {
    return (
        <div className="NineLineAppDiv">
            <table className='NineLineScreenTable'>
                <tbody>
                    <tr>
                        <td>
                            <PickUpSiteMarking
                                setReturnedSelectedPickUpSiteMarking={setReturnedSelectedPickUpSiteMarking}
                            />
                        </td>
                    </tr>
                    <tr>
                        <Nationality
                            setReturnedSelectedNationality={setReturnedSelectedNationality}
                        />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ScreenTemplate;
