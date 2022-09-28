if (window.location.pathname == "/quis1") {
  const myTi = setTimeout(submitToGoogleSheet, 800);

  function submitToGoogleSheet() {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxc6lRZLug4MaHkxFmO46HvhS5vXdsFqS7PYUS9Qol96_sznTm64CeHAotek3EEOiId/exec";
    const form = document.forms["submit-to-google-sheet"];
    const btnKirim = document.querySelector(".btn-kirim");
    const btnLoading = document.querySelector(".btn-loading");
    const kirimSuksesAlert = document.querySelector(".kirim-sukses-alert");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // tombol kirim di klik
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          // tampilkan tombol loading
          btnLoading.classList.toggle("d-none");
          btnKirim.classList.toggle("d-none");
          // tampilkan alert
          kirimSuksesAlert.classList.toggle("d-none");
          // reset form
          form.reset();
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    });
  }
}
