import fetch from 'isomorphic-fetch';
export const FETCH_PROFILE_INIT = 'FETCH_PROFILE_INIT';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAIL = 'FETCH_PROFILE_FAIL';

export const getProfile = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_PROFILE_INIT });
        fetch('//localhost:7788/CMS/api/profile.php')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (profile) {
                dispatch({ type: FETCH_PROFILE_SUCCESS,profile:profile});
            });
    };
};