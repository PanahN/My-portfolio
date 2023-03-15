let line = "\r\n";

let indeksDeyerleri = alert("BƏDƏN KÜTLƏ İNDEKSİ DƏYƏRLƏRİ:" + line + "1 - Zəif çəkili" + line + "2 - Normal çəkili" + line + "3 - Artıq çəkili" + line + 
"4 - 1-ci dərəcəli piylənmə" + line + "5 - 2-ci dərəcəli piylənmə" + line + "6 - 3-cü dərəcəli piylənmə");

let boy = Number(prompt("Zəhmət olmasa, boyunuzu (m-lə) yazın:"));

let kilo = Number(prompt("Zəhmət olmasa, çəkinizi (kq-la) yazın:")); 

if(kilo == null || kilo == ""){
    kilo.stop()
};

let indeks = (kilo) / (boy * boy);

                                                // "switch case" ilə qurulan bədən kütlə indeksi kalkulyatoru

let message;

switch(true){
    case(indeks<=18.5):
    message = alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
    "Və sizin bədən kütlə indeksi dəyəriniz 'Zəif çəkili' olaraq qiymətləndirilir.");
    break;

    case(indeks>18.5 && indeks<=24.9):
    message = alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
    "Və sizin bədən kütlə indeksi dəyəriniz 'Normal çəkili' olaraq qiymətləndirilir.");
    break;

    case(indeks>25.0 && indeks<=29.9):
    message = alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
    "Və sizin bədən kütlə indeksi dəyəriniz 'Artıq çəkili' olaraq qiymətləndirilir.");
    break;
    
    case(indeks>30.0 && indeks<=34.9):
    message = alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
    "Və sizin bədən kütlə indeksi dəyəriniz '1-ci dərəcəli piylənmə' olaraq qiymətləndirilir.");
    break;

    case(indeks>35.0 && indeks<=39.9):
    message = alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
    "Və sizin bədən kütlə indeksi dəyəriniz '2-ci dərəcəli piylənmə' olaraq qiymətləndirilir.");
    break;

    case(indeks>=40):
    message = alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
    "Və sizin bədən kütlə indeksi dəyəriniz '3-cü dərəcəli piylənmə' olaraq qiymətləndirilir.");
    break;

    default:
        message = alert("Zəhmət olmasa, boyunuzu və ya çəkinizi düzgün qeyd edin.");
        break;
}



                                                // "if else" ilə qurulan bədən kütlə indeksi kalkulyatoru




// if(indeks<=18.5){
//     alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
//     "Və sizin bədən kütlə indeksi dəyəriniz 'Zəif çəkili' olaraq qiymətləndirilir.");
// }else if(indeks>18.5 && indeks<=24.9){
//     alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
//     "Və sizin bədən kütlə indeksi dəyəriniz 'Normal çəkili' olaraq qiymətləndirilir.");
// }else if(indeks>25.0 && indeks<=29.9){
//     alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
//     "Və sizin bədən kütlə indeksi dəyəriniz 'Artıq çəkili' olaraq qiymətləndirilir.");
// }else if(indeks>30.0 && indeks<=34.9){
//     alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
//     "Və sizin bədən kütlə indeksi dəyəriniz '1-ci dərəcəli piylənmə' olaraq qiymətləndirilir.");
// }else if(indeks>35.0 && indeks<=39.9){
//     alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
//     "Və sizin bədən kütlə indeksi dəyəriniz '2-ci dərəcəli piylənmə' olaraq qiymətləndirilir.");
// }else if(indeks>=40){
//     alert("Sizin bədən kütlə indeksiniz:" + line + indeks.toFixed(1) + " " + "kq/m2-dir." + line +
//     "Və sizin bədən kütlə indeksi dəyəriniz '3-cü dərəcəli piylənmə' olaraq qiymətləndirilir.");
// }else{
//     alert("Zəhmət olmasa, boyunuzu və ya çəkinizi düzgün qeyd edin.");
// }