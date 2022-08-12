import { toast } from 'react-toastify';

// jika ingin menambahkan misal success dan lain sebagainya bisa
// kunjungi website ini : https://fkhadra.github.io/react-toastify/introduction

export function Error(message) {
  return toast.error(message, {
    position: 'top-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
