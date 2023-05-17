import { Qualification } from "../../resources/data/qualifications"

export const Result = (props: {data: Qualification}) => {
    return(
        <div className="result">
            <h4>{props.data.title}</h4>
            <div className="textArea">
                <div className="origin">
                    <h5>From: </h5>
                    <p>{props.data.organization}</p>
                </div>
                <div className="date">
                    <h5>Date:</h5>
                    <p>{props.data.date}</p>
                </div>
            </div>
            <div className="description">
                <h5>Description: </h5>
                <p>{props.data.summary}</p>
            </div>
            <img src={require(`../../resources/media/${props.data.image}`)} />
            {props.data.certificate && <div className='buttonContainer'>
                <a href={require(`../../resources/certificates/`+props.data.certificate)} target="_blank">
                <button className='viewCert'>View Certificate
                </button>
                </a>
            </div>}
        </div>
    )
}