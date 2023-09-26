import PickUpSiteMarking from "../InputTables/PickUpSiteMarking";


function ScreenTemplate({
    setReturnedSelectedPickUpSiteMarking,
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
                </tbody>
            </table>
        </div>
    );
}

export default ScreenTemplate;
