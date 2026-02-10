function login(){
  let role = document.getElementById("role").value;

  if(role=="user") window.location="user/dashboard.html";
  if(role=="collector") window.location="collector/dashboard.html";
  if(role=="admin") window.location="admin/dashboard.html";
}
