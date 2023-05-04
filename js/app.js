const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

// future problem: add recent blog posts
// const blogFolder = "./blog"; // Change this to the path of your blog folder
// const numPostsToShow = 1; // Change this to the number of recent posts to display

// fetch(blogFolder)
//   .then((response) => response.text())
//   .then((html) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, "text/html");
//     const links = Array.from(doc.querySelectorAll("a"));
//     const sortedLinks = links
//       .filter((link) => link.href.endsWith(".html")) // Change this if your blog posts have a different file extension
//       .sort((a, b) => b.lastModified - a.lastModified) // Sort by last modified date, newest first
//       .slice(0, numPostsToShow); // Only show the most recent posts

//     const blogPostsList = document.getElementById("blog-posts");
//     sortedLinks.forEach((link) => {
//       const listItem = document.createElement("li");
//       const anchor = document.createElement("a");
//       anchor.href = link.href;
//       anchor.innerText = link.innerText;
//       listItem.appendChild(anchor);
//       blogPostsList.appendChild(listItem);
//     });
//   });