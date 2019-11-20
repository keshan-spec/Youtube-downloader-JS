const convertBtn = document.querySelector(".btn");
const URLinput = document.querySelector("#url-field");

const disableBtn = () => {
  if (URLinput.value == "") {
    convertBtn.classList.add("disabled");
  } else {
    convertBtn.classList.remove("disabled");
  }
};

disableBtn();

URLinput.addEventListener("keyup", () => {
  disableBtn();
});

convertBtn.addEventListener("click", () => {
  console.log(`URL : ${URLinput.value}`);
  sendURL(URLinput.value);
});

const sendURL = url => {
  window.location.href = `http://localhost:4000/download?URL=${url}`;
};
