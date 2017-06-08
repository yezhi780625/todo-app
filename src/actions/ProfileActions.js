import fetch from 'isomorphic-fetch';
export const FETCH_PROFILE_INIT = 'FETCH_PROFILE_INIT';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAIL = 'FETCH_PROFILE_FAIL';
import Profile from "../data/profile.json";
export const getProfile = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_PROFILE_INIT });
        fetch('http://www.json-generator.com/api/json/get/cdHIbzQUde?indent=2')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                try {
                    return response.json();
                } catch (error) {
                    return Profile;
                }
            })
            .then(function (profile) {
                dispatch({ type: FETCH_PROFILE_SUCCESS, profile: profile });
            }).catch(function (error) {
                dispatch({ type: FETCH_PROFILE_SUCCESS, profile: Profile });
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    };
};