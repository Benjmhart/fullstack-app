import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys()
    }
    
    renderSurveys() {
        return this.props.surveys.reverse().map( x => {
            return (
                <div className="card blue-grey darken-1" key={x._id} >
                    <div className="card-content white-text">
                        <span className="card-title">
                            {x.title}
                        </span>
                        <p>{x.body}</p>
                        <p>Sent On: {new Date(x.dateSent).toLocaleDateString()}</p>
                        <div className="card-action">
                            <a>Yes: {x.yes}</a>
                            <a>No: {x.no}</a>
                        </div>
                    </div>            
                </div>
            )
        })
    }



    render() {
        return (<div>{this.renderSurveys()}</div>)
    }
}

function mapStateToProps({surveys}) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)