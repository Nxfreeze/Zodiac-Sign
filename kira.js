function calculateResult(){
    var i = document.getElementById('i').value;
    var zodiak = i % 12 ;

    if(i !== null && i !== ""){
        if(zodiak == 0){
            jawapan.innerHTML = 'Zodiak anda ialah monyet';
            ialah.innerHTML = '<img src=Monkey.JPG width=200px height=300px>';
        }else if(zodiak == 1){
            jawapan.innerHTML = 'Zodiak anda ialah ayam';
            ialah.innerHTML = '<img src=Rooster.JPG width=250px height=300px>';
        }else if(zodiak == 2){
            jawapan.innerHTML = 'Zodiak anda ialah anjing';
            ialah.innerHTML = '<img src=Dog.JPG width=250px height=300px>';
        }else if(zodiak == 3){
            jawapan.innerHTML = 'Zodiak anda ialah babi';
            ialah.innerHTML = '<img src=Pig.JPG width=250px height=300px>';
        }else if(zodiak == 4){
            jawapan.innerHTML = 'Zodiak anda ialah tikus';
            ialah.innerHTML = '<img src=Rat.JPG width=250px height=300px>';
        }else if(zodiak == 5){
            jawapan.innerHTML = 'Zodiak anda ialah musang';
            ialah.innerHTML = '<img src=Ox.JPG width=250px height=300px>';
        }else if(zodiak == 6){
            jawapan.innerHTML = 'Zodiak anda ialah arnab';
            ialah.innerHTML = '<img src=Rabbit.JPG width=250px height=300px>';
        }else if(zodiak == 7){
            jawapan.innerHTML = 'Zodiak anda ialah naga';
            ialah.innerHTML = '<img src=Dragon.JPG width=250px height=300px>';
        }else if(zodiak == 8){
            jawapan.innerHTML = 'Zodiak anda ialah ular';
            ialah.innerHTML = '<img src=Snake.JPG width=250px height=300px>';
        }else if(zodiak == 9){
            jawapan.innerHTML = 'Zodiak anda ialah kuda';
            ialah.innerHTML = '<img src=Horse.JPG width=250px height=300px>';
        }else if(zodiak == 10){
            jawapan.innerHTML = 'Zodiak anda ialah kambing'
            ialah.innerHTML = '<img src=Sheep.JPG width=250px height=300px>';
        }
    }
    else{
        alert("Tidak Dibenarkan Ruangan Kosong");
    }
}
function tukar(){
    document.body.style.backgroundColor = "yellow";
}
function yes(){
    document.body.style.backgroundColor = "black"
}
