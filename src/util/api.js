import axios from 'axios';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

 //CRUD DE PRODUCTOS
export const registrarProductos = async (data, successCallback, errorCallback) => {
    const options = {
      method: 'POST',
      url: 'https://boiling-temple-06719.herokuapp.com/productos',
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

export	const obtenerProductos = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: 'https://boiling-temple-06719.herokuapp.com/productos',
  headers:{
    Authorization: getToken()
  },
  };
    await axios.request(options).then(successCallback).catch(errorCallback);
        
};

export const editarProducto= async (id,data,successCallback, errorCallback)=>{

  const options = {
      method: 'PATCH',
      url: `https://boiling-temple-06719.herokuapp.com/productos/${id}`,
      headers: {'Content-Type': 'application/json', Authorization: getToken()},
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);

  };

export const eliminarProducto= async (id,successCallback, errorCallback)=>{
    const options = {
      method: 'DELETE',
      url: `https://boiling-temple-06719.herokuapp.com/productos/${id}/`,
      headers: {'Content-Type': 'application/json', Authorization: getToken()},
    
    };
      await axios.request(options).then(successCallback).catch(errorCallback);
  
    };

/*
//CRUD DE USUARIOS 

export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: 'https://boiling-temple-06719.herokuapp.com/usuarios' ,
    headers:{
      Authorization: getToken(),
    }
  };
    await axios.request(options).then(successCallback).catch(errorCallback)
  };

  export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: 'https://boiling-temple-06719.herokuapp.com/usuarios/self',
      headers: {
        Authorization: getToken(), // 3. enviarle el token a backend
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
*/
export const editarUsuario= async (id,data,successCallback, errorCallback)=>{
  const options = {
    method: 'PATCH',
    url: `https://boiling-temple-06719.herokuapp.com/usuarios/${id}`,
    headers: {'Content-Type': 'application/json',Authorization: getToken()},
    data,
  };
    await axios.request(options).then(successCallback).catch(errorCallback);
    };

export const eliminarUsuario= async (id,successCallback, errorCallback)=>{
  const options = {
    method: 'DELETE',
    url: `https://boiling-temple-06719.herokuapp.com/usuarios/${id}/`,
    headers: {'Content-Type': 'application/json',Authorization: getToken()},
  };
    await axios.request(options).then(successCallback).catch(errorCallback);

  };

// CRUD DE VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'https://boiling-temple-06719.herokuapp.com/ventas',
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'https://boiling-temple-06719.herokuapp.com/ventas' ,
  headers:{
    Authorization: getToken(),
  }
};
  await axios.request(options).then(successCallback).catch(errorCallback)
};
export const editarVenta= async (id,data,successCallback, errorCallback)=>{
  const options = {
    method: 'PATCH',
    url: `https://boiling-temple-06719.herokuapp.com/ventas/${id}`,
    headers: {'Content-Type': 'application/json',Authorization: getToken()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVenta= async (id,successCallback, errorCallback)=>{
  const options = {
    method: 'DELETE',
    url: `https://boiling-temple-06719.herokuapp.com/ventas/${id}/`,
    headers: {'Content-Type': 'application/json',Authorization: getToken()},
  };
    await axios.request(options).then(successCallback).catch(errorCallback);

  };


// CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'https://boiling-temple-06719.herokuapp.com/usuarios',
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'https://boiling-temple-06719.herokuapp.com/usuarios/self',
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
/*
export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `https://boiling-temple-06719.herokuapp.com/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
*/