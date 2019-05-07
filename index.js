const sha256= require('crypto-js/sha256');

class Block{
    constructor(timestamp, data ,previoushash){
        this.timestamp=timestamp;
        this.data=data;
        this.previoushash=previoushash;
        this.hash=this.callculateHash();
    }
    callculateHash(){
        return sha256(this.timestamp+ JSON.stringify(this.data)+this.previoushash);
    }

}

const newBlock= new Block("2019-05-07", { amount: "masum" }, "ABCDEFG");

console.log(newBlock);