// 模拟 localStorage 时如何实现过期时间功能

function get(name) {
  const record = JSON.parse(localStorage.getItem(name));
  return record.time - Date.now() > 0 ? record: localStorage.removeItem('record');
}

function set(value) {
  let record = {
    time: Date.now() + 5000,
    result: value
  }
  localStorage.setItem('record', JSON.stringify(record));
}

