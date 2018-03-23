import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

export const fetchUser = () => async dispatch => {
	const r = await axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: r.data });
};

export const handleToken = token => async dispatch => {
	const r = await axios.post('/api/stripe', token)
	dispatch({ type:FETCH_USER, payload:r.data })
}

export const submitSurvey = (values, history) => async dispatch =>  {
	const r = await axios.post('/api/surveys', values)
	history.push('/surveys')
	dispatch({ type: FETCH_USER, payload: r.data })
}

export const fetchSurveys = ()=> async dispatch => {
	const r = await axios.get("/api/surveys")
	dispatch({type: FETCH_SURVEYS, payload: r.data})
}