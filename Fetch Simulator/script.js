let submit = document.getElementById("submit");
let response = document.getElementById("response");
let url = document.getElementById("url");

let requestJson = document.getElementById("request-json");
let requestsParams = document.getElementById("requests-params");

submit.addEventListener("click", (e) => {
  response.innerText = "Fetching Data Only For You...";
  let request;
  for (let i = 0; i < document.querySelectorAll("#request").length; i++)
    if (document.querySelectorAll("#request")[i].checked) {
      request = document.querySelectorAll("#request")[i].value;
      break;
    }
  let type;
  for (let i = 0; i < document.querySelectorAll("#type").length; i++)
    if (document.querySelectorAll("#type")[i].checked) {
      type = document.querySelectorAll("#type")[i].value;
      break;
    }
  console.log(url.value);
  console.log(request);
  console.log(type);
  let fakeMethod = {};
  if (type === "JSON") {
    console.log(requestJson.value);
  } else {
    for (let key of requestsParams.children) {
      console.log(key.children[0].value);
      console.log(key.children[1].value);
      fakeMethod[key.children[0].value] = key.children[1].value;
    }
  }
  if (request === "GET") {
    if(type==='JSON'){
      if(requestJson.value.trim()!==''){ 
        fakeMethod=JSON.parse(requestJson.value);
        url.value+='?';
        for(let key in fakeMethod)
          url.value+=`${key}=${fakeMethod[key]}`;
      }
    }else{
      if(JSON.stringify(fakeMethod)!=='{}'){
        url.value+='?';
        for(let key in fakeMethod)
          url.value+=`${key}=${fakeMethod[key]}`;
      }
    }
    fetch(url.value)
      .then((response) => response.text())
      .then((data) => (response.innerText = data!=undefined?data:"FAILED :("));
  } else {
    if (type === "JSON") {
      fakeMethod = requestJson.value;
    } else fakeMethod = JSON.stringify(fakeMethod);
    console.log(fakeMethod);
    fetch(url.value, {
      method: "POST",
      body: fakeMethod,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        response.innerText = data!=undefined?data:"FAILED :(";
        Prism.highlightAll();
      });
  }
});

document.querySelectorAll("#type").forEach((type) => {
  type.addEventListener("click", () => {
    if (type.value === "JSON") {
      requestJson.style.display = "block";
      requestsParams.style.display = "none";
    } else {
      requestJson.style.display = "none";
      requestsParams.style.display = "flex";
    }
  });
});

document
  .getElementById("request-param-adder")
  .addEventListener("click", (e) => {
    let param = document.createElement("div");
    param.innerHTML = `<input type="text" placeholder="Key">
                    <input type="text" placeholder="Value">
                    <button>-</button>`;
    param.children[2].addEventListener("click", () => {
      param.remove();
    });
    requestsParams.appendChild(param);
  });
