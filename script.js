// // Initialize Supabase
const SUPABASE_URL = "YOUR_PROJECT_URL";
const SUPABASE_KEY = "YOUR_ANON_KEY";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
let posts = [];

function signup() {
  alert("Signup working (we connect backend later)");
}

function login() {
  location.href = "home.html";
}

function logout() {
  location.href = "index.html";
}

function createPost() {
  let text = document.getElementById("content").value;
  if (!text) return;

  posts.push(text);
  localStorage.setItem("posts", JSON.stringify(posts));

  location.href = "home.html";
}

function loadPosts() {
  let feed = document.getElementById("feed");
  posts = JSON.parse(localStorage.getItem("posts")) || [];

  feed.innerHTML = "";
  posts.reverse().forEach(p => {
    feed.innerHTML += `<div class="post">${p}</div>`;
  });
}
