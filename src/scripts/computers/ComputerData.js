let computers = [];

export const useComputers = () => {
  return computers.slice();
}

export const getComputers = () => {
  return fetch('http://localhost:8088/computers')
  .then(res => res.json())
  .then(data => computers = data);
}