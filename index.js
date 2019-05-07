const sha256= require('crypto-js/sha256');

class Block{
    constructor(timestamp, data ,previoushash){
        this.timestamp=timestamp;
        this.data=data;
        this.previoushash=previoushash;
        this.hash=this.callculateHash();
    }
     callculateHash(){
        return sha256(this.timestamp+ JSON.stringify(this.data)+this.previoushash).toString();
    }

}

class BlockChain{
    constructor(){
        this.chian=[];
    }

    addChain(newBlock){
        this.chian.push(newBlock);
    }
}

const josscoin=new BlockChain();


const newBlock= new Block("2019-05-07", { amount: 500 }, "ABCDEFG");

josscoin.addChain(newBlock);

console.log(newBlock);