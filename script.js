// SETELAH BUKA LOCALHOST DARI DB JSON, COPY IP MSUKIN KESNI
let data = [];
axios.get('http://localhost:3000/contacts')
// PENGAMBILAN DATA INI TERJADI APABILA HASIL DATA RESPONSE TIDAK PERLU
// DIBUAT RETURN RESPONSE.JSON();

// TERDAPAT FITUR HAPUS DI LI ONCLICK
.then((response)=>{
    console.log(response);
    const tampilanHTML = document.querySelector("#contacts>ol")
    response.data.forEach(item => {
        const {name,age, id} = item;
        const itemHTML = `<li>
        Name : ${name}
        <br>
        Age : ${age} Year
        <button onclick="ubah(${id})">edit</button>
        <button onclick="hapus(${id})">hapus</button>
        </li>`;
        tampilanHTML.innerHTML +=itemHTML;
    })
})

// .then((data)=>{
//     console.log(data);
//     document.getElementById('contacts')
    
// })

// MENANGKAP ERROR DALAM CODE KITA, CONS ERROR UTK EFEK ERROR MERAH
.catch((pesanError)=>{
    console.error(pesanError);
    
})
// TERDAPAT FITUR HAPUS DI LI ONCLICK
const hapus = (id) => {
    axios.delete(`http://localhost:3000/contacts/${id}`)
}
const ubah = (id) => {
    const contact = data.find(item=>{
        return item ===id
    })

    if(contact){
    const name = window.prompt('Name',contact.name);
    const age = window.prompt('Age',contact.name);

    axios.put(`http://localhost:3000/contacts/${id}`,{
name,
age
    });
}
}





// INI INPUTAN KE2 - GAGAL

// document.getElementById('simpanContact').addEventListener('click',function(event){
//     // event.preventDefault();
//  const name = document.getElementsByName('name')[0].value;
//  const age = document.getElementsByName('age')[0].value;

//  axios.post('http://localhost:3000/contacts',{
//          name,
//          age
//  })
// .then((response) =>{
//     window.alert('berhasil menambah data');
// })

// .catch((pesanError) =>{
//     console.error(pesanError)
    
// })

// })