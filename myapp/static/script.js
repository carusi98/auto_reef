//Scripts for displaying Date and Time at top of page
function display_c(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('display_ct()',refresh)
  }
  
function display_ct() {
  var x = new Date()
  document.getElementById('ct').innerHTML = x;
  display_c();
  }

function getStatus() {
  return new Promise((resolve, reject) => {
      fetch('/api/getdata')
      .then(data => {
          resolve(data.json());
          console.log(data)
      }).catch(err => {
          console.log(err);
          reject(err);
      })
  });
}

function postStatus(id) {
  return new Promise((resolve, reject) => {
      fetch('/api/postdata',{
        method: 'POST',
        body: JSON.stringify({ 'action' : id }),
        headers: {
            'Content-Type' : 'application/json'
        } 
      })
      .then(data => {
          console.log(id)
          resolve(data.json());
          console.log(data)
      }).catch(err => {
          console.log(err);
          reject(err);
      })
  });
}





function LED_onbuttonClick() {
  const id = 'LED_on';
  console.log(id);
  postStatus(id).then(data => {
    const prettyText = JSON.stringify(data);
    output.innerHTML = `<h1>API Output:</h1>
                        <pre>${prettyText} </pre>`
                        //console.log(data.Switch1)
  })
  .catch(e => {
      output.innerHTML = `<h1>API Error: API UNREACHABLE</h1>`;
  })
}

function LED_offbuttonClick() {
  const id = 'LED_off';
  postStatus(id).then(data => {
    const prettyText = JSON.stringify(data);
    output.innerHTML = `<h1>API Output:</h1>
                        <pre>${prettyText} </pre>`
                        //console.log(data.Switch1)
  })
  .catch(e => {
      output.innerHTML = `<h1>API Error: API UNREACHABLE</h1>`;
  })
}



