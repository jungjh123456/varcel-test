import client from "./client";
import { API } from "./restApi";

export const getProfileApi = ({ token }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return client.get(`${API}/personnels/users/`, headers);
};
export const getAppliedApi = ({ token }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return client.get(`${API}/services/applications/loggedin_user/`, headers);
};
export const getPaymentApi = ({ token }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return client.get(`${API}/services/payments/loggedin_user/`, headers);
};

export const reviewLIstApi = ({ token }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return client.get(`${API}/services/classes/reviews/loggedin_user/`, headers);
};

export const reviewPatchApi = ({ token, result }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = result;
  return client.post(`${API}/services/reviews/`, body, headers);
};

export const patchAPi = ({ token, name, result }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = result;
  return client.patch(`${API}/${name}`, body, headers);
};

export const getStudyInfo = ({ token, name }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return client.get(`${API}/${name}`, headers);
};
export const getStudyManageApi = ({ token, name }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return client.get(`${API}/classes/loggedin_user/`, headers);
};

export const alimegetApi = ({ token, name }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return client.get(`${API}/${name}`, headers);
};
