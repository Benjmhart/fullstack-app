import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
	const r = await axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: r.data });
};

export const handleToken = (token) => async dispatch => {
	const r = await axios.post('/api/stripe', token)
	dispatch({ type:FETCH_USER, payload:r.data })
}