import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'

const FIELDS = [
    { label:"Survey Title", name:"title" },
    { label:"Subject", name:"subject" },
    { label:"Body", name:"body" },
    { label:"Recipient list", name:"recipients" }
]

class SurveyForm extends Component {
    renderFields() {
        return FIELDS.map( (field) => {
                return <Field type="text" {...field} component={SurveyField} key={field.name} />
        })

    }

    render() {
        return(
            <div>
                <form 
                onSubmit={this.props.handleSubmit( values => console.log(values) )}
                >
                    {this.renderFields()}
                    <Link className="red btn-flat white-text" to="/surveys">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text" >
                    Next
                    <i className="material-icons right" >done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
const errors = {}
errors.recipients = validateEmails(values.recipients) || ""
_.each(FIELDS, ({ name }) => {
    if(!values[name]){errors[name]=`You must provide a ${name}`}
    
})
return errors
}


export default reduxForm({
    validate,
    form:'surveyForm'
})(SurveyForm)