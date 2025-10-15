console.log('***** for loop *****');
for(let i = 0; i<5;i++){
    console.log(i);
}

console.log('***** while loop *****');
let i =0;
while(i<5){
    console.log(i);
    i++;
}

console.log('***** do while loop *****');
i =0;
do{
    console.log(i);
    i++;
}while(i<5);

console.log('***** nested loop *****');
for(i=0;i<5;i++){
    let row ='';
    for(let j=0;j<5-i;j++){
        row += '* ';
    }
    console.log(row);
}
