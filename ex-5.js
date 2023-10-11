let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];

function searchCrimeRecord(name) {
  // Start coding here
  if(crimeRecordNames.includes(name)){
    console.log(`${name} has a crime record !!!`);
  } else {
    console.log(`${name} has no crime record.`);
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
searchCrimeRecord("Dilan Sandra"); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
searchCrimeRecord("Tinashe Benigno"); //"Tinashe Benigno has crime record !!!"