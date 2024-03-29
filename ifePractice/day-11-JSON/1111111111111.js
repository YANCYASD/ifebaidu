function formatData(data) {
	if (typeof data === "object") {
	  if (Object.keys(data).length !== 0) {
		var str = "?";
		for (var key in data) {
		  str += `${key}=${data[key]}&`;
		}
		return str.substring(0,str.length - 1);
	  } else {
		return "";
	  }
	} else {
	  return data;
	}
  }

  function ajax(url, options) {
	// your implement
	var { type = "GET", data, onsuccess } = options;
	var hr = new XMLHttpRequest();

	if (type === "GET"){
	  
	  hr.open(type,url + formatData(data))
	  hr.send()
	}else if(type === "POST") {
	  hr.open(type,url)
	  hr.setRequestHeader('content-type', 'text/plain')
	  hr.send(JSON.stringify(data))
	}
	hr.onreadystatechange = function() {
	  if(hr.readyState === 4){
		  if(hr.status>=200 && hr.status <300) {
			  onsuccess(hr.responseText,hr);
		  }
	  }
	}

  }

  // 使用示例：
  ajax("http://localhost:8080/server/ajaxtest", {
	  type:"POST",
	data: {
	  name: "simon",
	  password: "123456",
	},
	onsuccess: function (responseText, xhr) {
	  console.log(responseText);
	},
  });