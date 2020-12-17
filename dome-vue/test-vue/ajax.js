export const post = function(param){
  let xml = new XMLHttpRequest();
  xml.open('post', 'https://www.baidu.com');
  xml.setRequestHeader('token', '3243');
  xml.send(JSON.stringify(param))
  return new Promise((reject, resolve)=>{
    // 200 连接成功, 不然连接失败
    if(xml.status === 200) {
      xml.onreadystatechange = function() {
        // 请求完成
        if(xml.readyState === 4) {
          let response = JSON.parse(xml.responseText)
          resolve(response)
        }else {
          let error = new Error('请求失败')
          reject(error)
        
        }
      }
    } else {
      let error = new Error("连接失败");
      reject(error);
    }
  })
}

