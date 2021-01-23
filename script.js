if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sworker.js").then(registration=>{
      console.log("sevice worker register")
      console.log(registration)
  }).catch(error=>{
      console.log("error service worker")
      console.log(error)
  })
}
else{
    alert("service worker not loading")
}


