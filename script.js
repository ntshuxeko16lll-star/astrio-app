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
// SIGN UP
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Signup successful! Check your email for verification.");
  }
}

// LOGIN
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Login successful!");
    window.location.href = "home.html"; // Change to your feed page
  }
    }
