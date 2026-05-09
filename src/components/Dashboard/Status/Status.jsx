import CardStatus from "../../ui/CardStatus/CardStatus";


function Status(){
    return(
        <>
        <section className="py-4">
<div className="container">
    <div className="row">
        <div className="col-12  col-md-3">
            <CardStatus counter="100" title="Users"></CardStatus>
            </div>
        <div className="col-12  col-md-3">
            <CardStatus counter="120" title="projects"></CardStatus>
            </div>
        <div className="col-12  col-md-3">
            <CardStatus counter="200" title="developer"></CardStatus>
            </div>
        <div className="col-12  col-md-3">
            <CardStatus counter="80" title="blogs"></CardStatus>
            </div>

        
    </div>
</div>
        
        
        </section>
        
        
        
        </>
    )
}

export default Status;