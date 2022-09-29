//Bunu yapılacak olan görevleri saklamak için yaptık
let thingsToDo = [];

let yapiliyor = [];
let id = 0;
//const thing = { adi: name, detayi: detail };
// thingsToDo.push(thing);
function add(e) {
  //html içindeki id si task-name olan inputun valuesu alındı.
  const name = document.getElementById("task-name").value;

  //detay için değişken oluşturuldu
  const detail = document.getElementById("task-detail").value;

  //görev adında bir obje olusturdum bu objeyi görevler dizisinin içine ekledim
  let yapilcak = { id: id, name: name, detaill: detail };
  thingsToDo.push(yapilcak);
  //sonraki eklenecek gorevin id si farklı olsun diye 1 artırdım
  id++;

  let newDiv = `
  <div class="col-12 >
  <div class="card w-100"> 
      <div class="card-body">
      Görev Numarası: <h5 class="card-tasknumber">${yapilcak.id}</h5>
         Görev Adı: <h5 class="card-taskname">${yapilcak.name}</h5>
      Görev Detayı: <p class="card-taskdetail">${yapilcak.detaill}</p>
          <span><button class="btn btn-primary" onclick="makeThings(event,${yapilcak.id})">Yapılıyor</button><button class="btn btn-danger ms-3" onclick="deleteThings(event
   )">Sil</button></span>

        
      </div>
  </div>
</div>`;

  // console.log(thingsToDo);
  //id si görev 1 olana kodlarıyla getir
  document.getElementById("add-gorev1").innerHTML =
    //id si add-gorev1 olana yeni html kodlarımı getir
    document.getElementById("add-gorev1").innerHTML + newDiv;

  //   clear();
}

function makeThings(event, upId) {
  //console.log(upId);
  let things = thingsToDo.filter((things) => things.id == upId);
  console.log(things);
  let newDiv = `
  
  <div class="col-12 "id="">
    <div class="card w-100">
     
        <div class="card-body">
        Görev Numarası: <h5 class="card-tasknumber">${things[0].id}</h5>
           Görev Adı: <h5 class="card-taskname">${things[0].name}</h5>
        Görev Detayı: <p class="card-taskdetail">${things[0].detaill}</p>
            <span><button class="btn btn-primary" onclick="makedThings(event,${things[0].id})">Yapıldı</button><button class="btn btn-danger ms-3" onclick="deleteThings(event
          )">Sil</button></span>
  
          
        </div>
    </div>
  </div>
  
  `;
  document.getElementById("add-gorev2").innerHTML =
    document.getElementById("add-gorev2").innerHTML + newDiv;

  event.target.closest(".card-body").remove();
}
function makedThings(event) {
  const name = document.getElementById("task-name").value;
  const detail = document.getElementById("task-detail").value;
  let newDiv = `
    
    <div class="col-12 "id="">
      <div class="card w-100">
       
          <div class="card-body">
          Görev Numarası: <h5 class="card-tasknumber">${id}</h5>
             Görev Adı: <h5 class="card-taskname">${name}</h5>
          Görev Detayı: <p class="card-taskdetail">${detail}</p>
           
            
          </div>
      </div>
    </div>
    
    `;
  document.getElementById("add-gorev3").innerHTML =
    document.getElementById("add-gorev3").innerHTML + newDiv;
  event.target.closest(".card-body").remove();
}
function deleteThings(event, id) {
  event.target.closest(".card-body").remove();

  // cardbody.remove();
  thingsToDo = thingsToDo.filter((thing) => thing.id != id);
}
function clear() {
  document.getElementById("task-name").value = "";
  document.getElementById("task-detail").value = "";
}
