const sha256= require('crypto-js/sha256');

class Block{
    constructor(timestamp, data ,previoushash=""){
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
        this.chian=[this.generateGenesisBlock()];
    }

    generateGenesisBlock(){
        return new Block("2019-05-07", "genesis", "0000")
    }

    getLatestblock(){
        return this.chian[this.chian.length-1];
    }

    addChain(newBlock){
        newBlock.previoushash=this.getLatestblock().hash;
        newBlock.hash=newBlock.callculateHash();
        this.chian.push(newBlock);
    }
    
}

const josscoin=new BlockChain();


const newBlock= new Block("2019-05-07", { amount: 500 });

josscoin.addChain(newBlock);

console.log(josscoin);

