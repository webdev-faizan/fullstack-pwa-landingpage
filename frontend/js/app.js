function myFunction(x) {
  x.classList.toggle("change");
}
function showNaavbar() {
  document.getElementById("navgation-bar").classList.toggle("none");
}
document.getElementById("whatsappbtn").addEventListener("click", function () {
  window.open("https://web.whatsapp.com/send?phone=+923180867271", "_blank");
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// http://localhost:3000/contactus

async function PostData(e) {
  // e.preventDefault();
  const url = "http://localhost:3000/contactus";
  const data = {
    FristName: document.getElementById("Frist-Name").value,
    LastName: document.getElementById("Last-Name").value,
    Phone: document.getElementById("phone").value,
    Email: document.getElementById("Email").value,
    Location: document.getElementById("location").value,
  };

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Response:", result);
      document.getElementById("Frist-Name").value = "";
      document.getElementById("Last-Name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("Email").value = "";
      document.getElementById("location").value = "";
      window.location.href='#home'
    })

    .catch((error) => {
      console.error("Error:", error);
    });
}
