import client from "./client";
import { API } from "./restApi";

export const appliedApi = ({ result, id, token }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = result;
  return client.patch(`${API}/services/applications/${id}/`, body, headers);
};
export const appliedFirstApi = ({ result, token }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ` + token,
    },
  };
  const body = result;
  return client.post(`${API}/services/applications/`, body, headers);
};

export const twinAppliedApi = ({ result, id, token }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = result;
  return client.post(`${API}/services/applications/twins/?id=${id}`, body, headers);
};
export const getAppliedApi = ({ token, id }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return client.get(`${API}/services/applications/${id}/`, headers);
};

export const postCureLoggedApi = ({ token, id, result }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = result;
  return client.post(`${API}/services/diagnosishistories/?application_id=${id}`, body, headers);
};

export const synchronizeTwin = ({ token, id, twinId }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // const body = result;
  return client.patch(`${API}/services/applications/${twinId}/synchronize_twins/?first_child_id=${id}`, "", headers);
};
export const postPaymentApi = ({ token, result }) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = result;
  return client.post(`${API}/services/payments/`, body, headers);
};
