import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import{ withRouter } from 'react-router-dom'
import formFields from "./formFields";
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const renderContents = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>

			<h5>Please Confirm Your Entries</h5>

			{renderContents}
			<div style={{ marginTop:'20px' }}>
			<button className="yellow darken-3 btn-flat white-text" onClick={() => onCancel()} >
				Back
			</button>

			<button className="green btn-flat right white-text" onClick={() => { 
				console.log(formValues)
				submitSurvey(formValues, history)
			} } >
				Send Survey
				<i className="material-icons right white-text"> email </i>
			</button>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions )(withRouter(SurveyFormReview));
