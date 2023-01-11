const REACT_APP_BASE_URL = "https://apiticketupcode.up.railway.app/api/";
const ACTIONS_TYPES = {
  GET_USER_DATA: "GET_USER_DATA",
};
const API = {
  USER_LOGUIN: "",
  USER_REFRESH_TOKEN: "",
  USER_LOGOUT: "",
  USER_DATA: "get_user_ID/1",
  USER_FORGOT_PASSWORD: "",
  USER_RESET_PASSWORD: "",
  USER_SIGN_UP: "",
  USER_MAIL_VALIDATION: "",
  USER_NOTIFICATIONS: "",
  AREAS: "",
  AREA_ADD: "",
  FUNCTIONS: "",
  FUNCTIONS_ADD: "",
  CATEGORIES: "",
  CATEGORIES_ADD: "",
  CRITICALITY: "",
  CRITICALITY_ADD: "",
  TICKETS: "",
  TICKETS_BY_ID: "",
  TICKET_ADD: "",
  COMMENTS: "",
  COMMENTS_ADD: "",
  RESOLUTIONS: "",
  RESOLUTIONS_ADD: "",
  ASIGGMENTS: "",
  ASIGGMENTS: "",
};
const GENDERS = [
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Prefer not to say",
    label: "Prefer not to say",
  },
];

export { REACT_APP_BASE_URL, API, GENDERS, ACTIONS_TYPES };
