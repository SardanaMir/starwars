function getData(){
    try{
        const category = document.querySelector('.category').value;
        const number = +document.querySelector('.number').value

        fetch(`https://swapi.dev/api/${category}/${number}/`)
        .then(res => res.json())
        .then((data) => {
            const newElem = document.createElement('p');
            const parentElem = document.querySelector('.wrapper');
            if (!data.name){
                newElem.textContent = 'Такого нет :( Попробуйте еще раз';
                parentElem.append(newElem);
            } else {
                newElem.innerHTML = `Name: ${data.name}`;
                parentElem.append(newElem);
            }
        })
    }
    catch(err){
        console.log(err)
    }
}
document.querySelector('.btn').addEventListener('click', getData);