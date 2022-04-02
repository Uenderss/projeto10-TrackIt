export const API_URL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

export function CREATE_USER(body) {
  return {
    url: API_URL + "/auth/sign-up",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "appication/json",
      },
      body:JSON.stringify(body),
    },
  };
}
export function FAZER_LOGIN(body) {
    return {
      url: API_URL + "/auth/sign-up",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "appication/json",
        },
        body:JSON.stringify(body),
      },
    };
  }
  
export function CRIAR_HABITO(token){
    return {
        url: API_URL + "/habits",
        options: {
          method: "POST",
          headers: {
            Authorization:'Bearer'+ token,
          },
        },
      };
}

export function DESMARCAR_HABITO(id,token){
    return {
        url: API_URL + `habits/${id}/check`,
        options: {
          method: "POST",
          headers: {
            Authorization:'Bearer'+ token,
          },
        },
      };
}

export function MARCAR_HABITO(id,token){
    return {
        url: API_URL + `habits/${id}/uncheck`,
        options: {
          method: "POST",
          headers: {
            Authorization:'Bearer'+ token,
          },
        },
      };
}

export function LISTAR_HABITO(token){
    return {
        url: API_URL + "/habits",
        options: {
          method: "GET",
          headers: {
            Authorization:'Bearer'+ token,
          },
        },
      };
}
export function HISTORICO_HABITOS(token){
    return {
        url: API_URL + "/habits/history/daily",
        options: {
          method: "GET",
          headers: {
            Authorization:'Bearer'+ token,
          },
        },
      };
}

export function BUSCAR_HABITOS(token){
    return {
        url: API_URL + "/habits/today",
        options: {
          method: "GET",
          headers: {
            Authorization:'Bearer'+ token,
          },
        },
      };
}

export function EXCLUIR_HABITO(token,id){
    return {
        url: API_URL + `habits/${id}`,
        options: {
          method: "DELETE",
          headers: {
            Authorization:'Bearer'+ token,
          },
        },
      };
}