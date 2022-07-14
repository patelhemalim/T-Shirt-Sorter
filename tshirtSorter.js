// Write your solution below:

function tshirtShorter(str){
    let small="";
    let medium="";
    let large="";
    for(let i=0;i<str.length;i++){
        if(str[i]==="s"){
            small+="s"
        }else if(str[i]==="m"){
            medium+="m"
        }if(str[i]==="l"){
            large+="l"
        }

        
    }
    return small+medium+large

}
console.log(tshirtShorter('lsmlsmlsmmmss'))