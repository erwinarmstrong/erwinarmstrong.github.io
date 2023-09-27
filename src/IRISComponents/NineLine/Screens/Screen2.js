import NBCContamination from "../InputTables/NBCContamination";
import Nationality from "../InputTables/Nationality";
import PickUpSiteMarking from "../InputTables/PickUpSiteMarking";


function ScreenTemplate({
    setReturnedSelectedPickUpSiteMarking,
    setReturnedSelectedNationality,
    setReturnedSelectedNBCContamination,
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
                    <tr>
                        <NBCContamination
                            setReturnedSelectedNBCContamination={setReturnedSelectedNBCContamination}
                        />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ScreenTemplate;
