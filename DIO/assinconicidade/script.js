/*async function resolvePromise(){
	const myPromise = new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve('Resolvida');
		}, 3000);
	});
	let result;
	try {
	result = await myPromise
		.then((result) => result + 'passando pelo then')
		.then((result) = result + 'e agora acabou')
	}
	catch(err) {
		result = console.log(err.message);
	}
	return result;
}*/

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};
const loadImg = async() => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImag);

loadImg();