// Style Pop Up

const icon = ["checked.png", "close.png", "warning.png"];
const colour = ["rgb(7, 222, 0)", "rgb(238, 255, 0)", "rgb(255, 131, 131)"];
const info = document.querySelector(".container .info");
const gambar = document.querySelector(".container .info .gambar");
const img = info.querySelector(".gambar img");
const pInfo = info.querySelector(".information p");
const h3Info = info.querySelector(".information h3");

function popUpInfo(condition, posisi) {
	if (posisi == "register") {
		if (condition) {
			img.src = icon[2];
			gambar.style.backgroundColor = colour[1];
			h3Info.innerHTML = "Peringatan";
			pInfo.innerHTML = "Maaf, username sudah terpakai";
		} else {
			img.src = icon[0];
			gambar.style.backgroundColor = colour[0];
			h3Info.innerHTML = "Sukses";
			pInfo.innerHTML = "Registrasi Berhasil";
		}
	} else if (posisi == "login") {
		if (condition == false) {
			img.src = icon[1];
			gambar.style.backgroundColor = colour[2];
			h3Info.innerHTML = "Gagal";
			pInfo.innerHTML = "Username/Password tidak ditemukan";
		} else {
			img.src = icon[1];
			gambar.style.backgroundColor = colour[2];
			h3Info.innerHTML = "Gagal";
			pInfo.innerHTML = "Harap isi data dengan benar";
		}
	}
	// console.log(gambar.backgroundColor);
	info.classList.add("down");
	setTimeout(() => {
		info.classList.remove("down");
	}, 2000);
}

// Style SliderBox
const daftarYuk = document.querySelector(".login p .daftar");
const masukYuk = document.querySelector(".judul p .btnMasuk");
const boxSection = document.querySelector(".container .boxSection");
const boxLogin = document.querySelector(".container .boxSection .boxLogin");
const boxRegister = document.querySelector(
	".container .boxSection .boxRegister"
);

const iconRegLog = document.querySelector(".container .iconRegLog img");

function showBoxLogin() {
	boxRegister.style.opacity = "0";
	iconRegLog.style.opacity = "0";
	setTimeout(() => {
		boxRegister.style.display = "none";
		boxLogin.style.display = "flex";
	}, 500);

	setTimeout(() => {
		boxLogin.style.opacity = "1";
		iconRegLog.src = "gambar2.png";
		iconRegLog.style.opacity = "1";
	}, 500);
}
function showBoxRegister() {
	boxLogin.style.opacity = "0";
	iconRegLog.style.opacity = "0";
	setTimeout(() => {
		boxLogin.style.display = "none";
		boxRegister.style.display = "flex";
	}, 500);

	setTimeout(() => {
		boxRegister.style.opacity = "1";
		iconRegLog.src = "gambar1.png";
		iconRegLog.style.opacity = "1";
	}, 500);
}

daftarYuk.addEventListener("click", () => {
	showBoxRegister();
});

masukYuk.addEventListener("click", () => {
	showBoxLogin();
});

// Catch Data and Store it in Local Storage
let personal = [];

const inputForm = document.querySelectorAll(".regis-form form input");
const btnRegister = document.querySelector(".regis-form .button .regis");
let index;
let isFind;

btnRegister.addEventListener("click", () => {
	index = undefined;
	if (
		inputForm[0].value != "" &&
		inputForm[1].value != "" &&
		inputForm[2].value != "" &&
		inputForm[3].value != ""
	) {
		for (let i = 0; i < personal.length; i++) {
			if (inputForm[2].value == personal[i].username) {
				index = i;
				isFind = true;
				break;
			}
		}
		if (index == undefined) {
			isFind == false;
			let user = {
				nama: inputForm[0].value,
				email: inputForm[1].value,
				username: inputForm[2].value,
				password: inputForm[3].value,
			};

			personal.push(user);
			showBoxLogin();
			setTimeout(() => {
				inputForm[0].value = "";
				inputForm[1].value = "";
				inputForm[2].value = "";
				inputForm[3].value = "";
			}, 1000);
			popUpInfo(isFind, "register");
		} else if (index != undefined) {
			inputForm[2].value = "";
			popUpInfo(isFind, "register");
			isFind = false;
		}
	} else {
		popUpInfo(isFind, "login");
	}
	console.log(isFind);
	// isFind = false;
});

// Validasi Login
const userLogin = document.getElementById("user-login");
const userPass = document.getElementById("user-pass");
const buttonSignIn = document.querySelector(".login .sign-in");

function checkingData() {
	isFind = false;
	index == null;
	for (let i = 0; i < personal.length; i++) {
		if (
			userLogin.value == personal[i].username &&
			userPass.value == personal[i].password
		) {
			index = i;
			isFind = true;
			break;
		}
	}
	if (index != null && isFind == true) {
		userLogin.value = "";
		userPass.value = "";
	} else {
		popUpInfo(isFind, "login");
	}
}

buttonSignIn.addEventListener("click", () => {
	setTimeout(() => {
		if (userLogin.value != "" && userPass.value != "") {
			checkingData();
		} else {
			if (userLogin.value == "" || userPass.value == "") {
				popUpInfo(false, "login");
			}
		}
		userLogin.value = "";
		userPass.value = "";
	}, 300);
});

// link.forEach((el) => {
// 	el.addEventListener("click", () => {
// 		if (el.classList.contains("linkRegister")) {
// 			login.style.left = "-100%";
// 			link[0].classList.add("radius");
// 			link[0].style.color = "black";
// 			link[1].classList.remove("radius");
// 			link[1].style.color = "#f9da5c";
// 			linkParent.style.backgroundColor = "#1ea3b2";
// 			console.log(el.classList.contains(link[0]));
// 		} else {
// 			link[0].classList.remove("radius");
// 			link[0].style.color = "#1ea3b2";
// 			link[1].classList.add("radius");
// 			link[1].style.color = "black";
// 			login.style.left = "0";
// 			linkParent.style.background = "#f9da5c";
// 		}
// 		console.log(el);
// 	});
// });

// function tampilanBox() {
// 	boxRegLogin.style.transform = "scale(1)";
// 	boxRegLogin.style.opacity = "1";
// 	overlay.style.opacity = "0.8";
// }
// function tampilanBoxClose() {
// 	boxRegLogin.style.transform = "scale(0)";
// 	boxRegLogin.style.opacity = "0";
// 	overlay.style.opacity = "0";
// }

// masuk.addEventListener("click", () => {
// 	tampilanBox();
// });

// masuk2.addEventListener("click", () => {
// 	tampilanBoxClose();
// });

// overlay.addEventListener("click", () => {
// 	tampilanBoxClose();
// });

// const linkParent = document.querySelector(".box .link");
// const link = document.querySelectorAll(".link > *");
// const login = document.querySelector(".login-register");
// const boxRegLogin = document.querySelector(".box");
// const masuk = document.querySelector("nav .masuk");
// const masuk2 = document.querySelector("nav .masuk2");
// const overlay = document.querySelector(".container .overlay");
