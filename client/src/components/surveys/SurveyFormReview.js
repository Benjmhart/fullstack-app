import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues }) => {
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
			<button className="yellow darken-3 btn-flat" onClick={() => onCancel()}>
				back
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
